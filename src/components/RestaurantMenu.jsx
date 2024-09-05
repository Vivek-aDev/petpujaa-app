import { useState, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUi";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const dummy = "Dummy data for (Props Drilling) example"

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleAccordionclick = (index) =>
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="rounded-lg p-6 max-w-3xl mx-auto bg-white shadow-lg">
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>
          <p className="text-lg text-gray-600 mb-1">{cuisines.join(", ")}</p>
          <p className="text-gray-700">
            Rs-{" "}
            <span className="font-semibold text-gray-900">
              {costForTwoMessage}
            </span>
          </p>
        </div>
        <div className="w-48 h-48">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-full object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>

      <div className="mt-6">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => handleAccordionclick(index)}
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
