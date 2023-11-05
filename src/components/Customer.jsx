import React from 'react'

export default function Customer({img,name, position, desc}) {
  return (
    <div className='customer'>
        <div>
            <img src={img} width={100} height={100} alt='customer-image'/>
            <p className='customer-name'>{name}</p>
            <p className='customer-position'>{position}</p>
        </div>
        <div>
            <p className='description'>
                {desc}
            </p>
        </div>
    </div>
  )
}
