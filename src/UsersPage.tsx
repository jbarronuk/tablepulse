import SimpleBarChart from './components/BarChart'
import { useDailyCounts } from './hooks/useDailyCounts'

function UsersPage() {
  const { data, error } = useDailyCounts('profiles', 30)
  
  return (
    <SimpleBarChart days={data} name="Users"/>
  )
}

export default UsersPage
