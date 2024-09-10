import { useDispatch } from "react-redux";
import { ITEM_IMG } from "../utils/constants";
import { addItem } from "../utils/Store/Slices/cartSlice";
// import appStore from "../utils/Store/appStore";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-4 p-4 border-b border-gray-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800">
                {item?.card?.info?.name}
              </h3>
              <span className="text-sm text-gray-600">
                ₹
                {item?.card?.info?.finalPrice / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="font-medium text-yellow-500">
                {item?.card?.info?.ratings?.aggregatedRating?.rating || "NA"} ⭐
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="relative">
              <img
                className="w-20 h-20 rounded-lg object-cover"
                src={ITEM_IMG + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <button
                className="absolute bg-green-700 text-white font-medium rounded-sm px-3 py-1 inset-x-2 bottom-2 hover:bg-green-600 transition duration-300"
                onClick={()=>handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
