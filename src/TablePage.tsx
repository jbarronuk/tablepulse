import SimpleBarChart from "./components/BarChart"
import { useDailyCounts } from "./hooks/useDailyCounts"

type Props = {
    table: string
    label: string
}

function TablePage({ table, label }: Props) {
    const { data, error } = useDailyCounts(table, 30)

    if (error) return <p>Couldn't load {label}</p>

    return <SimpleBarChart days={data} name={label} />
}

export default TablePage