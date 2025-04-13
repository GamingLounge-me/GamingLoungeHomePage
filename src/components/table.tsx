import { ReactNode } from "react"

export type TableProps<T extends object> = {
    data: T[],
    render: { [key in keyof T]: (value: T[key]) => ReactNode },
    view: {
        collum: keyof T,
        title: ReactNode,
    }[],
};

type TableStyleProps = {
    className?: string,
    style?: React.CSSProperties,
};

export const Table = <T extends object,>({ data, render, view, className, ...tableProps }: TableProps<T> & TableStyleProps) => { //: FunctionComponent<TableProps<?>>
    return (
        <table className={"table table-zebra table-pin-rows bg-base-100 " + (className ?? "")}
            {...tableProps}
        >
            <thead>
                <tr className="top-20">
                    {view.map((v, idx) => (
                        <th key={idx} className="last:rounded-tr-(--radius-box) first:rounded-tl-(--radius-box)">{v.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((e, idx) => (
                    <tr key={idx} className="group">
                        {view.map((v, idx) => (
                            <td key={idx} className="group-last:last:rounded-br-(--radius-box) group-last:first:rounded-bl-(--radius-box)">{render[v.collum](e[v.collum])}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};