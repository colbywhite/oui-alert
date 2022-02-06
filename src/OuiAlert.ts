import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { choose } from 'lit/directives/choose.js';

export class OuiAlert extends LitElement {
  static styles = css`
    :host {
      display: block;
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
        part='container'
        role=${choose(this.dialog, this.roleCases)}
        aria-label=${ifDefined(this.dialogLabel)}
        aria-labelledBy=${ifDefined(this.dialogLabelledBy)}
      >
        <slot></slot>
      </div>
    `;
  }
}
