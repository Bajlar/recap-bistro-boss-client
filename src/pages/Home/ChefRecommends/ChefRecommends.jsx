import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleChef from "./SingleChef";
import useMenu from "../../../hooks/useMenu";

const ChefRecommends = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === 'offered');
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       const offeredItems = data.filter((item) => item.category === "offered");
  //       // console.log(offeredItems);
  //       setMenu(offeredItems);
  //     });
  // }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid md:grid-cols-4 gap-6">
        {offered.map((item) => (
          <SingleChef key={item._id} item={item}></SingleChef>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
