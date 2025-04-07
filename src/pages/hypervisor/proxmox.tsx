import { FunctionComponent } from "react";
import { Block, BlockHolder } from "../../components/block";
import CommandListRenderer, { CommandList } from "../../components/commandList";

const commands: CommandList = [
    {
        cmd: ["proxmox-boot-tool"],
        desc: "Manage Proxmox boot settings",
        childs: [
            {
                cmd: ["proxmox-boot-tool", "status"],
                desc: "Show boot status, including boot loader and kernel UUIDs(also unused).",
            },
            {
                cmd: ["proxmox-boot-tool", "format", {text:"partition",type:"argument"}],
                desc: "Format a disk for Proxmox boot",
            },
            {
                cmd: ["proxmox-boot-tool", "init", {text:"partition",type:"argument"}],
                desc: "Initialize a disk for Proxmox boot",
            },
            {
                cmd: ["proxmox-boot-tool", "refresh"],
                desc: "Refresh Proxmox boot settings",
            },
        ],
    },
];

const ProxMox: FunctionComponent = () => {
    return (
        <BlockHolder>
            <Block title="Commands">
                <CommandListRenderer list={commands} />
            </Block>

            <Block title="remove unused disk from ProxMox kernel boot uuids">
                Type <code>vim /etc/kernel/proxmox-boot-uuids</code> and remove the unused UUID, inactive UUID's can be obtained via <code>proxmox-boot-tool status</code>
            </Block>
        </BlockHolder>
    );
};

export default ProxMox;

