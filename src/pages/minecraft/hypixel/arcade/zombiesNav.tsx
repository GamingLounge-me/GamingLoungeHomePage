import { FunctionComponent } from "react";
import { NavElement, NavOverrideHandle } from "../../../../nav.tsx";
import { Outlet } from "react-router-dom";

const nav: NavElement[] = [
    {
        text: "Back",
        highlight: true,
        navVisability: { always: true },
        link: "/minecraft/hypixel/arcade/zombies/",
    },
];

export const handle = {
    navOverride: { nav, replace: true } satisfies NavOverrideHandle,
};

const ZombiesNav: FunctionComponent = () => <Outlet />;

export default ZombiesNav;

