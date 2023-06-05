import React from 'react';
import chefImg from '../../../assets/home/chef-service.jpg';

const BistroImg = () => {
  return (
    <div className="mb-12 relative">
      <img src={chefImg} alt="" />
      <div className="w-8/12 mx-auto bg-white text-center p-6 md:absolute top-28 left-44">
        <h3 className="text-5xl uppercase mb-2">Bistro Boss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto <br /> ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroImg;