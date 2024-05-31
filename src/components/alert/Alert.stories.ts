import { Meta, StoryObj } from "@storybook/react";
import Alert from ".";
import { title } from "process";

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
