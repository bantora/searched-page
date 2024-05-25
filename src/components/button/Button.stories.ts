import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Secondary Button",
  },
};
