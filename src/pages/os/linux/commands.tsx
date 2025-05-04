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
    {
        cmd: ["chmod", {text:"permissions",type:"argument"}, {text:"file",type:"argument"}],
        desc: "Change file permissions",
        childs: [
            {
                cmd: ["chmod", {text:"-R",type:"flag"}, {text:"permissions",type:"argument"}, {text:"directory",type:"argument"}],
                desc: "Change permissions recursively for a directory",
            },
            {
                cmd: ["chmod", {text:"644",type:"appliedArgument"}, {text:"file",type:"argument"}],
                desc: "Set file permissions to 644 (owner: read/write, group: read, others: read)",
            },
            {
                cmd: ["chmod", {text:"755",type:"appliedArgument"}, {text:"file",type:"argument"}],
                desc: "Set file permissions to 755 (owner: read/write/execute, group: read/execute, others: read/execute)",
            },
            {
                cmd: ["chmod", {text:"700",type:"appliedArgument"}, {text:"file",type:"argument"}],
                desc: "Set file permissions to 700 (owner: read/write/execute, group: none, others: none)",
            },
            {
                cmd: ["chmod", {text:"u+rwx",type:"appliedArgument"}, {text:"file",type:"argument"}],
                desc: "Add read, write, and execute permissions for the owner",
            },
            {
                cmd: ["chmod", {text:"g+rw",type:"appliedArgument"}, {text:"file",type:"argument"}],
                desc: "Add read and write permissions for the group",
            },
            {
                cmd: ["chmod", {text:"o-r",type:"appliedArgument"}, {text:"file",type:"argument"}],
                desc: "Remove read permission for others",
            },
        ],
    },
    {
        cmd: ["chown", {text:"owner",type:"argument"}, {text:"file",type:"argument"}],
        desc: "Change file ownership",
        childs: [
            {
                cmd: ["chown", {text:"owner[:group]",type:"argument"}, {text:"file",type:"argument"}],
                desc: "Change file owner and group",
            },
            {
                cmd: ["chown", {text:"-R",type:"flag"}, {text:"owner[:group]",type:"argument"}, {text:"directory",type:"argument"}],
                desc: "Change ownership recursively for a directory",
            },
        ],
    },
    {
        cmd: ["umask", {optChilds:[{text:"mask",type:"argument"}]}],
        desc: "Set or display the default file permissions mask",
    },
    {
        cmd: ["curl", {text:"url",type:"argument"}],
        desc: "Transfer data from or to a server using various protocols",
        childs: [
            {
                cmd: ["curl", {text:"-O",type:"flag"}, {text:"url",type:"argument"}],
                desc: "Download a file from a URL and save it with the same name",
            },
            {
                cmd: ["curl", {text:"-d",type:"flag"}, {text:"data",type:"argument"}, {text:"url",type:"argument"}],
                desc: "Send data in a POST request to a server",
            },
            {
                cmd: ["curl", {text:"-I",type:"flag"}, {text:"url",type:"argument"}],
                desc: "Fetch only the HTTP headers from a URL",
            },
            {
                cmd: ["curl", {text:"-u",type:"flag"}, {text:"user:password",type:"argument"}, {text:"url",type:"argument"}],
                desc: "Access a URL with basic authentication",
            },
        ],
    },
    {
        cmd: ["pwd"],
        desc: "Print the current working directory",
    },
    {
        cmd: ["mkdir", {text:"directory",type:"argument"}],
        desc: "Create a new directory",
    },
    {
        cmd: ["cat", {text:"file",type:"argument"}],
        desc: "Concatenate and display file contents",
    },
    {
        cmd: ["less", {text:"file",type:"argument"}],
        desc: "View file contents one screen at a time",
    },
    {
        cmd: ["head", {text:"file",type:"argument"}],
        desc: "Display the first few lines of a file",
    },
    {
        cmd: ["tail", {text:"file",type:"argument"}],
        desc: "Display the last few lines of a file",
    },
    {
        cmd: ["grep", {text:"pattern",type:"argument"}, {text:"file",type:"argument"}],
        desc: "Search for a pattern in a file",
    },
    {
        cmd: ["find", {text:"path",type:"argument"}, {optChilds:[{text:"expression",type:"argument"}]}],
        desc: "Search for files and directories",
    },
    {
        cmd: ["du", {optChilds:[{text:"-h",type:"flag"}]}],
        desc: "Estimate file and directory disk usage",
    },
    {
        cmd: ["top"],
        desc: "Display real-time system processes and resource usage",
    },
    {
        cmd: ["ps"],
        desc: "Display information about active processes",
    },
    {
        cmd: ["kill", {text:"pid",type:"argument"}],
        desc: "Terminate a process by its PID",
    },
    {
        cmd: ["man", {text:"command",type:"argument"}],
        desc: "Display the manual page for a command",
    },
    {
        cmd: ["history"],
        desc: "Display the command history",
    },
    {
        cmd: ["tar", {text:"options",type:"argument"}, {text:"file",type:"argument"}],
        desc: "Archive files using tar",
        childs: [
            {
                cmd: ["tar", {text:"-cvf",type:"flag"}, {text:"archive.tar",type:"argument"}, {text:"file",type:"argument"}],
                desc: "Create an archive",
            },
            {
                cmd: ["tar", {text:"-xvf",type:"flag"}, {text:"archive.tar",type:"argument"}],
                desc: "Extract an archive",
            },
            {
                cmd: ["tar", {text:"-tvf",type:"flag"}, {text:"archive.tar",type:"argument"}],
                desc: "List contents of an archive",
            },
        ],
    },
    {
        cmd: ["gzip", {text:"file",type:"argument"}],
        desc: "Compress a file using gzip",
    },
    {
        cmd: ["gunzip", {text:"file.gz",type:"argument"}],
        desc: "Decompress a gzip-compressed file",
    },
    {
        cmd: ["zip", {text:"archive.zip",type:"argument"}, {text:"file",type:"argument"}],
        desc: "Compress files into a zip archive",
    },
    {
        cmd: ["unzip", {text:"archive.zip",type:"argument"}],
        desc: "Extract files from a zip archive",
    },
    {
        cmd: ["ssh", {text:"user@host",type:"argument"}],
        desc: "Connect to a remote host via SSH",
    },
    {
        cmd: ["scp", {text:"source",type:"argument"}, {text:"destination",type:"argument"}],
        desc: "Securely copy files between hosts",
    },
    {
        cmd: ["sudo", {text:"command",type:"argument"}],
        desc: "Execute a command as another user (usually root)",
    },
    {
        cmd: ["apt", {text:"subcommand",type:"argument"}],
        desc: "Package management for Debian-based systems",
        childs: [
            {
                cmd: ["apt", "update"],
                desc: "Update package lists",
            },
            {
                cmd: ["apt", "upgrade"],
                desc: "Upgrade all packages",
            },
            {
                cmd: ["apt", "install", {text:"package",type:"argument"}],
                desc: "Install a package",
            },
            {
                cmd: ["apt", "remove", {text:"package",type:"argument"}],
                desc: "Remove a package",
            },
        ],
    },
    {
        cmd: ["yum", {text:"subcommand",type:"argument"}],
        desc: "Package management for Red Hat-based systems",
        childs: [
            {
                cmd: ["yum", "update"],
                desc: "Update all packages",
            },
            {
                cmd: ["yum", "install", {text:"package",type:"argument"}],
                desc: "Install a package",
            },
            {
                cmd: ["yum", "remove", {text:"package",type:"argument"}],
                desc: "Remove a package",
            },
        ],
    },
    {
        cmd: ["df", {text:"-h",type:"flag"}],
        desc: "Display disk space usage in human-readable format",
    },
    {
        cmd: ["du", {text:"-sh",type:"flag"}, {text:"path",type:"argument"}],
        desc: "Display the size of a directory or file in human-readable format",
    },
    {
        cmd: ["uname", {text:"-a",type:"flag"}],
        desc: "Display system information",
    },
    {
        cmd: ["date"],
        desc: "Display or set the system date and time",
    },
    {
        cmd: ["cal"],
        desc: "Display a calendar",
    },
    {
        cmd: ["ping", {text:"host",type:"argument"}],
        desc: "Send ICMP echo requests to test network connectivity",
    },
    {
        cmd: ["netstat"],
        desc: "Display network connections, routing tables, and more",
    },
    {
        cmd: ["ip", "addr"],
        desc: "Display IP addresses assigned to network interfaces",
    },
    {
        cmd: ["route"],
        desc: "Show/manipulate the IP routing table",
    },
    {
        cmd: ["ifconfig"],
        desc: "Configure or display network interfaces",
    },
    {
        cmd: ["dig", {text:"domain",type:"argument"}],
        desc: "Query DNS servers for information about a domain",
    },
    {
        cmd: ["nslookup", {text:"domain",type:"argument"}],
        desc: "Query DNS servers for information about a domain",
    },
    {
        cmd: ["whois", {text:"domain",type:"argument"}],
        desc: "Retrieve domain registration information",
    },
    {
        cmd: ["crontab", {optChilds:[{text:"-l",type:"flag"}]}],
        desc: "Manage cron jobs",
    },
    {
        cmd: ["bg"],
        desc: "Resume a job in the background",
    },
    {
        cmd: ["fg"],
        desc: "Resume a job in the foreground",
    },
    {
        cmd: ["jobs"],
        desc: "List active jobs",
    },
    {
        cmd: ["killall", {text:"process",type:"argument"}],
        desc: "Kill all processes by name",
    },
    {
        cmd: ["alias", {text:"name=command",type:"argument"}],
        desc: "Create a shortcut for a command",
    },
    {
        cmd: ["export", {text:"variable=value",type:"argument"}],
        desc: "Set an environment variable",
    },
    {
        cmd: ["source", {text:"file",type:"argument"}],
        desc: "Execute commands from a file in the current shell",
    },
    {
        cmd: ["watch", {text:"command",type:"argument"}],
        desc: "Run a command periodically and display the output",
    },
    {
        cmd: ["tree", {optChilds:[{text:"path",type:"argument"}]}],
        desc: "Display directories and files in a tree-like format",
    },
    {
        cmd: ["diff", {text:"file1",type:"argument"}, {text:"file2",type:"argument"}],
        desc: "Compare two files line by line",
    },
    {
        cmd: ["patch", {text:"file",type:"argument"}],
        desc: "Apply a patch to a file",
    },
    {
        cmd: ["wget", {text:"url",type:"argument"}],
        desc: "Download files from the web",
    },
    {
        cmd: ["tail", {text:"-f",type:"flag"}, {text:"file",type:"argument"}],
        desc: "Follow the end of a file in real-time",
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

