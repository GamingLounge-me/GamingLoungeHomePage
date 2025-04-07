import { CSSProperties, FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import Link from './link';

type TextColor = "light" | "dark" | "theme";
type Position = "right" | "left" | "center";

type BlockProps = {
    section?: string,
    title: ReactNode,
    position?: Position,
    image?: string,
    textColor?: TextColor,
};

const getTextColorStyle: (color?: TextColor) => string = (color) => {
    switch(color) {
        case 'dark': return "text-neutral ";
        case 'light': return "text-neutral-content ";
        case 'theme':
        default:
            return "";
    }
};

const getPositionStyle: (position?: Position) => string = (position) => {
    switch(position) {
        case 'right': return "justify-self-end ";
        case 'left': return "justify-self-start ";
        case 'center':
        default:
            return "justify-self-center ";
    }
};

export const BlockHolder: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <div className="py-20 grid grid-cols-1 gap-y-10 md:px-10">
            {children}
        </div>
    );
};

export const Block: FunctionComponent<PropsWithChildren<BlockProps>> = ({section, title, position, image, textColor, children}) => {
    return (
        <div
                id={section}
                className={
                    (image ? "bg-(image:--img-bg-card) bg-local bg-center bg-no-repeat bg-cover " : "bg-base-100 ") +
                    getPositionStyle(position) +
                    "card shadow-sm w-full md:w-172 xl:w-250"}
                style={image ? {
                    '--img-bg-card': `url("${image}")`,
                } as CSSProperties : {}} >
            <div className={(image ? "backdrop-brightness-70 dark:backdrop-brightness-30 " : "") +
                    getTextColorStyle(textColor) +
                    "card-body rounded-[inherit]"}>
                <h2 className={(section ? "link link-hover " : "") + "text-3xl"}>
                    {section ? <Link to={{id: section}}>{title}</Link> : title}
                </h2>
                {children}
            </div>
        </div>
    );
};
