import { useState } from "react";
import ItemList from "./ItemList";
import { RiArrowDownSLine } from "react-icons/ri";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  function handleClick() {
    console.log("clicked");
    setShowItems(!showItems);
  }

  return (
    <div>
      <div className="my-4 mx-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <RiArrowDownSLine />
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
