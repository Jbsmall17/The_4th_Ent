import React from 'react'

export default function BlogPost({title,desc}) {
  return (
    <div>
        <p>{title}</p>
        <p>{`${desc.substring(0,100)}...`}<a href='#'>Readmore</a></p>
    </div>
  )
}
