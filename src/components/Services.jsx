import React from 'react'
import "../styles/services.css"

export default function Services({name,desc}) {
  return (
    <div className='fouth-service'>
      <p className='fouth-service-name'>{name}</p>
      <p className='fouth-service-desc'>{desc}</p>
    </div>
  )
}
