import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { OuiAlert } from '../src/OuiAlert.js';
import '../src/oui-alert.js';

describe('OuiAlert', () => {
  it('injects alert text', async () => {
    const text = 'Text';
    const el = await fixture<OuiAlert>(html`<oui-alert>${text}</oui-alert>`);
    expect(el).to.have.text(text);
    await expect(el).shadowDom.to.be.accessible();
  });

  it('uses alert role as default', async () => {
    const el = await fixture<OuiAlert>(html`<oui-alert></oui-alert>`);
    expect(el.shadowRoot!).to.have.descendant('div[role=alert]');
    await expect(el).shadowDom.to.be.accessible();
  });

  it('uses alert role when dialog=false', async () => {
    const el = await fixture<OuiAlert>(html`<oui-alert ?dialog=${false}></oui-alert>`);
    expect(el.shadowRoot!).to.have.descendant('div[role=alert]');
    await expect(el).shadowDom.to.be.accessible();
  });

  it('uses alert role when dialog=true', async () => {
    const el = await fixture<OuiAlert>(html`<oui-alert ?dialog=${true} dialogLabel="Label"></oui-alert>`);
    expect(el.shadowRoot!).to.have.descendant('div[role=alertdialog]');
    await expect(el).shadowDom.to.be.accessible();
  });
});
