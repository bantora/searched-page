import { Meta, StoryObj } from "@storybook/react";
import Card from ".";

const meta: Meta = {
  title: "Component/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Card_Sample: Story = {
  args: {
    title: "Title",
    children: "Content",
  },
};

export const Card_NoTitle: Story = {
  args: {
    children: "Content",
  },
};
