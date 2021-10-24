import { Meta, Story } from "@storybook/react";
import Filter, { FilterProps } from "./Filter";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";

export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

// args in TS way
const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const V1 = Template.bind({});
V1.args = {
  children: "sfd",
};

export const V2 = Template.bind({});
V2.args = {
  children: "sadfvsdfsdfsdfefdsafsdfsd",
};
