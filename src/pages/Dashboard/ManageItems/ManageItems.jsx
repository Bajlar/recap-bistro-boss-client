import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  // console.log(menu);
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = item => {
    // console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/menu/${item._id}`)
          .then(res => {
          // console.log(res.data);
            refetch();
            if (res.data.deletedCount === 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        })
      }
    });
  }

  return (
    <div className="w-full min-h-screen p-4">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        subHeading={"hurry up!"}
        heading={"Manage all Items"}
      ></SectionTitle>
      <div className="text-center mb-4">
        <p className="text-3xl font-bold">Total Items: {menu.length}</p>
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-semibold"></th>
              <th className="font-semibold">Image Item</th>
              <th className="font-semibold">Image Name</th>
              <th className="font-semibold">Price</th>
              <th className="font-semibold">Action</th>
              <th className="font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
                    <div className="text-[#737373]">{item.name}</div>
                  </div>
                </td>
                <td className="text-[#737373]">${item.price}</td>
                <td>
                  <Link to="/dashboard/addItems">
                    <button className="btn bg-[#D1A054] hover:bg-[#D1A054] border-0">
                      <FaRegEdit className="text-2xl"></FaRegEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-[#B91C1C] hover:bg-[#B91C1C] border-0"
                  >
                    <FaTrashAlt className="text-2xl"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;