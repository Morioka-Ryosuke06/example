// LenisWrapper.js
import LenisLib from '@studio-freight/lenis';

class LenisWrapper {
  constructor() {
    this.lenis = new LenisLib();
    this.raf = this.raf.bind(this);
    this.requestAnimationFrame = this.requestAnimationFrame.bind(this);
    this.initialize();
  }

  initialize() {
    this.requestAnimationFrame();
  }

  raf(time) {
    this.lenis.raf(time);
    this.requestAnimationFrame();
  }

  requestAnimationFrame() {
    requestAnimationFrame(this.raf);
  }
}

export default LenisWrapper;
