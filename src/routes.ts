import { index, layout, prefix, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    layout("./defaultNav.tsx", [
        route("*", "./pages/noPage.tsx"),
        index("./pages/home.tsx"),
        route("rules", "./pages/rules.tsx"),
        route("minecraft/endless", "./pages/minecraft/endless.tsx"),
        route("os/linux/commands", "./pages/os/linux/commands.tsx"),
        route("hypervisor/proxmox", "./pages/hypervisor/proxmox.tsx"),
        ...prefix("minecraft/hypixel/arcade/zombies", [
            index("./pages/minecraft/hypixel/arcade/zombies.tsx"),
            layout("./pages/minecraft/hypixel/arcade/zombiesNav.tsx", [
                //route("*", "./pages/noPage.tsx", { id: "minecraft/hypixel/arcade/zombies/404" }),
                route("alien_arcadium", "./pages/minecraft/hypixel/arcade/zombies/alien_arcadium.tsx"),
            ]),
        ]),
    ]),
] satisfies RouteConfig;

