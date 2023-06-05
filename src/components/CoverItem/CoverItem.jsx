import React from 'react';

const CoverItem = ({img, title, description}) => {
  return (
    <div className="relative">
      <img src={img} alt="" />
      <div className="md:w-8/12 mx-auto bg-black text-white bg-opacity-30 text-center p-12 md:absolute top-36 left-48">
        <h3 className="text-5xl uppercase mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CoverItem;