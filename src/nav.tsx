import { Outlet, ScrollRestoration } from 'react-router-dom'
import logo from './assets/icon/gaminglounge-64x64.png'
import { createContext, CSSProperties, FunctionComponent, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import ImgBgLight from './assets/images/hintergrund01.png?url';
import ImgBgDark from './assets/images/hintergrund02.png?url';
import ImgIconYT from './assets/icon/youtube.svg?react';
import ImgIconTT from './assets/icon/tiktok.svg?react'
import ImgIconDC from './assets/icon/discord.svg?react'
import ImgIconGH from './assets/icon/github.svg?react'
import Link, { LinkDestination } from './components/link';

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


type NavOverrideData = {
    freeOverride: () => void,
    override: (nav: NavElement[], replace: boolean) => void,
};

const NavOverideContext = createContext<NavOverrideData | undefined>(undefined);

const useNavOverride: (nav: NavElement[], replace: boolean) => [NavOverrideData, NavElement[]] = (nav, replace) => {
    const noc = useContext(NavOverideContext);
    const [ovNav, setOvNav] = useState<NavElement[] | undefined>(undefined);
    const [ovReplace, setOvReplace] = useState<boolean>(false);

    const freeOv = useCallback(() => {
        setOvNav(undefined);
        setOvReplace(false);
    }, [setOvNav, setOvReplace]);

    const ovOverride = useCallback((ovNav: NavElement[], replace: boolean) => {
        setOvNav(ovNav);
        setOvReplace(replace);
    }, [setOvNav, setOvReplace]);

    const navContext = useMemo(() => {
        return {
            freeOverride: freeOv,
            override: ovOverride,
        } as NavOverrideData;
    }, [freeOv, ovOverride]);

    const nnav = useMemo(() => {
        if(ovNav === undefined) {
            return nav;
        } else if(ovReplace) {
            return ovNav;
        } else {
            return [...nav, ...ovNav];
        }
    }, [nav, ovNav, ovReplace]);

    useEffect(() => {
        if(noc) {
            noc.override(nnav, replace);
            return () => {
                noc.freeOverride();
            };
        }
    }, [replace, noc, nnav]);

    return [navContext, nnav];
};

export const NavOverride: FunctionComponent<PropsWithChildren<{
    nav: NavElement[],
    replace?: boolean,
}>> = ({nav, replace, children}) => {
    const [ctxData, _] = useNavOverride(nav, !!replace);
    return (
        <NavOverideContext.Provider value={ctxData} children={children} />
    );
};

export const DrawerCloseContext = createContext<(() => void) | undefined>(undefined);


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
        return (<label htmlFor={drawerID} className={"drawer-button " + style}>{elem.text}</label>);
    } else if("link" in elem) {
        return (<Link to={elem.link} className={style}>{elem.text}</Link>);
    }

    const _exhaustiveCheck: never = elem;
    return _exhaustiveCheck;
};

const Nav: FunctionComponent<{
    nav: NavElement[],
}> = ({nav}) => {
    const [ctxData, nnav] = useNavOverride(nav, false);
    const drawerOpenRef = useRef<HTMLInputElement>(null);

    const closeDrawer = useCallback(() => {
        if(drawerOpenRef.current)
            drawerOpenRef.current.checked = false
    }, [ drawerOpenRef ]);

    return (
        <DrawerCloseContext.Provider value={closeDrawer}>
            <ScrollRestoration />
            <div className="drawer">
                <input id="nav-drawer" type="checkbox" className="drawer-toggle" ref={drawerOpenRef} />
                <div
                    className="drawer-content
                        bg-fixed
                        bg-center
                        bg-no-repeat
                        bg-cover
                        bg-(image:--img-bg-light)
                        dark:bg-(image:--img-bg-dark)"
                    style={{
                        '--img-bg-light': `url("${ImgBgLight}")`,
                        '--img-bg-dark': `url("${ImgBgDark}")`,
                    } as CSSProperties}>
                    <header className="navbar bg-base-200 sticky top-0 z-40">
                        <div className="navbar-start text-xl normal-case">
                            <Link to="/"><img src={logo} alt="logo" className="w-full h-full" /></Link>
                            <Link to="/">
                                <span style={{ color: "#ff0000" }}>G</span>
                                <span style={{ color: "#ff1100" }}>a</span>
                                <span style={{ color: "#ff2200" }}>m</span>
                                <span style={{ color: "#ff3300" }}>i</span>
                                <span style={{ color: "#ff4400" }}>n</span>
                                <span style={{ color: "#ff5500" }}>g</span>
                                <span style={{ color: "#ff6600" }}>L</span>
                                <span style={{ color: "#ff7700" }}>o</span>
                                <span style={{ color: "#ff8800" }}>u</span>
                                <span style={{ color: "#ff9900" }}>n</span>
                                <span style={{ color: "#ffaa00" }}>g</span>
                                <span style={{ color: "#ffbb00" }}>e</span>
                            </Link>
                        </div>

                        <div className="navbar-end">
                            <ul className="flex">
                                {nnav.map((elem, idx) => <NavElementR inDrawer={false} elem={elem} key={idx} drawerID={"nav-drawer"} />)}
                            </ul>
                        </div>
                    </header>
                    <NavOverideContext.Provider value={ctxData}>
                        <Outlet />
                    </NavOverideContext.Provider>
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
                        {nnav.map((elem, idx) => <NavElementR inDrawer={true} elem={elem} key={idx} drawerID={"nav-drawer"} />)}
                    </ul>
                </div>
            </div>
        </DrawerCloseContext.Provider>
    );
};

export default Nav;

