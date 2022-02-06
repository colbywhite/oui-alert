import { html, nothing, TemplateResult } from 'lit';
import '../src/oui-alert.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'OuiAlert',
  component: 'oui-alert',
  argTypes: {
    dialog: { control: 'boolean' },
    dialogLabel: { control: 'text' },
    dialogLabelledBy: { control: 'text' },
  },
};

interface Story<T> {
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;

  (args: T): TemplateResult;
}

type ArgTypes = Partial<{
  dialog: boolean;
  dialogLabel: string;
  dialogLabelledBy: string;
}>;

const Template: Story<ArgTypes> = ({
  dialog = false,
  dialogLabel = undefined,
  dialogLabelledBy = undefined,
}: ArgTypes) =>
  html`
    <style>
      oui-alert::part(container) {
        color: black;
        background-color: #d3e8f8;
        border: 1px solid #3395e1;
      }
    </style>
    ${dialogLabelledBy
      ? html`<p id="${ifDefined(dialogLabelledBy)}">
          LabelledBy element goes here.
        </p>`
      : nothing}
    <oui-alert
      ?dialog="${dialog}"
      dialogLabel="${ifDefined(dialogLabel)}"
      dialogLabelledBy="${ifDefined(dialogLabelledBy)}"
    >
      <p>Slotted content goes here.</p>
    </oui-alert>
  `;

export const Default = Template.bind({});
export const DialogLabel = Template.bind({});
DialogLabel.args = { dialog: true, dialogLabel: 'Label' };
export const DialogLabelledBy = Template.bind({});
DialogLabelledBy.args = { dialog: true, dialogLabelledBy: 'LabelledBy' };
