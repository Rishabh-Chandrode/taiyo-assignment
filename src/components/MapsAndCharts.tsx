import React from 'react'
import LineChart from './LineChart'
import Map from './Map'

const MapsAndCharts = () => {
  return (
    <div className='mt-16   flex flex-col justify-center '>
      <LineChart />
      <div className='h-5'></div>
      <Map />
    </div>
  )
}

export default MapsAndCharts