import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { choose } from 'lit/directives/choose.js';

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

  /**
   * @private
   * @see choose
   */
  private readonly roleCases: Array<[boolean, () => string]> = [
    [false, () => 'alert'],
    [true, () => 'alertdialog'],
  ];

  render() {
    return html`
      <div
        role=${choose(this.dialog, this.roleCases)}
        aria-label=${ifDefined(this.dialogLabel)}
        aria-labelledBy=${ifDefined(this.dialogLabelledBy)}
      >
        <slot></slot>
      </div>
    `;
  }
}
