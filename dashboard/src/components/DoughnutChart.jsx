import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const DoughnutChart = ({score}) => {
  return (
      <div>
          <Doughnut data={ score } />
    </div>
  )
}

export default DoughnutChart