// import React from 'react'

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, detailPara }) => {
  return (
    <div className="p-8 text-center">
      {title && <Cover img={coverImg} title={title} detailPara={detailPara}></Cover>}
      <div className="gap-10 grid md:grid-cols-2 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="border-1 bg-cyan-800 mt-4 border-b-4 w-2/3 font-bold btn btn-outline">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
