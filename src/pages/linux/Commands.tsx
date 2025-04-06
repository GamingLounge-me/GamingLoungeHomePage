const commands_data = [
    {
        title: "ls",
        description: "List directory contents",
    },
    {
        title: "ls -l",
        description: "List directory contents in long format",
    },
    {
        title: "ls -a",
        description: "List all files including hidden files",
    },
    {
        title: "ls -lsah",
        description: "List directory contents with detailed information, including hidden files, in human-readable format",
    },
    {
        title: "cd",
        description: "Change directory",
    },
    {
        title: "cp",
        description: "Copy files and directories",
    },
    {
        title: "mv",
        description: "Move or rename files and directories",
    },
    {
        title: "rm",
        description: "Remove files or directories",
    },
    {
        title: "rm -r",
        description: "Remove directories and their contents recursively",
    },
    {
        title: "rm -f",
        description: "Force remove files or directories",
    },
    {
        title: "lsblk",
        description: "List information about block devices",
    },
    {
        title: "zpool",
        description: "Manage ZFS storage pools, use information from 'lsblk' for disk identification",
    },
    {
        title: "zpool attach",
        description: "Attach a device to a ZFS storage pool",
    },
    {
        title: "zpool detach",
        description: "Detach a device from a ZFS storage pool",
    },
    {
        title: "zpool replace",
        description: "Replace a device in a ZFS storage pool",
    },
    {
        title: "df",
        description: "Display disk space usage",
    },
    {
        title: "df -h",
        description: "Display disk space usage in human-readable format",
    },
    {
        title: "fdisk",
        description: "Partition a disk",
    }
]

const Commands = () => {
    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {commands_data.map((command, index) => (
                        <tr key={index}>
                            <td className={command.title.includes(" ") ? "inside" : undefined}>
                                {command.title}
                            </td>
                            <td className={command.title.includes(" ") ? "inside2" : undefined}>
                                {command.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
};

export default Commands