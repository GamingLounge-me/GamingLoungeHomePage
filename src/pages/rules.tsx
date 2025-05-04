import { FunctionComponent, useEffect, useState } from "react";
import { Block, BlockHolder } from "../components/block";
import Link from "../components/link";
import { Route } from "./+types/rules";

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
    GeneralBehavior: {
        text: "General Behavior",
        rules: [
            { id: "1", text: "Players are responsible for their own behavior. General behavioral guidelines apply, such as respectful behavior, no serious insults, no racism, no spam, adherence to channel topics, etc." },
            { id: "2", text: "It should be obvious, DDoS attacks or other attacks on the server are prohibited and will have consequences." },
            { id: "3", text: "NSFW content is only allowed in the designated channels." },
            { id: "4", text: "The use of voice changers or soundboards is not allowed (except Discord's own soundboard)." },
        ],
    },
    Advertisements: {
        text: "Advertisements",
        rules: [
            { id: "1", text: "Advertisements are not allowed (not even via DM). If someone intends to advertise, they can ask the team on Discord for permission." },
        ],
    },
    MinecraftServer: {
        text: "Minecraft Server",
        rules: [
            {
                id: "UnfairAdvantagesOverOthers",
                text: "Unfair Advantages Over Others",
                childs: [
                    { id: "1", text: "Client modifications that allow you to see through walls, such as X-ray or Freecam, are not allowed as they ruin the fun for others." },
                    { id: "2", text: "Hack clients are generally prohibited, including clients that affect movement, dupe clients, kill aura, and similar." },
                    { id: "3", text: "Auto-clickers are not prohibited, but the player will be automatically kicked after 16 minutes." },
                ],
            },
            {
                id: "FarmingAndAFKRules",
                text: "Farming and AFK Rules",
                childs: [
                    { id: "1", text: "All forms of dupers are no longer allowed, including TNT, carpet, string, and sand dupers. This protects resources like wood, cobblestone, and ores from inflation." },
                    { id: "2", text: "To allow but also limit AFK farming, there is an AFK kick after 16 minutes. It is prohibited to bypass this. Automatic farming while present is perfectly fine and even recommended." },
                    { id: "3", text: "Unnecessary hoppers and non-stoppable clocks should be avoided. If problems arise, a qualified team member will deactivate the most lagging farms. Placing composters over hoppers should make them more efficient." },
                ],
            },
            {
                id: "ShopsAndPublicTelepads",
                text: "Shops & Public Telepads",
                childs: [
                    { id: "1", text: "Shops can be built anywhere on claims, but their building or location must look reasonably good. Simply placing a wooden house with two chests in a corner is not desired." },
                    { id: "2", text: "Telepads may not be used as traps or player farms. With /spawn, every player can escape these traps." },
                    { id: "3", text: "It is also recommended not to undercut the market, as this only harms the economy. The team reserves the right to give price recommendations or temporarily deactivate outlier shops." },
                ],
            },
                    {
                id: "GriefingAndResourceFarming",
                text: "Griefing and Resource Farming",
                        childs: [
                    { id: "1", text: "Griefing players is prohibited. Unclaimed properties are excluded from this, and the team will not reimburse resources." },
                    { id: "2", text: "Resource farming is prohibited in FreeBuild. Mining ores is okay, but it is recommended to use the respective farming world to leave a clean FreeBuild." },
                        ],
                    },
            {
                id: "HandlingLagsAndBugs",
                text: "Handling Lags and Bugs",
                childs: [
                    { id: "1", text: "If problems arise due to lags, the team may reimburse lost resources under video evidence or, in rare cases, logs, provided the explanation is plausible." },
                    { id: "2", text: "Exploiting bugs is prohibited and will be punished. If bugs lead to item loss, the team may replace items with a plausible explanation." },
                ],
            },
        ],
    },
    HandlingRuleViolations: {
        text: "Handling Rule Violations",
        rules: [
            { id: "1", text: "An incident deemed a violation of the rules by the team may result in a penalty such as a mute or ban. The team reserves the right to decide this. More information is available on Discord." },
            { id: "2", text: "The team itself may ban a player if they act against the general peace of the server." },
            { id: "3", text: "The rules are interpreted by the team, not the player. The team's instructions must be followed." },
        ],
    },
};

export const meta: Route.MetaFunction = () => [
    { title: "Rules - GamingLounge" },
];

type HiddenLinkProps = {
    href: string,
    copy?: string,
};

function copyText(text?: string) {
    if (text === undefined) return;
    const encodedText = text.replace(/ /g, "%20");
    navigator.clipboard.writeText(encodedText);
}

const HiddenLink: FunctionComponent<HiddenLinkProps> = ({ href, copy }) => {
    return (
        <Link to={{ id: href }} className="text-transparent link link-hover link-primary" onClick={() => copyText(copy)}>#</Link>
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
    const [location, setLocation] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            setLocation(window.location.href);
        }
    }, []);
    return (
        <li id={data.path}>
            <p className="text-base">
            {rule.text}
            <HiddenLink href={data.path} copy={location + "#:~:text=" + rule.text} /> 
            {rule.childs && <RuleSetRenderer rules={rule.childs} data={data} />}
            </p>
        </li>
    );
};

const listStyle: (data: RuleRenderData) => string = (data) => {
    switch (data.level) {
        case 2: return "list-[lower-alpha] ";
        case 3: return "list-[lower-roman] ";
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
    const [location, setLocation] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            setLocation(window.location.href);
        }
    }, []);
    return (
        <BlockHolder>
            <Block title="Things to Keep in Mind" section="ThingsToKeepInMind">
                <p className="text-xl">
                    To learn from our mistakes and do things better this time, these rules exist.
                    They are not perfect yet and will be supplemented over time.
                    If there is a rule that is too vague or missing, it is recommended to open a ticket on Discord.
                </p>
            </Block>

            <Block title="Scope of Rules" section="ScopeOfRules">
                <p className="text-xl">
                    The following rules apply to the entire GamingLounge network.
                    This includes, among other things, the Discord and Minecraft server and all
                    other services associated with the GamingLounge.me network.
                </p>
            </Block>

            <Block title="Rules" section="Rules">
                {Object.entries(rules).map(([category, rules], idx) => (
                    <div id={category} key={idx}>
                        <div className="text-3xl">
                            {rules.text}
                            <HiddenLink href={category} copy={location + "#:~:text=" + rules.text}/>
                        </div>
                        <RuleSetRenderer rules={rules.rules} data={{
                            level: 0,
                            path: category,
                        }}
                        
                        />
                    </div>
                ))}
            </Block>
        </BlockHolder>
    );
};

export default RulesPage;

