import { Meta, StoryObj } from "@storybook/react";
import Alert from ".";
import { title } from "process";
import { Children } from "react";

const meta: Meta = {
  title: "Component/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Info alert! Change a few things up and try submitting again. ",
		variant: 'info'
  },
};

export const List: Story = {
  args: {
    title: "Info alert!",
    variant: 'info',
    children: 'Content here!',
  },
};
