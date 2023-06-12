import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import * as raw_data from '../data/buggs.json'

ChartJS.register(ArcElement, Tooltip)

const make_data = (data) => {
  const colors = new Array(data?.data.length).fill(0).map(i => make_color())
  return ({
    labels: get_label_and_data(data.data).labels,
    datasets: [
      {
        ...get_label_and_data(data.data),
        backgroundColor: colors,
        borderColor: colors,
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
const make_color = () => {
  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
  return randomRGB()
}

export default function Donut(props) {
  console.log(`zzz`, raw_data)

    const data = make_data(raw_data)
    return (
        <Doughnut data={data} />
    )
}