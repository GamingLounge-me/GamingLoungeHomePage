import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import NoPage from './pages/NoPage.tsx'
import Nav from './nav.tsx'
import Home from './pages/home.tsx'
import Rules from './pages/Rules.tsx'
import Endless from './pages/minecraft/endless.tsx'
import Zombies from './pages/minecraft/hypixel/arcade/zombies.tsx'
import Alien_Arcadium from './pages/minecraft/hypixel/arcade/zombies/alien_arcadium.tsx'
import Linux_Commands from './pages/os/linux/Commands.tsx'
import ProxMox from './pages/hypervisor/proxmox.tsx'

const main = {
    mobile: {
        display: "Navigation",
        open_nav: true,
        link: ""
    },
    links: {
        "Home": "/",
        "Rules": "/rules/"
    }
}

const minecraft_hypixel_arcade_zombies = {
    mobile: {
        display: "Back",
        open_nav: false,
        link: "/minecraft/hypixel/arcade/zombies/"
    },
    links: {
        "Back": "/minecraft/hypixel/arcade/zombies/",
    }
}

const router = createBrowserRouter([
    {
        path: "/", element: <Nav data={main} />, children: [
            {
                path: "*", element: <NoPage />
            },
            {
                path: "/", element: <Home />
            },
            {
                path: "/rules/", element: <Rules />
            },
            {
                path: "/minecraft/endless/", element: <Endless />
            },
            {
                path: "/minecraft/hypixel/arcade/zombies/", element: <Zombies />
            },
            {
                path: "/os/linux/commands/", element: <Linux_Commands />
            }
            ,
            {
                path: "/hypervisor/proxmox/", element: <ProxMox />
            }
        ]
    },
    {
        path: "/minecraft/hypixel/arcade/zombies/", element: <Nav data={minecraft_hypixel_arcade_zombies} />, children: [
            {
                path: "/minecraft/hypixel/arcade/zombies/*", element: <NoPage />
            },
            {
                path: "/minecraft/hypixel/arcade/zombies/alien_arcadium/", element: <Alien_Arcadium />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)

