import SimpleBarChart from './components/BarChart'

function UsersPage() {
  
  const data = [
    {label: '15/11/26', count: 299},
    {label: '14/11/26', count: 101},
    {label: '13/11/26', count: 101},
  ]

  return (
    <SimpleBarChart days={data} name="Users"/>
  )
}

export default UsersPage
