import { html, TemplateResult } from 'lit';
import '../src/oui-alert.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'OuiAlert',
  component: 'oui-alert',
  argTypes: {
    dialog: { control: 'boolean' },
    dialogLabel: { control: 'text' },
    dialogLabelledBy: { control: 'text' },
    textColor: { control: 'color' },
    bgColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
};

interface Story<T> {
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;

  (args: T): TemplateResult;
}

type ArgTypes = Partial<{
  textColor: string;
  bgColor: string;
  borderColor: string;
  dialog: boolean;
  dialogLabel: string;
  dialogLabelledBy: string;
  slot: TemplateResult;
}>;

const Template: Story<ArgTypes> = ({
  slot = html`<p>Slotted content</p>`,
  dialog = false,
  dialogLabel = undefined,
  dialogLabelledBy = undefined,
  textColor = 'black',
  bgColor = '#d3e8f8',
  borderColor = '#3395e1',
}: ArgTypes) => {
  const styles = `
  --oui-alert-text-color: ${textColor};
  --oui-alert-bg-color: ${bgColor};
  --oui-alert-border-color: ${borderColor};
`;
  return html`
    <oui-alert
      style=${styles}
      ?dialog=${dialog}
      dialogLabel=${ifDefined(dialogLabel)}
      dialogLabelledBy=${ifDefined(dialogLabelledBy)}
    >
      ${slot}
    </oui-alert>
  `;
};

export const Default = Template.bind({});
export const Dialog = Template.bind({});
Dialog.args = { dialog: true, dialogLabel: 'Label' };
