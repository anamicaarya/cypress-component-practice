// src/components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    args: { children: "Save", variant: "primary", size: "md" },
    argTypes: {
        variant: { control: "radio", options: ["primary", "secondary"] },
        size: { control: "radio", options: ["sm", "md", "lg"] },
        onClick: { action: "clicked" }
    },
    parameters: { layout: "centered" }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Small: Story = { args: { size: "sm" } };
