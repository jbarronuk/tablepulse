import SimpleBarChart from './components/BarChart'
import { useDailyCounts } from './hooks/useDailyCounts'

function SitesPage() {
  const { data, error } = useDailyCounts('sites', 30)
  
  return (
    <SimpleBarChart days={data} name="Sites"/>
  )
}

export default SitesPage
