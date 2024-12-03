// import React from 'react'

import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
// import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosCqre from "../../../hooks/useAxiosCqre";
import useAxiosPubleague from "../../../hooks/useAxiosPubleague";

const UpdateItem = () => {
    const axiosPubleague = useAxiosPubleague();
    const axiosCqre = useAxiosCqre();
    const { register, handleSubmit } = useForm();
    // const { register, handleSubmit, reset} = useForm();
    const {name, recipe, price, category, _id} = useLoaderData();
    // const {name, recipe, price, category, _id} = useLoaderData();
    // console.log(name, price, recipe, category);
    const onSubmit = async(data) => {
        // if(res.data.success)
        // console.log('addItems data',data);
        const res = await axiosPubleague.post({
            headers:{
                'contents-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem ={
            name: data.name,
            category: data.category,
            image: data.image,
            price: parseFloat(data.price),
            recipe: data.recipe
            }
            // console.log('menu ----Item',menuItem)
            const menuRes = await axiosCqre.patch(`/menu/${_id}`, menuItem);
            
            // console.log('menu --Res',menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // reset();
                //show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        // console.log('res data', res.data)
      }
  return (
    <div>
        <SectionTitle heading="update item" subHeading="refresh info"></SectionTitle>
        <div>
        <div>
        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input type="text" defaultValue={name} placeholder="Recipe name" {...register("name", { required: true })} className="input-bordered w-full input" />
          </label>
          <div className="flex gap-5">
            {/* category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue={category} {...register("category", { required: true })} className="w-full select-bordered select">
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
              <input defaultValue={price} type="number" placeholder="Price" {...register("price", { required: true })} className="input-bordered w-full input" />
            </label>
          </div>
          {/* recipe details */}
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea defaultValue={recipe} {...register("recipe")} className="textarea-bordered h-24 textarea" placeholder="recipe details"></textarea>
            </label>
          </div>

          <button className="my-5 w-3/4 align-auto btn btn-success">
            Update Menu Item 
          </button>
        </form>
      </div>
        </div>
    </div>
  )
}

export default UpdateItem;