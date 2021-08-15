import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { IProps } from "./Button";

export default {
  title: "AntD/Button",
  component: Button,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "text", "link", "default"],
      },
    },
    size: {
      control: { type: "select", options: ["small", "middle", "large"] },
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    shape: { control: { type: "select", options: ["circle", "round"] } },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    label: "Button",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = (args: IProps) => <Button {...args} />;
Default.parameters = {
  jest: ["Button.test.tsx"],
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: "default",
};
