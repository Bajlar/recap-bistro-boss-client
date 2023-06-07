import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
  //  console.log(item);
  const {_id, name, recipe, image, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    // console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email };
      fetch("https://recap-bistro-boss-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food Added on the cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else {
      Swal.fire({
        title: "Please login to order the food",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  }

  return (
    <div className="card shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="absolute right-5 top-5 text-white bg-black px-3 py-1">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn bg-slate-100 hover:bg-slate-100 border-0 border-b-4 border-[#BB8506] text-[#BB8506] mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;