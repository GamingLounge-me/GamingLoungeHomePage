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
    "18.04.2025": {
        note: "Test",
        logs: [
            { id: "1", type: "add", text: "1" },
            { id: "2", type: "remove", text: "2" },
            { id: "3", type: "add", text: "3" },
            { id: "4", type: "change", text: "4" },
        ],
    },
    "16.04.2025": {
        note: "Test",
        logs: [
            {
                id: "1", type: "add", text: "bla",
                childs: [
                    { id: "1", text: "bli" },
                ]
            },
            { id: "2", type: "remove", text: "2" },
            { id: "3", type: "add", text: "3" },
            { id: "4", type: "change", text: "4" },
        ],
    },
    "28.04.2025": {
        note: "Test",
        logs: [
            { id: "1", type: "add", text: "1" },
            { id: "2", type: "change", text: "2" },
            { id: "3", type: "add", text: "3" },
            { id: "4", type: "change", text: "4" },
            { id: "5", text: "5" },
            { id: "6", type: "change", text: "6" },
            { id: "7", type: "add", text: "7" },
            { id: "8", type: "change", text: "8" },
            { id: "9", type: "remove", text: "9" },
            { id: "10", type: "change", text: "10" },
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
    return (
        <li id={data.path}>
            <p className="text-base">
                <span className="flex">
                    {log.type == undefined ? <></> : <>[<span className={"min-w-3 text-center "}>{prefix}</span>]</>}
                    &nbsp;
                    {log.text}
                    <HiddenLink href={data.path} />
                </span>
                {log.childs && <LogSetRenderer logs={log.childs} data={data} />}
            </p>
        </li>
    )
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
                <p className={"italic text-accent text-lg"}>DD.MM.YYYY</p>
                <ul className="mb-4">
                    <li><span className="text-green-600">[+]</span> -&gt; Add</li>
                    <li><span className="text-red-600">[<span className="pl-0.5 pr-0.5">-</span>]</span> -&gt; Remove</li>
                    <li><span className="text-yellow-600">[~]</span> -&gt; Change</li>
                    <li><span>[<span className="pl-0.5 pr-0.5">?</span>]</span> -&gt; Other</li>
                </ul>

                {Object.entries(changeLog).sort(([dateA], [dateB]) => {
                    const [dayA, monthA, yearA] = dateA.split('.').map(Number);
                    const [dayB, monthB, yearB] = dateB.split('.').map(Number);
                    return new Date(yearB, monthB - 1, dayB).getTime() - new Date(yearA, monthA - 1, dayA).getTime();
                }).map(([date, logs], idx) => (
                    <div id={date} key={idx}>
                        <div className="text-3xl">
                            {date}
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

