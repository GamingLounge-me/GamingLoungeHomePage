import { FunctionComponent } from "react";

const NoPage: FunctionComponent = () => {
    return (
        <div className="py-20 w-full justify-center flex">
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Page not found</h2>
                    <p>The requested page could not be found</p>
                </div>
            </div>
        </div>
    );
};

export default NoPage;

