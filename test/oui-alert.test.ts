import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { OuiAlert } from '../src/OuiAlert.js';
import '../src/oui-alert.js';

describe('OuiAlert', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<OuiAlert>(html` <oui-alert></oui-alert>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<OuiAlert>(html` <oui-alert></oui-alert>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<OuiAlert>(
      html` <oui-alert title="attribute title"></oui-alert>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<OuiAlert>(html` <oui-alert></oui-alert>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
