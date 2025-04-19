import { FunctionComponent, ReactNode } from "react";
import { Block, BlockHolder } from "../components/block";
import Link from "../components/link";
import { Route } from "./+types/Changelog";

type change = "change" | "add" | "remove";

type Log = {
    type?: change,
    id: string,
    text: string,
    childs?: LogSet,
};

type LogSet = Log[];

type ChangeLog = {
    [date: string]: {
        note?: string,
        logs: LogSet,
    },
};

const changeLog: ChangeLog = {
    "16.03.2025": {
        note: "Test",
        logs: [
            {
                id: "1",
                type: "add",
                text: "New features in the lobby",
                childs: [
                    {
                        id: "1",
                        text: "Programming corner added",
                    }
                ]
            },
            {
                id: "2",
                type: "change",
                text: "Biomes in the lobby have been fixed"
            },
        ],
    },
};

export const meta: Route.MetaFunction = () => [
    { title: "ChangeLog - GamingLounge" },
];

type HiddenLinkProps = {
    href: string,
};

const HiddenLink: FunctionComponent<HiddenLinkProps> = ({ href }) => {
    return (
        <Link to={{ id: href }} className="text-transparent link link-hover link-primary">#</Link>
    );
};

type LogRenderData = {
    level: number,
    path: string,
};

type LogRenderProps = {
    log: Log,
    data: LogRenderData,
};

type LogSetRenderProps = {
    logs: LogSet,
    data: LogRenderData,
};

type logBase = {
    log: Log,
    data: LogRenderData,
    prefix: ReactNode,
}

const LogBase: FunctionComponent<logBase> = ({ log, data, prefix }) => {
    if (log.type == undefined) {
        return (
            <li id={data.path} className="list-disc ml-6">
                <p className="text-base">
                    <span className="flex">
                        &nbsp;
                        {log.text}
                        <HiddenLink href={data.path} />
                    </span>
                    {log.childs && <LogSetRenderer logs={log.childs} data={data} />}
                </p>
            </li>
        );
    } else {
        return (
            <li id={data.path} >
                <p className="text-base">
                    <span className="flex">
                        <>[<span className={"min-w-3 text-center "}>{prefix}</span>]</>
                        &nbsp;
                        {log.text}
                        <HiddenLink href={data.path} />
                    </span>
                    {log.childs && <LogSetRenderer logs={log.childs} data={data} />}
                </p>
            </li>
        )
    }
}


const LogRenderer: FunctionComponent<LogRenderProps> = ({ log, data }) => {
    switch (log.type) {
        case "add":
            return (
                <LogBase log={log} data={data} prefix={<span className={"text-success"}>+</span>} />
            );
        case "remove":
            return (
                <LogBase log={log} data={data} prefix={<span className={"text-error"}>-</span>} />
            );
        case "change":
            return (
                <LogBase log={log} data={data} prefix={<span className={"text-warning"}>~</span>} />
            );
        default:
            return (
                <LogBase log={log} data={data} prefix={<></>} />
            );
    }
};

const nextLevel: (data: LogRenderData, childId: string) => LogRenderData = (data, childId) => {
    return {
        level: data.level + 1,
        path: data.path + "-" + childId,
    };
};

const LogSetRenderer: FunctionComponent<LogSetRenderProps> = ({ logs, data }) => {
    return (
        <ol className={"pl-6"}>
            {logs.map((logs, idx) => (
                <LogRenderer log={logs} data={nextLevel(data, logs.id)} key={idx} />
            ))}
        </ol>
    );
};


const ChangeLogPage: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block title="Changelog" section="changelog">
                {Object.entries(changeLog).sort(([dateA], [dateB]) => {
                    const [dayA, monthA, yearA] = dateA.split('.').map(Number);
                    const [dayB, monthB, yearB] = dateB.split('.').map(Number);
                    return new Date(yearB, monthB - 1, dayB).getTime() - new Date(yearA, monthA - 1, dayA).getTime();
                }).map(([date, logs], idx) => (
                    <div id={date} key={idx}>
                        <div className="text-3xl">
                            {date}
                            {logs.note == undefined ? <></> : <>: {logs.note}</>}
                            <HiddenLink href={date} />
                        </div>
                        <LogSetRenderer logs={logs.logs} data={{
                            level: 0,
                            path: date,
                        }} />
                    </div>
                ))}
            </Block>
        </BlockHolder>
    );
};

export default ChangeLogPage;

