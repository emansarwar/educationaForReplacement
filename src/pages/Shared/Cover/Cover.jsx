// import React from 'react'

import { Parallax } from "react-parallax";

const Cover = ({img, title, detailPara}) => {

  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
  className="h-[500px] hero"
  >
  <div className="bg-opacity-60 hero-overlay"></div>
  <div className="text-center text-neutral-content hero-content">
    <div className="max-w-md">
      <h1 className="mb-5 font-bold text-5xl uppercase">{title}</h1>
      <p className="mb-5 text-justify">
        {detailPara}
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </Parallax>
   
  )
}

export default Cover;