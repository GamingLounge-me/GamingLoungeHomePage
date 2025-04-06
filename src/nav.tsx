import { Link, Outlet } from 'react-router-dom'
import logo from './assets/icon/gaminglounge-64x64.png'

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

function open() {
  menuOpen?.addEventListener("click", () => {
    overlay?.classList.add("overlay--active");
  });
}

function close() {
  menuClose?.addEventListener("click", () => {
    overlay?.classList.remove("overlay--active");
  });
}

function Nav() {
  return (
    <>
      <header>
        <Link to={"/"} className="logo"><img src={logo} alt="logo" /></Link>
        <Link to={"/"} className="logo-name">
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

        <ul className="nav__links">
          <Link to="/">Home</Link>
        </ul>
        <Link to="/rules" className="cta">Rules</Link>
        <p className="menu cta" onClick={() => open()}>Navigation</p>
      </header>

      <div id="mobile__menu" className="overlay">
        <a className="close" onClick={() => close()}>&times;</a>
        <div className="overlay__content">
          <Link to="/">Home</Link>
          <Link to="/rules">Rules</Link>
        </div>
      </div>

      <Outlet />

      <footer>
        <h1><a className="contact" href="#contact">Contact</a></h1><br />
        <p>E-Mail: <a href="mailto:info@gaminglounge.me">info@gaminglounge.me</a></p><br />
        <div className="social-media">
          <a href="https://youtube.gaminglounge.me/" target="_blank"><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" style={{ fill: "red" }}>
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
          </svg></a>
          <a href="https://tiktok.gaminglounge.me/" target="_blank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: "black" }}>
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
          </svg></a>
          <a href="https://discord.gaminglounge.me/" target="_blank"><svg viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fillRule="nonzero"></path></g>
          </svg></a>
          <a href="https://github.gaminglounge.me/" target="_blank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#24292f" }}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg></a>
        </div>
      </footer>

      <script type="text/javascript" src="/src/mobile.js"></script>

    </>
  )
}
export default Nav
