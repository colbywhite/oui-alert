import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

export class OuiAlert extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--oui-alert-bg-color, #fff);
      color: var(--oui-alert-text-color, #000);
      border: 1px solid var(--oui-alert-border-color, #444);
    }
  `;

  @property({ type: Boolean }) dialog = false;

  @property({ type: String }) dialogLabel?: string = undefined;

  @property({ type: String }) dialogLabelledBy?: string = undefined;

  render() {
    if (!this.dialog) {
      return html`
        <div role='alert'>
          <slot></slot>
        </div>
      `;
    }
    if (this.dialogLabel !== undefined) {
      return html`
        <div role="alertdialog" aria-label="${this.dialogLabel}">
          <slot></slot>
        </div>
      `;
    }
    if (this.dialogLabelledBy !== undefined) {
      return html`
        <div role="alertdialog" aria-labelledBy="${this.dialogLabelledBy}">
          <slot></slot>
        </div>
      `;
    }
    console.warn('oui-alert is missing a dialog label');
    return nothing;
  }
}
