import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollingService {
  private styleTag: HTMLStyleElement;

  constructor() {
    this.styleTag = this.buildStyleElement();
  }

  public disable(): void {
    document.body.appendChild(this.styleTag);
  }

  public enable(): void {
    document.body.removeChild(this.styleTag);
  }

  private buildStyleElement(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = `body { overflow: hidden !important; }`;
    return style;
  }
}
