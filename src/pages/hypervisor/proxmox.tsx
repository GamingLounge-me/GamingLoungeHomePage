const commands_data = [
    {
        title: "proxmox-boot-tool",
        desc: "Manage Proxmox boot settings",
        child: [
            {
                title: "proxmox-boot-tool status",
                desc: "Show boot status, including boot loader and kernel UUIDs(also unused).",
            },
            {
                title: "proxmox-boot-tool format",
                desc: "Format a disk for Proxmox boot",
            },
            {
                title: "proxmox-boot-tool init",
                desc: "Initialize a disk for Proxmox boot",
            },
            {
                title: "proxmox-boot-tool refresh",
                desc: "Refresh Proxmox boot settings",
            }
        ]
    }
]

const ProxMox = () => {
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
            <div className="block">
                <h2>remove unused disk from ProxMox kernel boot uuids</h2>
                <p>Type <code>vim /etc/kernel/proxmox-boot-uuids</code> and remove the unused UUID, inactive UUID's can be obtained via <code>proxmox-boot-tool status</code></p>
            </div>
        </main>
    )
};

export default ProxMox