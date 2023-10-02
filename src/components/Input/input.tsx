import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames';
import Icon from '../Icon/icon';
import React, { FC, ReactElement, InputHTMLAttributes } from 'react';

export type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    //添加前缀 用于配置一些固定组合
    prepend?: string | ReactElement;
    //添加后缀 用于配置一些固定组合
    append?: string | ReactElement;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * 
 * ~~~js
 * // 这样引用
 * import { Input } from 'freeui'
 * ~~~
 * 
 * 支持 HTMLInput 的所有基本属性
 */

export const Input: FC<InputProps> = (props) => {
    //取出 各种属性
    const { disabled, size, icon, prepend, append, style, ...restProps } = props;

    //计算不同的className
    const classes = classNames('input', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend,
    })

    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value;
    }

    if ('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value);
    }
    //判断是否添加特定节点
    return (
        <div className={classes} style={style}>
            {prepend && <div className="free-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
            <input
                className="free-input-inner"
                disabled={disabled}
                value={props.value}
                {...restProps}
            />
            {append && <div className="free-input-group-append">{append}</div>}
        </div>
    )
}

export default Input;