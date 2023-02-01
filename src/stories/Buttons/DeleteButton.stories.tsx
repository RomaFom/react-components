import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import DeleteButton from "../../components/Buttons/DeleteButton/DeleteButton";

export default {
  title: "Button/DeleteButton",
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>;

export const DeleteButtonWithAnimation: ComponentStory<typeof DeleteButton> = (
  args
) => <DeleteButton {...args}>Delete User</DeleteButton>;
