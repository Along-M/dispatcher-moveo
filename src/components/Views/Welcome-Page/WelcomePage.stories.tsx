import React from "react";
import { Meta, Story } from "@storybook/react";
import WelcomePage, { WelcomePageProps } from "./WelcomePage";

export default {
  component: WelcomePage,
  title: "Components/WelcomePage",
} as Meta;

// args in TS way
const Template: Story<WelcomePageProps> = (args) => <WelcomePage {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
