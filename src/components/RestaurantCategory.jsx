import { RiArrowDownSLine } from "react-icons/ri";

const RestaurantCategory = ({ data }) => {
  //   console.log("props", data);

  return (
    <div>
      <div className="flex justify-between my-4 bg-gray-50 shadow-lg p-4">
        <span className="font-bold">{data?.title} ({data?.itemCards.length})</span>
        <RiArrowDownSLine />
      </div>
    </div>
  );
};
export default RestaurantCategory;
