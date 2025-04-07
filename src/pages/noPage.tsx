import { FunctionComponent } from "react";
import { Block, BlockHolder } from "../components/block";

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

