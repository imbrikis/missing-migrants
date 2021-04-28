import React, { useState, useEffect } from 'react'
import { csv } from 'd3'

const csvUrl =
  'https://gist.githubusercontent.com/imbrikis/ec080cb39b349c9723c2d84cdb17c065/raw/58cb0c47a1f5d58aa58ccbbeaeca9994d7cd64a9/MissingMigrants-Global.csv'

export const useData = () => {
  const [data, setData] = useState(null)

  if (data) {
    console.log(data[0])
  }

  useEffect(() => {
    const dataset = (d) => {
      d['Total Dead and Missing'] = +d['Total Dead and Missing']
      d['Reported Date'] = new Date(d['Reported Date'])
      return d
    }

    csv(csvUrl, dataset).then(setData)
  }, [])

  return data
}
