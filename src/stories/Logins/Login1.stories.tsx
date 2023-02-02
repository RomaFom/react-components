import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login1 from "../../components/Logins/Login1/Login1";

export default {
  title: "Login/Login1",
  component: Login1,
} as ComponentMeta<typeof Login1>;

export const LoginExample1: ComponentStory<typeof Login1> = () => <Login1 />;
