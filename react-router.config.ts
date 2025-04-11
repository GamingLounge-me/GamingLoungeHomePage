
import type { Config } from "@react-router/dev/config";

export default {
    appDirectory: "src",
    ssr: false,
    prerender: [
        "/",
        "/rules",
        "/minecraft/endless",
        "/minecraft/hypixel/arcade/zombies",
        "/minecraft/hypixel/arcade/zombies/alien_arcadium",
        "/os/linux/commands",
        "/hypervisor/proxmox",
    ],
} as Config;

