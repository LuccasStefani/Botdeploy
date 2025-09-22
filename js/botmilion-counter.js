/* ===== BOT MILION – contador ===== */
window.BotMilionCounter = (function(){
    // -------- helpers ----------
    const nf0 = new Intl.NumberFormat('en-US');
    const nf2 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });
    const short = a => a ? a.slice(0,6)+"…"+a.slice(-4) : "—";
    const q = (root, sel) => root.querySelector(sel);
    const qe = (root, attr) => root.querySelector(`[data-el="${attr}"]`);
  
    function calcUSD(sold, caps, prices){
      let r = sold, usd = 0;
      for (let i=0;i<caps.length;i++){
        const fill = Math.max(0, Math.min(r, caps[i]));
        usd += fill * prices[i];
        r -= fill;
      }
      return usd;
    }
  
    async function pickProvider(rpcs){
      for (let i=0;i<rpcs.length;i++){
        const url = rpcs[i];
        try {
          const p = new ethers.providers.JsonRpcProvider(url, { chainId:56, name:"bsc" });
          await Promise.race([ p.getBlockNumber(), new Promise((_,rej)=>setTimeout(()=>rej(new Error("rpc timeout")), 2500)) ]);
          return p;
        } catch (e) { console.warn("RPC falhou:", url, e && e.message); }
      }
      throw new Error("Nenhum RPC respondeu.");
    }
  
    // -------- init ----------
    async function init(cfg){
      if (!window.ethers) { console.error("ethers não encontrado."); return; }
  
      const {
        rootId = "botmilion-counter",
        rpcUrls = [
          "https://bsc-dataseed.binance.org/",
          "https://bsc-dataseed1.binance.org/",
          "https://bsc.publicnode.com",
          "https://bscrpc.com"
        ],
        tokenAddress = "0x188698f21f468b5922008edC17A7976994d1Cce3",
        monitoredWallet = "0xD6C87FcadA5a6AD326cC6D6Ad9CABd396bC4366E",
        initBalanceTokens = 200000000,
        phaseCaps = [100000000, 100000000],
        pricesUsd = [0.0011, 0.0012],
        refreshMs = 15000
      } = cfg || {};
  
      const root = document.getElementById(rootId);
      if (!root) { console.error("Elemento root não encontrado:", rootId); return; }
  
      // cache de elementos
      const el = {
        walletShort:  q(root, "#bm-walletShort"),
        soldTokens:   qe(root, "soldTokens"),
        raisedUsd:    qe(root, "raisedUsd"),
        progressBar:  qe(root, "progressBar"),
        progressPct:  qe(root, "progressPct"),
        soldShort:    qe(root, "soldShort"),
        capTotal:     qe(root, "capTotal"),
        currentPhase: qe(root, "currentPhase"),
        statusDot:    q(root, "#bm-statusDot"),
        statusText:   q(root, "#bm-statusText"),
        errorBox:     qe(root, "errorBox"),
        countdown:    qe(root, "countdown"),
      };
  
      // provider/contract
      const ERC20_ABI = [
        "function decimals() view returns (uint8)",
        "function balanceOf(address) view returns (uint256)"
      ];
      let provider = null, contract = null, decimals = null, nextUpdateAt = 0;
  
      async function ensureSetup(){
        if (!provider) provider = await pickProvider(rpcUrls);
        if (!contract) contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
        if (decimals === null) decimals = await contract.decimals();
      }
  
      function setStatus(text, ok=true){
        el.statusText.textContent = text;
        el.statusDot.style.background = ok ? "var(--success)" : "var(--danger)";
      }
      function setError(msg){
        el.errorBox.textContent = msg || "";
        el.errorBox.style.display = msg ? "block" : "none";
      }
  
      async function readOnce(){
        try{
          setError(""); setStatus("Atualizando…", true);
          await ensureSetup();
  
          const balWei = await contract.balanceOf(monitoredWallet);
          const balTokens = Number(ethers.utils.formatUnits(balWei, decimals));
  
          const totalCap = phaseCaps[0] + phaseCaps[1];
          let sold = initBalanceTokens - balTokens;
          if (!isFinite(sold) || sold < 0) sold = 0;
          const soldCapped = Math.min(sold, totalCap);
  
          const raised = calcUSD(soldCapped, phaseCaps, pricesUsd);
          const currentPhase = soldCapped >= phaseCaps[0] ? 2 : 1;
          const pct = totalCap ? Math.min(100, (soldCapped/totalCap)*100) : 0;
  
          // render
          el.walletShort.textContent = short(monitoredWallet);
          el.soldTokens.textContent  = nf0.format(soldCapped);
          el.raisedUsd.textContent   = '$ ' + nf2.format(raised);
          el.progressBar.style.width = pct + '%';
          el.progressPct.textContent = nf2.format(pct) + '%';
          el.soldShort.textContent   = nf0.format(soldCapped);
          el.capTotal.textContent    = nf0.format(totalCap);
          el.currentPhase.textContent= currentPhase;
  
          setStatus("Atualizado agora", true);
        }catch(e){
          console.error(e);
          setStatus("Falha ao atualizar", false);
          setError("Erro: " + (e && e.message ? e.message : e));
          provider = null; contract = null; decimals = null; // força re-setup
        }finally{
          nextUpdateAt = Date.now() + refreshMs;
        }
      }
  
      // countdown
      function start(){
        // primeira leitura
        readOnce();
        // contador regressivo e disparo periódico
        setInterval(() => {
          const remaining = Math.max(0, nextUpdateAt - Date.now());
          const s = Math.ceil(remaining / 1000);
          if (el.countdown) el.countdown.textContent = s + "s";
          if (remaining <= 0) readOnce();
        }, 1000);
      }
  
      start();
    }
  
    return { init };
  })();
  