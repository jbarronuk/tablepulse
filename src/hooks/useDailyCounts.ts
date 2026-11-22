import { useEffect, useState } from "react"
import { supabase } from '../lib/supabase'

export function useDailyCounts(table: string, days = 30) {
    type CountPoint = { label: string; count: number }

    const formatLabel = (iso: string) =>
        new Date(iso).toLocaleDateString('en-GB', {
            day: '2-digit', month: '2-digit', year: '2-digit', timeZone: 'UTC',
    })

    const [data, setData] = useState<CountPoint[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancelled = false

        const load = async () => {
            setLoading(true)
            setError(null)

            try {
                const since = new Date()
                since.setUTCDate(since.getUTCDate() - (days - 1))
                since.setUTCHours(0,0,0,0)

                supabase
                    .from(table)
                    .select('created_at')
                    .gte('created_at', since.toISOString())
                    .then(({data: rows, error}) => {
                        const counts = new Map<string, number>() 

                        rows?.forEach((row) => {
                            let createdAt = new Date(row.created_at);
                            const key = createdAt.toISOString().slice(0, 10)
                            counts.set(key, (counts.get(key) ?? 0) + 1)
                        })
                        const result: CountPoint[] = []
                        for (let i = 0; i < days; i++) {
                            const d = new Date()
                            d.setUTCHours(0,0,0,0)
                            d.setUTCDate(d.getUTCDate() - i)
                            const key = d.toISOString().slice(0, 10)
                            result.push({ label: formatLabel(key), count: counts.get(key) ?? 0})
                        }
                        
                        if (!cancelled) setData(result)
                })
            } catch (err) {
                console.error('useDailyCounts:', err)
                if (!cancelled) setError(toMessage(err))
            } finally {
                if (!cancelled) setLoading(false)
            }
        }
        load()
        return () => { console.log("error") }
    }, [table, days])
    return { data, error }
}