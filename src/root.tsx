import { FunctionComponent, PropsWithChildren } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router-dom";
import "./styles.css";
import Icon from './assets/icon/gaminglounge-64x64.png';


export const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (<html>
        <head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href={Icon} />
            <title>GamingLounge</title>
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

const Root: FunctionComponent = () => {
    return (<Outlet />);
};

export default Root;

