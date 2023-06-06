import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
import contactImg from '../../../assets/contact/banner.jpg';
import { FaClock, FaLocationArrow, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import robotImg from '../../../assets/contact/Rectangle 76.svg';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <div className="mb-12">
        <Cover
          img={contactImg}
          title={"Contact Us"}
          description={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <section className="max-w-6xl mx-auto mb-12">
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"Our Location"}
        ></SectionTitle>
        <div className="md:flex gap-4">
          <div className="md:w-4/12 border-2">
            <p className="bg-[#D1A054] h-16 text-white flex justify-center items-center">
              <FaPhoneAlt className="text-3xl"></FaPhoneAlt>
            </p>
            <div className="text-center md:h-32 mr-4 ml-4 mb-4 bg-gray-200 p-4">
              <h3 className="text-2xl font-medium uppercase">Phone</h3>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="md:w-4/12 border-2">
            <p className="bg-[#D1A054] h-16 text-white flex justify-center items-center">
              <FaMapMarkerAlt className="text-3xl"></FaMapMarkerAlt>
            </p>
            <div className="text-center md:h-32 mr-4 ml-4 mb-4 bg-gray-200 p-4">
              <h3 className="text-2xl font-medium uppercase">Address</h3>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="md:w-4/12 border-2">
            <p className="bg-[#D1A054] h-16 text-white flex justify-center items-center">
              <FaClock className="text-3xl"></FaClock>
            </p>
            <div className="text-center md:h-32 mr-4 ml-4 mb-4 bg-gray-200 p-4">
              <h3 className="text-2xl font-medium uppercase">Working House</h3>
              <p>
                Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
        </div>
        <div className="my-12">
          <SectionTitle
            subHeading={"Send Us a Message"}
            heading={"Contact From"}
          ></SectionTitle>
        </div>
        <form className="bg-[#F3F3F3] p-20">
          <div className="md:flex gap-4 mb-2">
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input w-full"
              />
            </div>
            <div className="md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Email*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="input w-full"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Phone*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input w-full"
            />
          </div>
          <div className="w-full mb-2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Message*</span>
            </label>
            <textarea
              className="input w-full min-h-[180px] pt-2 resize-none"
              name=""
              id=""
              placeholder="Write your message here"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <img src={robotImg} alt="" />
          </div>
          <div className="text-center">
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] capitalize border-0 mt-4">
              Send Message <FaLocationArrow className="ml-2"></FaLocationArrow>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;