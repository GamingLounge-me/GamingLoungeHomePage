const commands_data = [
    {
        title: "ls",
        desc: "List directory contents",
        child: [
            {
                title: "ls -l",
                desc: "List directory contents in long format",
                child: [

                ]
            },
            {
                title: "ls -a",
                desc: "List all files including hidden files",
                child: [

                ]
            },
            {
                title: "ls -lsah",
                desc: "List directory contents with detailed information, including hidden files, in human-readable format",
                child: [

                ]
            }
        ]
    },
    {
        title: "cd",
        desc: "Change directory",
        child: [

        ]
    },
    {
        title: "cp",
        desc: "Copy files and directories",
        child: [

        ]
    },
    {
        title: "mv",
        desc: "Move or rename files and directories",
        child: [

        ]
    },
    {
        title: "rm",
        desc: "Remove files or directories",
        child: [
            {
                title: "rm -r",
                desc: "Remove directories and their contents recursively",
                child: [

                ]
            },
            {
                title: "rm -f",
                desc: "Force remove files or directories",
                child: [

                ]
            }
        ]
    },
    {
        title: "lsblk",
        desc: "List information about block devices",
        child: [

        ]
    },
    {
        title: "zpool",
        desc: "Manage ZFS storage pools, use information from 'ls -l /dev/disk/by-id/' for disk identification",
        child: [
            {
                title: "zpool attach",
                desc: "Attach a device to a ZFS storage pool, can be used to create a mirror",
            },
            {
                title: "zpool detach",
                desc: "Detach a device from a ZFS storage pool",
            },
            {
                title: "zpool replace",
                desc: "Replace a device in a ZFS storage pool",
            },
            {
                title: "zpool online -e",
                desc: "Expand a ZFS storage pool",
            }
        ]
    },
    {
        title: "df -h",
        desc: "Display disk space usage in human-readable format",
        child: [

        ]
    },
    {
        title: "cfdisk",
        desc: "Curses-based partition table manipulator for Linux",
        child: [

        ]
    },
    {
        title: "ip",
        desc: "Show/manipulate network interfaces",
        child: [
            {
                title: "ip a",
                desc: "Display all IP addresses assigned to network interfaces",
                child: [

                ]
            }
        ]
    },
    {
        title: "ping",
        desc: "Send ICMP echo requests to test network connectivity",
        child: [

        ]
    },
    {
        title: "arping",
        desc: "Send ARP requests to test connectivity to a specific host on the same network",
        child: [

        ]
    }
]

const Commands = () => {
    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>desc</th>
                    </tr>
                </thead>
                <tbody>
                    {commands_data.map((command, index) => (
                        <>
                            <tr key={index}>
                                <td>
                                    {command.title}
                                </td>
                                <td>
                                    {command.desc}
                                </td>
                            </tr>
                            {command.child.map((child, childIndex) => (
                                <tr key={childIndex}>
                                    <td className={"inside"}>
                                        {child.title}
                                    </td>
                                    <td className={"inside2"}>
                                        {child.desc}
                                    </td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </main>
    )
};

export default Commands