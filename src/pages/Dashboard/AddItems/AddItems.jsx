// import React from 'react'

import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosCqre from "../../../hooks/useAxiosCqre";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const AddItems = () => {
//   const { register, handleSubmit,} = useForm();
  const { register, handleSubmit, reset } = useForm();
  const axiosCqre = useAxiosCqre();
  const onSubmit = async(data) => {
    // if(res.data.success)
    // console.log('addItems data',data);
    if(data){
        const menuItem ={
        name: data.name,
        category: data.category,
        image: data.image,
        price: parseFloat(data.price),
        recipe: data.recipe
        }
        // console.log('menuItem',menuItem)
        const menuRes = await axiosCqre.post('/menu', menuItem);
        
        // console.log('menuRes',menuRes.data)
        if(menuRes.data.insertedId){
            reset();
            //show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
  }
  return (
    <div>
      <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
      <div>
        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input type="text" placeholder="Recipe name" {...register("name", { required: true })} className="input-bordered w-full input" />
          </label>
          <div className="flex gap-5">
            {/* category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue="default" {...register("category", { required: true })} className="w-full select-bordered select">
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input type="number" placeholder="Price" {...register("price", { required: true })} className="input-bordered w-full input" />
            </label>
          </div>
          {/* recipe details */}
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea {...register("recipe")} className="textarea-bordered h-24 textarea" placeholder="recipe details"></textarea>
            </label>
          </div>

          <button className="my-5 w-3/4 align-auto btn btn-success">
            Add Item <FaUtensils className="ml-3" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
