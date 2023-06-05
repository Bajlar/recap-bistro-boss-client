import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <section className="mb-12 featured-item bg-fixed text-white py-8">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center px-16">
        <div className="p-4 md:pl-20 w-full">
          <img src={featuredImg} alt="" />
        </div>
        <div className="p-4 w-full">
          <p>March 20, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            <br />
            voluptate facere, deserunt dolores maiores quod nobis quas <br />
            quasi. Eaque repellat recusandae ad laudantium tempore <br />
            consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <div className="mt-6">
            <button className="btn btn-outline text-white border-0 border-b-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;