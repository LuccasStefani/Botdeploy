declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: Element | null;
      smooth?: boolean;
      multiplier?: number;
      inertia?: number;
      class?: string;
      getDirection?: boolean;
      getSpeed?: boolean;
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      init(): void;
      update(): void;
      scrollTo(target: number | string | HTMLElement, options?: any): void;
      destroy(): void;
    }
  }
  