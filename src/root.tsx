import { FunctionComponent, PropsWithChildren } from "react";
import { Links, Meta, Outlet, Scripts } from "react-router-dom";
import "./styles.css";


export const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (<html>
        <head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>GamingLounge</title>
            <Meta />
            <Links />
        </head>
        <body>
            {children}
            <Scripts />
        </body>
    </html>);
};

const Root: FunctionComponent = () => {
    return (<Outlet />);
};

export default Root;

