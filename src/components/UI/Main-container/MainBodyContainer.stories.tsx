import React from "react";
import { Meta, Story } from "@storybook/react";
import MainBodyCointainer, {
  MainBodyContainerProps,
} from "./MainBodyContainer";

export default {
  component: MainBodyCointainer,
  title: "Components/CardContainer",
} as Meta;

// args in TS way
const Template: Story<MainBodyContainerProps> = (args) => (
  <MainBodyCointainer {...args} />
);

export const V1 = Template.bind({});
V1.args = {
  children: "Card Title 1",
};

export const V2 = Template.bind({});
V2.args = {
  children: "Card Title 2",
};
