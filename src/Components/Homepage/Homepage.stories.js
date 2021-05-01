import React from "react";

import Home from "./Homepage";

export default {
  title: "Example/Home",
  component: Home,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Triumph",
  content: "New Woman",
  image: "https://cdn.nohat.cc/thumb/f/720/5637714231689216.jpg",
};
