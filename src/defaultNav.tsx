import { FunctionComponent } from 'react';
import Nav, { NavElement, NavOverrideHandle } from './nav.tsx'

const nav: NavElement[] = [
    {
        text: "Navigation",
        openDrawer: true,
        navVisability: { mobileNav: true },
        notInDrawer: true,
        highlight: true,
    },
    { text: "Home", link: "/" },
    { text: "Changelog", link: "/changelog" },
    { text: "Rules", link: "/rules", highlight: true },
];

export const handle = {
    navOverride: { nav } satisfies NavOverrideHandle,
};

const DefNav: FunctionComponent = () => <Nav />

export default DefNav;

