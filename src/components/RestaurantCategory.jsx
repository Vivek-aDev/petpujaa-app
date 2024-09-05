import { useState } from "react";
import ItemList from "./ItemList";
import { RiArrowDownSLine } from "react-icons/ri";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  function handleClick() {
    setShowIndex(showItems)
  }

  return (
    <div>
      <div className="my-4 mx-4 bg-gray-100 shadow-lg rounded-lg p-4">
        <div
          className="flex justify-between items-center cursor-pointer p-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg"
          onClick={handleClick}
        >
          <span className="font-semibold text-gray-800">
            {data?.title} ({data?.itemCards.length})
          </span>
          <RiArrowDownSLine
            className={`text-gray-600 transform transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          />
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
