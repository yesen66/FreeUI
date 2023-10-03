import React from "react";
import Button from "./button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

const buttonMeta: ComponentMeta<typeof Button> = {
    title: 'Button',
    component: Button,
}

export default buttonMeta;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}></Button>
)
export const Default = Template.bind({})
Default.args = {
    children: 'Default Button'
}
// export const Default: ComponentStory<typeof Button> = (args) => (
//     <Button {...args}>Default Button</Button>
// )

Default.storyName = '默认按钮样式'
Default.decorators = [
    (Story) => (
        <div style={{ margin: '50px' }}><Story /></div>
    )
]

export const ButtonWithSize: ComponentStory<typeof Button> = (args) => (
    <>
        <Button {...args} size="lg">large button</Button>
        <Button {...args} size="sm">small button</Button>
    </>
)
ButtonWithSize.storyName = '不同尺寸的按钮'

export const ButtonWithType: ComponentStory<typeof Button> = () => (
    <>
        <Button btnType="primary">primary button</Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="link">link button</Button>

    </>
)
ButtonWithType.storyName = '不同类型的按钮'