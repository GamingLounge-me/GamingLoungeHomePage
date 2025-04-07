import { FunctionComponent, PropsWithChildren, RefAttributes } from "react";
import { LinkProps, Path, Link as RRLink } from "react-router-dom";

/**
 * link to an element with `id`
 * same as `#${id}`
 */
type IDLinkDestination = {
    id: string,
};

/**
 * creates a mailto link from mail-address
 */
type MailToLinkDestination = {
    mail: string,
};

/**
 * creates map.gaminglounge.me link
 * dose currently only support map
 * TODO: allow map selection
 * TODO: position
 * TODO: scale
 */
type MapLinkDestination = {
    map: string,
};

/**
 * creates a link to the github repo `ghRepo`
 * dose currently only support repository
 * TODO: file/dir
 * TODO: version(tag,commit,branch)
 */
type GHLinkDestination = {
    ghRepo: string,
}

type LinkDestination =
    ( string
    | IDLinkDestination
    | MailToLinkDestination
    | MapLinkDestination
    | GHLinkDestination
);

const toPath: (dest: LinkDestination) => Partial<Path>|string = (dest) => {
    if(typeof dest === "string") return dest;
    if("id" in dest)
        return {
            hash: `#${dest.id}`,
        };
    if("mail" in dest)
        return `mailto:${dest.mail}`;
    if("map" in dest)
        return `https://map.gaminglounge.me/${dest.map}/`;
    if("ghRepo" in dest)
        return `https://github.com/${dest.ghRepo}`;

    const _exhaustiveCheck: never = dest;
    return _exhaustiveCheck;
};

const Link: FunctionComponent<PropsWithChildren<{
    to: LinkDestination,
    newTab?: boolean,
} & Omit<LinkProps, "to"> & RefAttributes<HTMLAnchorElement>>> = (props) => {
    const { newTab: _, ...cProps } = props;
    return (
        <RRLink {...cProps} to={toPath(props.to)} target={props.newTab ? "_blank" : ""} />
    );
};

export default Link;

