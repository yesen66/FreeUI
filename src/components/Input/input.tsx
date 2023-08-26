import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames';
import Icon from '../Icon/icon';
import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> {
    /**是否禁用 Input */
    disabled?: boolean;
    /**设置 input 大小，支持 lg 或者是 sm */
    size?: 'lg' | 'sm';
    /**添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp;
    /**添加前缀 用于配置一些固定组合 */
    prepend?: string | React.ReactElement;
    /**添加后缀 用于配置一些固定组合 */
    append?: string | React.ReactElement;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * 
 * ~~~js
 * // 这样引用
 * import { Input } from 'freemyui'
 * ~~~
 * 
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: React.FC<InputProps> = (props) => {
    const {
        disabled,
        size,
        icon,
        prepend,
        append,
        className,
        style,
        ...restProps
    } = props;

    const classes = classNames('free-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
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

    return (
        <div className={classes} style={style}>
            {prepend && <div className="free-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
            <input
                className="free-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className="free-input-group-append">{append}</div>}
        </div>
    )
}

export default Input;
