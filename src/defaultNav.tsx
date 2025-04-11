import { FunctionComponent } from 'react';
import Nav, { NavElement } from './nav.tsx'

const nav: NavElement[] = [
    {
        text: "Navigation",
        openDrawer: true,
        navVisability: { mobileNav: true },
        notInDrawer: true,
        highlight: true,
    },
    { text: "Home", link: "/" },
    { text: "Rules", link: "/rules", highlight: true },
];

const DefNav: FunctionComponent = () => <Nav nav={nav} />

export default DefNav;

