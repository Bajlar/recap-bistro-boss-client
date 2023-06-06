import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
      // console.log(data);
        if (data.modifiedCount === 1) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
    })
  }

  const handleDelete = user => {
    // console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(data => {
            if (data.deletedCount === 1) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
        
      }
    });
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <section>
        <Helmet>
          <title>Bistro Boss | All Users</title>
        </Helmet>
        <div>
          <h3 className="text-3xl font-bold my-4">
            Total Users: {users.length}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="font-semibold"></th>
                <th className="font-semibold">Name</th>
                <th className="font-semibold">Email</th>
                <th className="font-semibold">Role</th>
                <th className="font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div>
                      <div className="text-[#737373]">{user.name}</div>
                    </div>
                  </td>
                  <td className="text-[#737373]">${user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-[#D1A054] hover:bg-[#D1A054] border-0"
                      >
                        <FaUserShield className="text-2xl"></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
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
      </section>
    </div>
  );
};

export default AllUsers;