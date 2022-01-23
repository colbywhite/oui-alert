import { css, html, LitElement } from 'lit';

export class OuiAlert extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--oui-alert-bg-color, #fff);
      color: var(--oui-alert-text-color, #000);
      border: 1px solid var(--oui-alert-border-color, #444);
    }
  `;

  render() {
    return html`
      <div role="alert">
        <slot></slot>
      </div>
    `;
  }
}
