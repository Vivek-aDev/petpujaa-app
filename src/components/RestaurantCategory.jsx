import ItemList from "./ItemList";
import { RiArrowDownSLine } from "react-icons/ri";

const RestaurantCategory = ({ data }) => {
  //   console.log("props", data);
  return (
    <div>
      <div className="my-4 mx-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between">
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <RiArrowDownSLine />
        </div>
        <ItemList items={data?.itemCards} />
      </div>
    </div>
  );
};
export default RestaurantCategory;
