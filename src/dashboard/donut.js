import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors  } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import * as raw_data from '../data/buggs.json'

ChartJS.register(ArcElement, Tooltip, Colors)

const make_data = (data) => {
  return ({
    labels: get_label_and_data(data.data).labels,
    datasets: [
      {
        ...get_label_and_data(data.data),
        borderWidth: 1,
      },
    ],
  })
}

const get_label_and_data = (data) => {
  const values = {}, labels = []
  for(let row of data) {
    const intval = parseInt(row.duration)
    const value = Math.floor(intval/10) * 10
    values[value] = (values[value] || 0) + 1
  }
  for(let value of Object.keys(values)) {
    const num = parseInt(value)
    labels.push(`${num} to ${num+9} minutes`)
  }
  return {data: Object.keys(values).map(i => values[i]), labels}
}

export default function Donut(props) {
  console.log(`zzz`, raw_data)

    const data = make_data(raw_data)
    return (
        <Doughnut data={data} />
    )
}