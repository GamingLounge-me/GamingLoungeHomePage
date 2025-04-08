import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import NoPage from './pages/noPage.tsx'
import Nav, { NavElement } from './nav.tsx'
import Home from './pages/home.tsx'
import RulesPage from './pages/rules.tsx'
import Endless from './pages/minecraft/endless.tsx'
import Zombies from './pages/minecraft/hypixel/arcade/zombies.tsx'
import Alien_Arcadium from './pages/minecraft/hypixel/arcade/zombies/alien_arcadium.tsx'
import Linux_Commands from './pages/os/linux/commands.tsx'
import ProxMox from './pages/hypervisor/proxmox.tsx'
import ZombiesNav from "./pages/minecraft/hypixel/arcade/zombiesNav.tsx"

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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav nav={nav} />,
        children: [
            { path: "*", element: <NoPage /> },
            { index: true, element: <Home /> },
            { path: "rules", element: <RulesPage /> },
            { path: "minecraft/endless", element: <Endless /> },
            {
                path: "minecraft/hypixel/arcade/zombies",
                children: [
                    { index: true, element: <Zombies /> },
                    {
                        element: <ZombiesNav />,
                        children: [
                            { path: "*", element: <NoPage /> },
                            { path: "alien_arcadium", element: <Alien_Arcadium /> },
                        ],
                    },
                ],
            },
            { path: "os/linux/commands", element: <Linux_Commands /> },
            { path: "hypervisor/proxmox", element: <ProxMox /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);

