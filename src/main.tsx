import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import NoPage from './pages/NoPage.tsx'
import Nav from './nav.tsx'
import Home from './pages/home.tsx'
import Rules from './pages/Rules.tsx'
import BackNav from './backnav.tsx'
import Endless from './pages/minecraft/endless.tsx'
import Zombies from './pages/minecraft/hypixel/arcade/zombies.tsx'
import Alien_Arcadium from './pages/minecraft/hypixel/arcade/zombies/alien_arcadium.tsx'

const router = createBrowserRouter([
  {
    path: "/", element: <Nav />, children: [
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
      }
    ]
  },
  {
    path: "/minecraft/hypixel/arcade/zombies/", element: <BackNav to={"/minecraft/hypixel/arcade/zombies"} />, children: [
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

