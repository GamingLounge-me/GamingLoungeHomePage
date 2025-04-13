import { Block, BlockHolder, TableBlock } from "../../../../components/block"

const Insert = [
    { command: "i", description: "Insert mode (insert text before the cursor)" },
    { command: "I (shift + i)", description: "Insert mode (insert text at the beginning of the line)" },
    { command: "a", description: "Insert mode (insert text after the cursor)" },
    { command: "o", description: "Insert mode (insert a new line below the current line)" },
    { command: "O (shift + o)", description: "Insert mode (insert a new line above the current line)" },
];

const Visual = [
    { command: "v", description: "Visual mode (select text)" },
    { command: "V (shift + v)", description: "Visual mode (select whole lines)" },
    { command: "Ctrl + v", description: "Visual block mode (select a block of text)" },
];

const Navigation = [
    { command: "h", description: "Move the cursor left" },
    { command: "j", description: "Move the cursor down" },
    { command: "k", description: "Move the cursor up" },
    { command: "l", description: "Move the cursor right" },
    { command: "^", description: "Move to the beginning of the line" },
    { command: "$", description: "Move to the end of the line" },
    { command: "Ctrl + f", description: "Scroll forward one page" },
    { command: "Ctrl + b", description: "Scroll backward one page" },
];

const Search = [
    { command: "/search <term>", description: "Search for a term in the file" },
    { command: "?search <term>", description: "Search backward for a term in the file" },
    { command: "n", description: "Repeat the last search in the same direction" },
    { command: "N (shift + n)", description: "Repeat the last search in the opposite direction" },
];

const Editing = [
    { command: ":q", description: "Quit Vim" },
    { command: ":w", description: "Save the current file" },
    { command: ":wq", description: "Save and quit Vim" },
    { command: ":q!", description: "Quit Vim without saving changes" },
    { command: ":e filename", description: "Open a file in Vim" },
    { command: ":set number", description: "Show line numbers" },
    { command: ":set nonumber", description: "Hide line numbers" },
    { command: "d[number]d", description: "Delete a line or a range of lines" },
    { command: "y[number]y", description: "Yank (copy) a line or a range of lines" },
    { command: "p", description: "Paste the yanked text after the cursor" },
    { command: "P (shift + p)", description: "Paste the yanked text before the cursor" },
    { command: "u", description: "Undo the last change" },
    { command: "Ctrl + r", description: "Redo the last undone change" },
];

const Replace = [
    { command: ":%s/old/new/g", description: "Replace all occurrences of 'old' with 'new' in the file" },
    { command: ":%s/old/new/gc", description: "Replace all occurrences of 'old' with 'new' in the file with confirmation" },
];

const tables = [
    { title: "Insert Mode", data: Insert },
    { title: "Visual Mode", data: Visual },
    { title: "Navigation", data: Navigation },
    { title: "Search", data: Search },
    { title: "Editing", data: Editing },
    { title: "Replace", data: Replace },
]

const vim = () => {
    return (
        <BlockHolder>
            {
                tables.map((table, idx) => (
                    <TableBlock
                        data={table.data}
                        render={{
                            command: (value) => value,
                            description: (value) => value,
                        }}
                        view={[
                            { title: "Command", collum: "command" },
                            { title: "Description", collum: "description" },
                        ]}
                        section={table.title.toLowerCase().replace(" ", "-")}
                        title={table.title}
                        key={idx}
                    >
                    </TableBlock>
                ))
            }
        </BlockHolder>
    )
}

export default vim;
