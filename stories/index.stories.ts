import { html, TemplateResult } from 'lit';
import '../src/oui-alert.js';

export default {
  title: 'OuiAlert',
  component: 'oui-alert',
  argTypes: {
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

interface ArgTypes {
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  slot = html`<p>Slotted content</p>`,
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
    <oui-alert style="${styles}">
      ${slot}
    </oui-alert>
  `;
};

export const Default = Template.bind({});
