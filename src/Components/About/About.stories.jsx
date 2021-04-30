import React from "react";

import About from "./About";

export default {
  title: "Example/About",
  component: About,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Fisayo",
  content: "New Woman",
  image: "https://cdn.nohat.cc/thumb/f/720/5637714231689216.jpg",
};
