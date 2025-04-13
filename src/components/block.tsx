import { CSSProperties, FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import Link from './link';
import { Table, TableProps } from './table';

type TextColor = "light" | "dark" | "theme";
type Position = "right" | "left" | "center";

type BlockProps = {
    section?: string,
    title?: ReactNode,
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

const baseCardStyle: (image?: string, position?: Position) => string = (image, position) => {
    return (image ? "bg-(image:--img-bg-card) bg-local bg-center bg-no-repeat bg-cover " : "bg-base-100 ") +
        getPositionStyle(position) +
        "card shadow-sm w-full md:w-172 xl:w-250";
}

const baseCardBodyStyle: (image?: string, textColor?: TextColor) => string = (image, textColor) => {
    return (image ? "backdrop-brightness-70 dark:backdrop-brightness-30 " : "") +
        getTextColorStyle(textColor) +
        "card-body rounded-[inherit]";
}

const BaseBlock: FunctionComponent<PropsWithChildren<BlockProps>> = ({ section, position, image, children }) => {
    return (
        <div
            id={section}
            className={baseCardStyle(image, position)}
                style={image ? {
                    '--img-bg-card': `url("${image}")`,
                } as CSSProperties : {}} >
            {children}
        </div>
    );
};

export const Block: FunctionComponent<PropsWithChildren<BlockProps>> = ({ section, title, image, textColor, position, children }) => {
    return (
        <BaseBlock
            position={position}
            section={section}
            image={image}
        >
            <div className={baseCardBodyStyle(image, textColor)}>
                {title && <h2 className={(section ? "link link-hover " : "") + "text-3xl"}>
                    {section ? <Link to={{ id: section }}>{title}</Link> : title}
                </h2>}
                {children}
            </div>
        </BaseBlock>
    );
};

export const TableBlock = <T extends object>(props: BlockProps & TableProps<T>) => {
    return (
        <BaseBlock {...props}>
            <div className={baseCardBodyStyle(props.image, props.textColor) + " pb-2"}>
                {props.title && <h2 className={(props.section ? "link link-hover " : "") + "text-3xl"}>
                    {props.section ? <Link to={{ id: props.section }}>{props.title}</Link> : props.title}
                </h2>}
            </div>
            <Table
                {...props}
                className={baseCardBodyStyle(props.image, props.textColor)}
                view={props.view.map((v) => ({
                    ...v,
                    title: props.section ? <Link to={{ id: props.section }}>{v.title}</Link> : v.title,
                }))}
            />
        </BaseBlock>
    );
};
