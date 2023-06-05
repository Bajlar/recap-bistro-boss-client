import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-4">
      {items.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default MenuCategory;