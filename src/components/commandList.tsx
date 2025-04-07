import { FunctionComponent } from "react";

type SimpleCommandPart = string;
type ComplexCommandPart = {
    text: string,
    type?: "literal" | "flag" | "argument" | "appliedArgument",
};
type OptionalCommandPart = {
    optChilds: CommandPart[],
};

type CommandPart = SimpleCommandPart | ComplexCommandPart | OptionalCommandPart;

export type Command = {
    cmd: CommandPart[],
    desc?: string,
    childs?: CommandList,
};

export type CommandList = Command[];

const CommandPartRenderer: FunctionComponent<{
    part: CommandPart,
}> = ({part}) => {
    if(typeof part === "string") return (<CommandPartRenderer part={{ text: part }} />);
    if("optChilds" in part) {
        return (
           <span className="text-error">
                {"["}
                <CommandPartListRenderer list={part.optChilds} />
                {"]"}
           </span>
        );
    } else {
        switch(part.type) {
            case 'flag': return (<span className="text-warning">{part.text}</span>);
            case 'argument': return (<span className="text-success">{"<" + part.text + ">"}</span>);
            case 'appliedArgument': return (<span className="text-success">{part.text}</span>);
            case 'literal':
            default:
                return (<span className="text-info">{part.text}</span>);
        }
    }
};

const CommandPartListRenderer: FunctionComponent<{
    list: CommandPart[],
}> = ({list}) => {
    return list.map((part, idx) => (
        <>
            {idx > 0 && <> </>}
            <CommandPartRenderer part={part} key={idx} />
        </>
    ));
};

const CommandRenderer: FunctionComponent<{
    command: Command,
}> = ({command}) => {
    return (
        <li>
            <code>
                <CommandPartListRenderer list={command.cmd} />
            </code>
            {command.desc && <div>{command.desc}</div>}
            {command.childs && <CommandListRenderer list={command.childs} />}
        </li>
    );
};

const CommandListRenderer: FunctionComponent<{
    list: CommandList,
}> = ({list}) => {
    return (
        <ul className="list-disc pl-4">
            {list.map((command, idx) => (
                <CommandRenderer command={command} key={idx} />
            ))}
        </ul>
    );
};

export default CommandListRenderer;

