import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItems = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, category, price, recipe } = data;
          const newItem = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image: imgURL,
          };
          // console.log(newItem);
          axiosSecure.post("/menu", newItem)
            .then(data => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Item added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
            }
          })
        }
      })
  };

  return (
    <div className="w-full min-h-screen p-4">
      <Helmet>
        <title>Bistro Boss | Add Items</title>
      </Helmet>
      <SectionTitle
        subHeading={"What's new?"}
        heading={"Add an Item"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] py-4 px-8"
      >
        <div className="w-full mb-2">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Recipe name*
            </span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            {...register("name", { required: true })}
            className="input w-full"
          />
        </div>
        <div className="md:flex gap-4 mb-2">
          <div className="md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Category*
              </span>
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full select"
              defaultValue={"Pick one"}
            >
              <option disabled>
                Pick one
              </option>
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Soups">Soups</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className="md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input w-full"
            />
          </div>
        </div>
        <div className="w-full mb-2">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Recipe Details*
            </span>
          </label>
          <textarea
            className="input w-full min-h-[180px] pt-2 resize-none"
            name=""
            id=""
            placeholder="Write your message here"
            {...register("recipe", { required: true })}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="mb-2">
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs"
          />
        </div>
        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] capitalize border-0 mt-4">
          Add Item <FaUtensils className="ml-2"></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItems;