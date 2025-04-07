import { Outlet } from 'react-router-dom'
import logo from './assets/icon/gaminglounge-64x64.png'
import { CSSProperties, FunctionComponent } from 'react';
import ImgBgLight from './assets/images/hintergrund01.png?url';
import ImgBgDark from './assets/images/hintergrund02.png?url';
import ImgIconYT from './assets/icon/youtube.svg?react';
import ImgIconTT from './assets/icon/tiktok.svg?react'
import ImgIconDC from './assets/icon/discord.svg?react'
import ImgIconGH from './assets/icon/github.svg?react'
import Link from './components/link';

export type NavData = {
    mobile: {
        display: string,
        open_nav: boolean,
        link: string,
    },
    links: {
        display: string,
        link: string,
        highlight?: boolean,
    }[],
};

type NavProps = {
    data: NavData,
};

const Nav: FunctionComponent<NavProps> = ({data}) => {
    return (
        <div className="drawer">
            <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
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
                        <div className="md:hidden">
                            <label htmlFor="nav-drawer" className="btn btn-active btn-primary drawer-button text-lg normal-case">Navigation</label>
                        </div>
                        <ul className="hidden md:flex">
                            {
                                data.links.map(({display, link, highlight}, idx) => (
                                    <li key={idx}><Link to={link} className={(highlight ? "btn-primary " : "btn-ghost ") + "btn"}>{display}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                </header>
                <Outlet />
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
            <div className="drawer-side">
                <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content overflow-scroll flex-nowrap">
                    <li className="invisible"><header className="navbar"><div className="h-[64px]" /></header></li>
                    {
                        data.links.map(({display, link}, idx) => (
                            <li key={idx}><Link className="btn btn-ghost text-xl normal-case" to={link}>{display}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;

