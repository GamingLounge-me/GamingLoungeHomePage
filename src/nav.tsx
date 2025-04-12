import { Outlet, useMatches } from 'react-router-dom'
import logo from './assets/icon/gaminglounge-64x64.png'
import { CSSProperties, FunctionComponent, ReactNode, useCallback, useRef } from 'react';
import ImgBgLight from './assets/images/hintergrund01.png?url';
import ImgBgDark from './assets/images/hintergrund02.png?url';
import ImgIconYT from './assets/icon/youtube.svg?react';
import ImgIconTT from './assets/icon/tiktok.svg?react'
import ImgIconDC from './assets/icon/discord.svg?react'
import ImgIconGH from './assets/icon/github.svg?react'
import Link, { LinkDestination } from './components/link';
import { DrawerCloseProvider } from './components/closeDrawer';

export type NavElement = {
    text: ReactNode,
    highlight?: boolean,
    navVisability?: NavVisability,
    notInDrawer?: boolean,
} & NavAction;

type NavVisability = NavVisabilityMobile | NavVisabilityAllways;

type NavVisabilityMobile = {
    mobileNav: boolean,
};
type NavVisabilityAllways = {
    always: true,
};

type NavAction = NavLink | NavOpenDrawer;

type NavOpenDrawer = {
    openDrawer: true,
};

type NavLink = {
    link: LinkDestination,
};


export type NavOverrideHandle = {
    nav: NavElement[],
    replace?: boolean,
};

const getNavOverride: (data: unknown) => (NavOverrideHandle | undefined) = (data) => {
    if(!data) return;
    if(typeof data !== "object") return;
    if(!("navOverride" in data)) return;
    // TODO: not totaly type safe
    return data.navOverride as NavOverrideHandle;
};


const navElemVis: (visability?: NavVisability) => string = (visability) => {
    const desktop = "hidden md:flex ";
    const mobile = "md:hidden ";
    if(visability === undefined) return desktop;
    if("mobileNav" in visability) {
        return visability.mobileNav ? mobile : desktop;
    } else if("always" in visability) {
        return "";
    }

    const _exhaustiveCheck: never = visability;
    return _exhaustiveCheck;
};

const NavElementR: FunctionComponent<{
    elem: NavElement,
    drawerID: string,
    inDrawer: boolean,
}> = ({elem, drawerID, inDrawer}) => {
    if(inDrawer && elem.notInDrawer) return (<></>);
    const highlight = elem.highlight && !inDrawer;
    const style = (inDrawer ? "text-xl " : navElemVis(elem.navVisability) + "text-lg ") + (highlight ? "btn-primary " : "btn-ghost ") + "btn normal-case";

    if("openDrawer" in elem) {
        return (<li><label htmlFor={drawerID} className={"drawer-button " + style}>{elem.text}</label></li>);
    } else if("link" in elem) {
        return (<li><Link to={elem.link} className={style}>{elem.text}</Link></li>);
    }

    const _exhaustiveCheck: never = elem;
    return _exhaustiveCheck;
};

const Nav: FunctionComponent = () => {
    const matches = useMatches();
    const nav = matches.map(v => v.handle).map(getNavOverride).filter(v => v !== undefined).reduce<NavElement[]>((prev, curr) => curr.replace ? curr.nav : [...prev, ...curr.nav], []);
    const drawerOpenRef = useRef<HTMLInputElement>(null);

    const closeDrawer = useCallback(() => {
        if(drawerOpenRef.current)
            drawerOpenRef.current.checked = false
    }, [ drawerOpenRef ]);

    return (
        <DrawerCloseProvider value={closeDrawer}>
            <div className="drawer">
                <input id="nav-drawer" type="checkbox" className="drawer-toggle" ref={drawerOpenRef} />
                <div
                    className="drawer-content bg-fixed bg-center bg-no-repeat bg-cover bg-(image:--img-bg-light) dark:bg-(image:--img-bg-dark) flex flex-col min-h-screen"
                    style={{
                        '--img-bg-light': `url("${ImgBgLight}")`,
                        '--img-bg-dark': `url("${ImgBgDark}")`,
                    } as CSSProperties}>
                    <header className="navbar bg-base-200 sticky top-0 z-40">
                        <div className="navbar-start text-xl normal-case">
                            <Link to="/"><img src={logo} alt="logo" className="w-full h-full" /></Link>
                            <Link to="/" className="bg-linear-to-r/srgb from-[#f00] to-[#fb0] text-transparent bg-clip-text">GamingLounge</Link>
                        </div>

                        <div className="navbar-end">
                            <ul className="flex">
                                {nav.map((elem, idx) => <NavElementR key={idx} inDrawer={false} elem={elem} drawerID={"nav-drawer"} />)}
                            </ul>
                        </div>
                    </header>
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                        <aside>
                            <h6 className="footer-title text-xl normal-case">Contact</h6>
                            <p>
                                <Link to={{mail: "info@gaminglounge.me"}}>E-Mail: <span className="link">info@gaminglounge.me</span></Link>
                            </p>
                        </aside>
                        <nav>
                            <h6 className="footer-title text-xl normal-case">Social</h6>
                            <div className="grid grid-flow-col gap-4">
                                <Link to="https://youtube.gaminglounge.me/" newTab><ImgIconYT className="w-8 h-8 fill-neutral-content" /></Link>
                                <Link to="https://tiktok.gaminglounge.me/" newTab><ImgIconTT className="w-8 h-8 fill-neutral-content" /></Link>
                                <Link to="https://discord.gaminglounge.me/" newTab><ImgIconDC className="w-8 h-8 fill-neutral-content" /></Link>
                                <Link to="https://github.gaminglounge.me/" newTab><ImgIconGH className="w-8 h-8 fill-neutral-content" /></Link>
                            </div>
                        </nav>
                    </footer>
                </div>
                <div className="drawer-side h-[calc(100vh-4rem)] top-16">
                    <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 pt-8 w-80 h-full bg-base-200 text-base-content overflow-scroll flex-nowrap">
                        {nav.map((elem, idx) => <NavElementR key={idx} inDrawer={true} elem={elem} drawerID={"nav-drawer"} />)}
                    </ul>
                </div>
            </div>
        </DrawerCloseProvider>
    );
};

export default Nav;

