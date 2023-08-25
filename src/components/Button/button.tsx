import classNames from "classnames";

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

export enum ButtonSize {
    Small = 'sm',
    Large = 'lg'
}

interface BaseButtonProps {
    className?: string;
    btnType?: string;
    size?: string;
    disabled?: boolean;
    href?: string;
    children: React.ReactNode
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        btnType,
        size,
        disabled,
        href,
        children,
        ...restProps
    } = props;

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': btnType === ButtonType.Link && disabled
    });

    if (btnType === ButtonType.Link && href) {
        return (
            <a
                href={href}
                className={classes}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button;