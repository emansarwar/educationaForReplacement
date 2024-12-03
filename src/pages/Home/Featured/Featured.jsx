// import React from 'react'

import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
import { Link } from "react-router-dom"
const Featured = () => {
  return (
    <div className="bg-fixed my-20 text-center text-white featured-item">
        <SectionTitle 
        heading="Featured Item"
        subHeading="Check It Out"
        ></SectionTitle>
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 pt-12 pb-20 w-full">
            <div className="flex justify-center md:justify-end mx-auto p-10 w-full md:w-1/2">
                <img className="inline-block rounded-xl" src={featuredImg} alt="" />
            </div>
            <div className="md:px-10 w-full md:w-1/2 text-bold text-center md:text-left">
                {/* <p>{new Date().getFullYear()}</p> */}
                <p className="upperCase">Savor the flavor of perfection with today's featured dish! Carefully crafted with the finest ingredients and packed with taste, this special creation promises to delight your senses. Available for a limited time—grab yours now!</p>
                
                <button className="border-1 bg-teal-800 mt-4 border-r-3 border-b-4 w-1/2 btn btn-outline"><Link to="/order/salad">Order Now</Link></button>
                
            </div>
        </div>
    </div>
  )
}

export default Featured