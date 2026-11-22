import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

type Day = {
    label: string
    count: number
}
type Props = {
    days: Day[],
    name: string
}
const SimpleBarChart = ({days, name}: Props) => {

    if (days.length === 0) return <p>No data yet</p>
console.log(days)
    return (
        <BarChart
            style={{ width: '100%', aspectRatio: 1.618 }}
            responsive
            data={days}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5
            }}
            >
                <CartesianGrid />
                <XAxis dataKey="label" minTickGap={20} />
                <YAxis width="auto" allowDecimals={false} />
                <Tooltip />
                <Bar name={name} dataKey="count" radius={[10, 10, 0, 0]} fill="#4f46e5"/>
            </BarChart>
    )
}

export default SimpleBarChart