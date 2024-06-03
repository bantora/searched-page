import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta = {
    title: "Component/Accordion",
    component: Accordion,
    tags: ["autodocs"],
};

const buttonConfig = {
	// Colors 
	primary: 'border-2 p-2 border-blue-500 text-blue-500 rounded hover:bg-blue-100',
	secondary: 'p-2 bg-orange-500 rounded hover:bg-orange-700',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Accordion Title",
        children: "This is the content of the accordion.",
    },
};

export const WithLongContent: Story = {
    args: {
        title: "Accordion with Long Content",
        children: (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    mauris vel nunc tincidunt, at consectetur enim tristique. Nullam
                    lobortis semper justo, eget commodo enim venenatis non.
                </p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </>
        )
    }
}