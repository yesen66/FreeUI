import React, { FC } from "react";
import { ThemeProps } from "../Icon/icon";

export interface ProgressProps {
    percent: number,
    strokeHeight?: number,
    showText?: boolean,
    styles?: React.CSSProperties,
    theme?: ThemeProps,
}

const Progress: FC<ProgressProps> = (props) => {
    const {
        percent,
        strokeHeight,
        showText,
        styles,
        theme,
    } = props;
    return (
        <div className="freeui-progress-bar" style={styles}>
            <div className="freeui-progress-bar-outer" style={{ height: `${strokeHeight}px` }}>
                <div
                    className={`freeui-progress-bar-inner  color-${theme}`}
                    style={{ width: `${percent}%` }}
                >
                    {showText && <span className="inner-text">{`${percent}%`}</span>}
                </div>
            </div>
        </div>
    )
}

Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary",
}

export default Progress;