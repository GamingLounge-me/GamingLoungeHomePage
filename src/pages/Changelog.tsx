import { FunctionComponent } from "react";
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
            { id: "1", type: "add", text: "1" },
            { id: "2", type: "remove", text: "2" },
            { id: "3", type: "add", text: "3" },
            { id: "4", type: "change", text: "4" },
        ],
    },
    "28.04.2025": {
        note: "Test",
        logs: [
            { id: "1", type: "add", text: "1" },
            { id: "2", text: "2" },
            { id: "3", type: "add", text: "3" },
            { id: "4", type: "change", text: "4" },
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

const RenderTypes: FunctionComponent<any> = ({ log }) => {
    switch (log.type) {
        case "add":
            return (
                <>
                    <span className="text-green-600">[+]</span>
                    &nbsp;
                    {log.text}
                </>
            );
        case "remove":
            return (
                <>
                    <span className="text-red-600">[<span className="pl-0.5 pr-0.5">-</span>]</span>
                    &nbsp;
                    {log.text}
                </>
            );
        case "change":
            return (
                <>
                    <span className="text-yellow-600">[~]</span>
                    &nbsp;
                    {log.text}
                </>
            );
        default:
            return (
                <>
                    <span>[<span className="pl-0.5 pr-0.5">?</span>]</span>
                    &nbsp;
                    {log.text}
                </>
            );
    }
}

const LogRenderer: FunctionComponent<LogRenderProps> = ({ log, data }) => {
    return (
        <li id={data.path}>
            <p className="text-base">
                <RenderTypes log={log} />
                <HiddenLink href={data.path} />
                {log.childs && <LogSetRenderer logs={log.childs} data={data} />}
            </p>
        </li>
    );
};

const nextLevel: (data: LogRenderData, childId: string) => LogRenderData = (data, childId) => {
    return {
        level: data.level + 1,
        path: data.path + "-" + childId,
    };
};

const LogSetRenderer: FunctionComponent<LogSetRenderProps> = ({ logs, data }) => {
    return (
        <ol className={"pl-4"}>
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

