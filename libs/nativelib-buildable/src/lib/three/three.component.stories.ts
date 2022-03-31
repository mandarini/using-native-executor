import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ThreeComponent } from './three.component';

export default {
  title: 'ThreeComponent',
  component: ThreeComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ThreeComponent>;

const Template: Story<ThreeComponent> = (args: ThreeComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    name:  'katerina',
    age:  33,
    happy:  true,
}