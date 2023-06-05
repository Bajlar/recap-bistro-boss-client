import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  // console.log(total);

  const handleDelete = (item) => {
    // console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  }

  return (
    <div className="w-full min-h-screen p-4">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <section>
        <div className="flex gap-5 pl-12 mb-4">
          <h3 className="text-3xl font-bold">Total Items: {cart.length}</h3>
          <h3 className="text-3xl font-bold">Total Price: ${total}</h3>
          <button className="btn bg-[#D1A054] hover:bg-[#D1A054] border-0">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto pl-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="font-semibold"></th>
                <th className="font-semibold">Image Item</th>
                <th className="font-semibold">Image Name</th>
                <th className="font-semibold">Price</th>
                <th className="font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="image w-20 h-16">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="text-[#737373]">
                        {item.name}
                      </div>
                    </div>
                  </td>
                  <td className="text-[#737373]">${item.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item)} className="btn bg-[#B91C1C] hover:bg-[#B91C1C] border-0">
                      <FaTrashAlt className="text-2xl"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyCart;