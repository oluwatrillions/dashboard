import { useState } from 'react'
import './App.css'
import BarChart from './components/BarChart'
import { userData } from './Data'
import {Chart as ChartJS} from 'chart.js/auto'

function App() {

    console.log(userData.age);

    const [scoredata, setScoredata] = useState({
        labels: userData.map((age) => age.age),

        datasets: [
            {
                label: 'Average score of students by age and sex',
                data: userData.map((students) => students.averageScore)
            }
        ]
    })

  return (
    <div>
          <BarChart score={ scoredata } />  
    </div>
  )
}

export default App
