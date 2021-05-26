import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    details: {
      title: "Button",
      description: "The base description that always shows up",
      allEnabledDescription: 'Description to show with all fields enabled',
      cssEnabledDescription: 'Description to show with CSS enabled',
      htmlOnlyDescription: 'Description to show with just html enabled',
      usageCode: `
        import component from @button-inc/component
        <Component x={true}/>
        `,
      props: [
        {
          name: 'size',
          type: 'string',
          description: 'size of the element'
        }
      ]
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",  
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
