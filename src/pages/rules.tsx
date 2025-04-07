import { FunctionComponent } from "react";
import { Block, BlockHolder } from "../components/block";
import Link from "../components/link";

type Rule = {
    id: string,
    text: string,
    childs?: RuleSet,
};

type RuleSet = Rule[];

type Rules = {
    [category: string]: {
        text: string,
        rules: RuleSet,
    },
};

const rules: Rules = {
    general: {
        text: "General",
        rules: [
            { id: "r1", text: "First Rule" },
            {
                id: "r2",
                text: "Second Rule",
                childs: [
                    {
                        id: "r1",
                        text: "exeption",
                        childs: [
                            { id: "r1", text: "with exeptions" },
                        ],
                    },
                ],
            },
        ],
    },
    discord: {
        text: "Discord",
        rules: [
            { id: "r1", text: "Lorem Ipsum" },
        ],
    },
};

type HiddenLinkProps = {
    href: string,
};

const HiddenLink: FunctionComponent<HiddenLinkProps> = ({href}) => {
    return (
        <Link to={{id: href}} className="text-[rgb(0,0,0,0)] link link-hover link-primary">#</Link>
    );
};

type RuleRenderData = {
    level: number,
    path: string,
};

type RuleRenderProps = {
    rule: Rule,
    data: RuleRenderData,
};

type RuleSetRenderProps = {
    rules: RuleSet,
    data: RuleRenderData,
};

const RuleRenderer: FunctionComponent<RuleRenderProps> = ({rule, data}) => {
    return (
        <li id={data.path}>
            {rule.text}
            <HiddenLink href={data.path} />
            {rule.childs && <RuleSetRenderer rules={rule.childs} data={data} />}
        </li>
    );
};

const listStyle: (data: RuleRenderData) => string = (data) => {
    switch(data.level) {
        case 0: return "list-decimal ";
        case 1: return "list-[lower-alpha] ";
        case 2: return "list-[lower-roman] ";
        default: return "list-decimal ";
    };
};

const nextLevel: (data: RuleRenderData, childId: string) => RuleRenderData = (data, childId) => {
    return {
        level: data.level + 1,
        path: data.path + "-" + childId,
    };
};

const RuleSetRenderer: FunctionComponent<RuleSetRenderProps> = ({rules, data}) => {
    return (
        <ol className={(listStyle(data)) + "pl-8"}>
            {rules.map((rule, idx) => (<RuleRenderer rule={rule} data={nextLevel(data, rule.id)} key={idx} />))}
        </ol>
    );
};


const RulesPage: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block title="Rules">
                {Object.entries(rules).map(([category, rules], idx) => (
                    <div id={category} key={idx}>
                        <div className="text-3xl">
                            {rules.text}
                            <HiddenLink href={category} />
                        </div>
                        <RuleSetRenderer rules={rules.rules} data={{
                            level: 0,
                            path: category,
                        }} />
                    </div>
                ))}
            </Block>
        </BlockHolder>
    );
};

export default RulesPage;

