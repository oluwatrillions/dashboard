import React from 'react'
import {Pie} from 'react-chartjs-2'

const PieChart = ({score}) => {
  return (
      <div>
          <Pie data={ score } />
    </div>
  )
}

export default PieChart