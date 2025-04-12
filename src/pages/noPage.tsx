import { FunctionComponent } from "react";
import { Block, BlockHolder } from "../components/block";
import { Route } from "./+types/noPage";

export const meta: Route.MetaFunction = () => [
    { title: "Page not found - GamingLounge" },
];

const NoPage: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block title="Page not found" >
                <p>The requested page could not be found</p>
            </Block>
        </BlockHolder>
    );
};

export default NoPage;

