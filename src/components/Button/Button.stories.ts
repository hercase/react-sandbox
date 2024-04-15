import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Button", onClick: () => console.log("Button clicked") },
};
