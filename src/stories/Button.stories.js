import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "click" }
  }
};

const Template = args => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Red",
  size: "md"
};

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: "blue",
  label: "Blue",
  size: "lg"
};