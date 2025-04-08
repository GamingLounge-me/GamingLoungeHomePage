import { FunctionComponent } from "react";
import { NavElement, NavOverride } from "../../../../nav.tsx";
import { Outlet } from "react-router-dom";

const nav: NavElement[] = [
    {
        text: "Back",
        highlight: true,
        navVisability: { always: true },
        link: "/minecraft/hypixel/arcade/zombies/",
    },
];

const ZombiesNav: FunctionComponent = () => {
    return (
        <NavOverride nav={nav} replace>
            <Outlet />
        </NavOverride>
    );
};

export default ZombiesNav;

