import React from 'react'
import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";


export default function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffa500");

    const styleContainer = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height: "100vh",
        width: "100vw"
    }
  return (
    <div className='loader' style={styleContainer}>
        <BarLoader
            color={color}
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
}
