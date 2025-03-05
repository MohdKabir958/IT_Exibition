import React from 'react'
import logo from "../assets/logo.webp"

function Logo({width="60px",height="70px"}) {
  return (
    <>
    <img src={logo} width={width} height={height} className="px-1" data-aos="fade-left"/>
    </>
  )
}

export default Logo