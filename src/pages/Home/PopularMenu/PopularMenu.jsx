// import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
// console.log('popular', popular)
    
  return (
    <section className="mx-5 mb-12 px-10 text-center">
        <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
        ></SectionTitle>
        <div className="gap-10 grid md:grid-cols-2">
            {
                popular.map(item=> <MenuItem
                key={item._id}
                item={item} ></MenuItem>

                )
            }
        </div>
        <button className="border-1 mt-4 border-b-4 w-1/2 btn btn-outline"><Link to="/menu">View Full Menu</Link></button>
        

    </section>
  )
}

export default PopularMenu