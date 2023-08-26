import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}

export const Icon: React.FC<IconProps> = (props) => {
    const { className, theme, ...restProps } = props;

    const classes = classNames('icon', className, {
        [`icon-${theme}`]: theme
    })

    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}

export default Icon;