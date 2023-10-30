import React from 'react'
import execs from "../assets/execs.jpeg"

export default function Execs({name,position}) {
  return (
    <div>
      <div>
        <img src={execs} alt='pictures of Execs' />
      </div>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  )
}
