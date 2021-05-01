import React from "react";

import Login from "./Login";

export default {
  title: "Example/Login",
  component: Login,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});

Default.args = {
  props: "Small",
  email: "email",
  password: "password",
};
