import React from 'react';
// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
    
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //   })
  // }, [])

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"From our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 p-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
        {/* {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))} */}
      </div>
      <div className="text-center mt-6">
        <Link to='/order'>
          <button className="btn btn-outline border-0 border-b-4">
            View full menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;