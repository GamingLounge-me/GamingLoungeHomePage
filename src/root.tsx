import { FunctionComponent, PropsWithChildren } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router-dom";
import "./styles.css";
import Icon from './assets/icon/gaminglounge-64x64.png';
import { Block, BlockHolder } from "./components/block";
import { Route } from "./+types/root";


export const meta: Route.MetaFunction = () => [
    { title: "GamingLounge" },
];

export const links: Route.LinksFunction = () => [
    {
        rel: 'icon',
        href: Icon,
        type: 'image/png',
    },
];

export const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (<html className="scroll-pt-20">
        <head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <Meta />
            <Links />
        </head>
        <body>
            {children}
            <ScrollRestoration />
            <Scripts />
        </body>
    </html>);
};

export const HydrateFallback: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block title="GamingLounge">
                <p>The website is currently loading. Please Wait.</p>
                <p className="text-error">This website requires JavaScript to be enabled to work properly.</p>
            </Block>
        </BlockHolder>
    );
};

const Root: FunctionComponent = () => {
    return (<Outlet />);
};

export default Root;

