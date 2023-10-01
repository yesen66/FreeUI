import classNames from "classnames";
import React, { useContext, useState } from "react";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
    title: string;
    index?: string;
    className?: string;
    children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ title, index, className, children }) => {
    const context = useContext(MenuContext);
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;

    const [menuOpen, setOpen] = useState(isOpened);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen);
    }

    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }

    const clickEvent = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};

    const mouseEvent = context.mode === 'horizontal' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) },
    } : {};

    const classes = classNames('menu-item submenu-item', className, {
        'is-active': index === context.index
    });

    const renderChildren = () => {
        const subMenuClasses = classNames('submenu', {
            'menu-opened': menuOpen
        });

        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: `${index}-${i}` });
            } else {
                console.error("Warning: subMenu has a child which is not a MenuItem component")
            }
        });

        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }

    return (
        <li className={classes} key={index} {...mouseEvent}>
            <div className="submenu-title" {...clickEvent}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu';

export default SubMenu;