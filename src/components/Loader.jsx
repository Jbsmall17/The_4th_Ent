import React from 'react'
import { useState, CSSProperties } from "react";
import BounceLoader from "react-spinners/BounceLoader";


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
        <BounceLoader
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
