// lib/botmilion-counter.ts
import { ethers } from "ethers";

export interface BotMilionCounterConfig {
  rootId?: string;
  rpcUrls?: string[];
  tokenAddress?: string;
  monitoredWallet?: string;
  initBalanceTokens?: number;
  phaseCaps?: number[];
  pricesUsd?: number[];
  refreshMs?: number;
}

interface ElementsCache {
  walletShort: HTMLElement | null;
  soldTokens: HTMLElement | null;
  raisedUsd: HTMLElement | null;
  progressBar: HTMLElement | null;
  progressPct: HTMLElement | null;
  soldShort: HTMLElement | null;
  capTotal: HTMLElement | null;
  currentPhase: HTMLElement | null;
  statusDot: HTMLElement | null;
  statusText: HTMLElement | null;
  errorBox: HTMLElement | null;
  countdown: HTMLElement | null;
}

export class BotMilionCounter {
  private root: HTMLElement | null = null;
  private el: ElementsCache = {
    walletShort: null,
    soldTokens: null,
    raisedUsd: null,
    progressBar: null,
    progressPct: null,
    soldShort: null,
    capTotal: null,
    currentPhase: null,
    statusDot: null,
    statusText: null,
    errorBox: null,
    countdown: null,
  };
  private provider: ethers.JsonRpcProvider | null = null;
  private contract: ethers.Contract | null = null;
  private decimals: number | null = null;
  private nextUpdateAt = 0;
  private config: BotMilionCounterConfig;

  constructor(cfg?: BotMilionCounterConfig) {
    this.config = {
      rootId: "botmilion-counter",
      rpcUrls: [
        "https://bsc-dataseed.binance.org/",
        "https://bsc-dataseed1.binance.org/",
        "https://bsc.publicnode.com",
        "https://bscrpc.com",
      ],
      tokenAddress: "0x188698f21f468b5922008edC17A7976994d1Cce3",
      monitoredWallet: "0xD6C87FcadA5a6AD326cC6D6Ad9CABd396bC4366E",
      initBalanceTokens: 200_000_000,
      phaseCaps: [100_000_000, 100_000_000],
      pricesUsd: [0.0011, 0.0012],
      refreshMs: 15_000,
      ...cfg,
    };

    if (typeof window !== "undefined") this.init();
  }

  private qh(sel: string): HTMLElement | null {
    return this.root?.querySelector(sel) as HTMLElement | null;
  }

  private qhe(attr: string): HTMLElement | null {
    return this.root?.querySelector(`[data-el="${attr}"]`) as HTMLElement | null;
  }

  private short(addr: string | undefined) {
    if (!addr) return "—";
    return addr.slice(0, 6) + "…" + addr.slice(-4);
  }

  private calcUSD(sold: number, caps: number[], prices: number[]) {
    let r = sold;
    let usd = 0;
    for (let i = 0; i < caps.length; i++) {
      const fill = Math.max(0, Math.min(r, caps[i]));
      usd += fill * prices[i];
      r -= fill;
    }
    return usd;
  }

  private async pickProvider(rpcs: string[]) {
    for (const url of rpcs) {
      try {
        const p = new ethers.JsonRpcProvider(url, { chainId: 56, name: "bsc" });
        await Promise.race([
          p.getBlockNumber(),
          new Promise((_, rej) => setTimeout(() => rej(new Error("RPC timeout")), 2500)),
        ]);
        return p;
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.warn("RPC failed:", url, e.message);
        } else {
          console.warn("RPC failed:", url, e);
        }
      }
    }
    throw new Error("Nenhum RPC respondeu.");
  }

  private setStatus(text: string, ok = true) {
    if (this.el.statusText) this.el.statusText.textContent = text;
    if (this.el.statusDot) this.el.statusDot.style.background = ok ? "var(--success)" : "var(--danger)";
  }

  private setError(msg?: string) {
    if (this.el.errorBox) {
      this.el.errorBox.textContent = msg || "";
      this.el.errorBox.style.display = msg ? "block" : "none";
    }
  }

  private async ensureSetup() {
    if (!this.provider) this.provider = await this.pickProvider(this.config.rpcUrls!);
    if (!this.contract) this.contract = new ethers.Contract(this.config.tokenAddress!, [
      "function decimals() view returns (uint8)",
      "function balanceOf(address) view returns (uint256)",
    ], this.provider);
    if (this.decimals === null) this.decimals = await this.contract.decimals();
  }

  private async readOnce() {
    try {
      this.setError("");
      this.setStatus("Atualizando…", true);
      await this.ensureSetup();

      const balWei = await this.contract!.balanceOf(this.config.monitoredWallet!);
      const balTokens = Number(ethers.formatUnits(balWei, this.decimals!));

      const totalCap = this.config.phaseCaps![0] + this.config.phaseCaps![1];
      let sold = this.config.initBalanceTokens! - balTokens;
      if (!isFinite(sold) || sold < 0) sold = 0;
      const soldCapped = Math.min(sold, totalCap);

      const raised = this.calcUSD(soldCapped, this.config.phaseCaps!, this.config.pricesUsd!);
      const currentPhase = soldCapped >= this.config.phaseCaps![0] ? 2 : 1;
      const pct = totalCap ? Math.min(100, (soldCapped / totalCap) * 100) : 0;

      // render
      if (this.el.walletShort) this.el.walletShort.textContent = this.short(this.config.monitoredWallet);
      if (this.el.soldTokens) this.el.soldTokens.textContent = new Intl.NumberFormat("en-US").format(soldCapped);
      if (this.el.raisedUsd) this.el.raisedUsd.textContent = "$ " + new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(raised);
      if (this.el.progressBar) this.el.progressBar.style.width = pct + "%";
      if (this.el.progressPct) this.el.progressPct.textContent = pct.toFixed(2) + "%";
      if (this.el.soldShort) this.el.soldShort.textContent = new Intl.NumberFormat("en-US").format(soldCapped);
      if (this.el.capTotal) this.el.capTotal.textContent = new Intl.NumberFormat("en-US").format(totalCap);
      if (this.el.currentPhase) this.el.currentPhase.textContent = currentPhase.toString();

      this.setStatus("Atualizado agora", true);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e);
        this.setStatus("Falha ao atualizar", false);
        this.setError("Erro: " + e.message);
      } else {
        console.error(e);
        this.setStatus("Falha ao atualizar", false);
        this.setError("Erro inesperado");
      }
      this.provider = null;
      this.contract = null;
      this.decimals = null;
    } finally {
      this.nextUpdateAt = Date.now() + this.config.refreshMs!;
    }
  }

  private startCountdown() {
    setInterval(() => {
      const remaining = Math.max(0, this.nextUpdateAt - Date.now());
      const s = Math.ceil(remaining / 1000);
      if (this.el.countdown) this.el.countdown.textContent = s + "s";
      if (remaining <= 0) this.readOnce();
    }, 1000);
  }

  private async init() {
    if (typeof window === "undefined") return;
    this.root = document.getElementById(this.config.rootId!);
    if (!this.root) {
      console.error("Elemento root não encontrado:", this.config.rootId);
      return;
    }

    this.el = {
      walletShort: this.qh("#bm-walletShort"),
      soldTokens: this.qhe("soldTokens"),
      raisedUsd: this.qhe("raisedUsd"),
      progressBar: this.qhe("progressBar"),
      progressPct: this.qhe("progressPct"),
      soldShort: this.qhe("soldShort"),
      capTotal: this.qhe("capTotal"),
      currentPhase: this.qhe("currentPhase"),
      statusDot: this.qh("#bm-statusDot"),
      statusText: this.qh("#bm-statusText"),
      errorBox: this.qhe("errorBox"),
      countdown: this.qhe("countdown"),
    };

    await this.readOnce();
    this.startCountdown();
  }
}
