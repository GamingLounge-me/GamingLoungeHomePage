import { FunctionComponent } from "react";
import CommandListRenderer, { CommandList } from "../../../components/commandList";
import { Block, BlockHolder } from "../../../components/block";

const commands: CommandList = [
    {
        cmd: ["ls"],
        desc: "List directory contents",
        childs: [
            {
                cmd: ["ls", {text:"-l",type:"flag"}],
                desc: "List directory contents in long format",
            },
            {
                cmd: ["ls", {text:"-a",type:"flag"}],
                desc: "List all files including hidden files",
            },
            {
                cmd: ["ls", {text:"-lsah",type:"flag"}],
                desc: "List directory contents with detailed information, including hidden files, in human-readable format",
            },
        ],
    },
    {
        cmd: ["cd", {optChilds:[{text:"target",type:"argument"}]}],
        desc: "Change directory",
    },
    {
        cmd: ["cp", {text:"src",type:"argument"}, {text:"dst",type:"argument"}],
        desc: "Copy files and directories",
    },
    {
        cmd: ["mv", {text:"src",type:"argument"}, {text:"dst",type:"argument"}],
        desc: "Move or rename files and directories",
    },
    {
        cmd: ["rm"],
        desc: "Remove files or directories",
        childs: [
            {
                cmd: ["rm", {text:"-r",type:"flag"}],
                desc: "Remove directories and their contents recursively",
            },
            {
                cmd: ["rm", {text:"-f",type:"flag"}],
                desc: "Force remove files or directories",
            },
        ],
    },
    {
        cmd: ["lsblk"],
        desc: "List information about block devices",
    },
    {
        cmd: ["zpool"],
        desc: "Manage ZFS storage pools, use information from 'ls -l /dev/disk/by-id/' for disk identification",
        childs: [
            {
                cmd: ["zpool", "attach", {text:"pool",type:"argument"}, {text:"device",type:"argument"}, {text:"new-device",type:"argument"}],
                desc: "Attach a device to a ZFS storage pool, can be used to create a mirror",
            },
            {
                cmd: ["zpool", "detach", {text:"pool",type:"argument"}, {text:"device",type:"argument"}],
                desc: "Detach a device from a ZFS storage pool",
            },
            {
                cmd: ["zpool", "replace", {text:"pool",type:"argument"}, {text:"device",type:"argument"}, {optChilds:[{text:"new-device",type:"argument"}]}],
                desc: "Replace a device in a ZFS storage pool",
            },
            {
                cmd: ["zpool", "online", {text:"-e",type:"flag"}, {text:"pool",type:"argument"}, {text:"device",type:"argument"}],
                desc: "Expand a ZFS storage pool",
            },
        ],
    },
    {
        cmd: ["df", {text:"-h",type:"flag"}],
        desc: "Display disk space usage in human-readable format",
    },
    {
        cmd: ["cfdisk", {text:"device",type:"argument"}],
        desc: "Curses-based partition table manipulator for Linux",
    },
    {
        cmd: ["ip"],
        desc: "Show/manipulate network interfaces",
        childs: [
            {
                cmd: ["ip", "a"],
                desc: "Display all IP addresses assigned to network interfaces",
            },
        ],
    },
    {
        cmd: ["ping"],
        desc: "Send ICMP echo requests to test network connectivity",
    },
    {
        cmd: ["arping"],
        desc: "Send ARP requests to test connectivity to a specific host on the same network",
    },
];

const Commands: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block title="Commands">
                <CommandListRenderer list={commands} />
            </Block>
        </BlockHolder>
    );
};

export default Commands;

