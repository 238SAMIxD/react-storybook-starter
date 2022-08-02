import Stack from "../components/Stack";

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4 }
    }
};

const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <div style={{ width: "50px", aspectRatio: "1", backgroundColor: "red", display: "flex", alignItems: "center", justifyContent: "center"}}>{n}</div>   
        ))}
    </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
};

export const Vertical = Template.bind({});
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false
};