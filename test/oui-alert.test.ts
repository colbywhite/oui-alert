import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { OuiAlert } from '../src/OuiAlert.js';
import '../src/oui-alert.js';

describe('OuiAlert', () => {
  it('injects alert text', async () => {
    const text = 'Text';
    const el = await fixture<OuiAlert>(html`<oui-alert>${text}</oui-alert>`);
    expect(el).to.have.text(text);
  });

  it('uses alert role', async () => {
    const el = await fixture<OuiAlert>(html`<oui-alert></oui-alert>`);
    expect(el.shadowRoot!).to.have.descendant('div[role=alert]');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<OuiAlert>(html`<oui-alert></oui-alert>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
