import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import BistroImg from '../BistroImg/BistroImg';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto my-12">
        <Category></Category>
        <BistroImg></BistroImg>
        <PopularMenu></PopularMenu>
        <Contact></Contact>
        <ChefRecommends></ChefRecommends>
      </div>
      <Featured></Featured>
      <div className="max-w-6xl mx-auto my-12">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;