import { CDN_URL } from "../utils/constants";

const styleResCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800">
          {name.split(" ").length > 3
            ? name.split(" ").slice(0, 3).join(" ") + "..."
            : name}
        </h4>
        <h3 className="text-gray-600 text-sm mt-2">
          {cuisines.length > 3
            ? cuisines.slice(0, 3).join(", ") + "..."
            : cuisines.join(", ")}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <h4 className="text-yellow-500 font-bold">{avgRating} ⭐</h4>
          <h4 className="text-gray-800">{costForTwo}</h4>
        </div>
        <p className="text-xs text-gray-500 mt-2">ID: {id}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
