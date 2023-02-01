import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SendButton from "../../components/Buttons/SendButton/SendButton";

export default {
  title: "Button/SendButton",
  component: SendButton,
} as ComponentMeta<typeof SendButton>;

export const SendButtonWithAnimation: ComponentStory<typeof SendButton> = (
  args
) => <SendButton {...args}>Send Me</SendButton>;
