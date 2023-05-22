import React from 'react'
import {Line} from 'react-chartjs-2'

const LineChart = ({score}) => {
  return (
      <div>
          <Line data={ score } />
    </div>
  )
}

export default LineChart