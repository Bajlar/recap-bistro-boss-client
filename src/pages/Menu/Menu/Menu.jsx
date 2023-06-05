import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-banner.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import coverImg from '../../../assets/home/chef-service.jpg';
import CoverItem from '../../../components/CoverItem/CoverItem';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const Menu = () => {
  const [menu] = useMenu();
  // console.log(menu);
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  // console.log(offered, dessert, pizza, salad, soup);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div className="mb-12">
        <Cover
          img={menuImg}
          title={"Our Menu"}
          description={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <section className="mb-12">
        <SectionTitle
          subHeading={"Don't miss"}
          heading={"Today's Offer"}
        ></SectionTitle>
        <div className="max-w-6xl mx-auto">
          <MenuCategory items={offered}></MenuCategory>
          <div className="text-center mt-6">
            <ButtonLink></ButtonLink>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <CoverItem
          img={coverImg}
          title={"desserts"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverItem>
        <div className="max-w-6xl mx-auto my-12">
          <MenuCategory items={dessert}></MenuCategory>
          <div className="text-center mt-6">
            <ButtonLink></ButtonLink>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <CoverItem
          img={coverImg}
          title={"pizza"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverItem>
        <div className="max-w-6xl mx-auto my-12">
          <MenuCategory items={pizza}></MenuCategory>
          <div className="text-center mt-6">
            <ButtonLink></ButtonLink>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <CoverItem
          img={coverImg}
          title={"salad"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverItem>
        <div className="max-w-6xl mx-auto my-12">
          <MenuCategory items={salad}></MenuCategory>
          <div className="text-center mt-6">
            <ButtonLink></ButtonLink>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <CoverItem
          img={coverImg}
          title={"soup"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverItem>
        <div className="max-w-6xl mx-auto my-12">
          <MenuCategory items={soup}></MenuCategory>
          <div className="text-center mt-6">
            <ButtonLink></ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;