import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FourComponent } from './four.component';

export default {
  title: 'FourComponent',
  component: FourComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FourComponent>;

const Template: Story<FourComponent> = (args: FourComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    name:  'katerina',
    age:  33,
    happy:  true,
}