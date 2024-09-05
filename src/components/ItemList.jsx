import { ITEM_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="m-2 p-4 border-b-2">
          <div className="flex justify-between">
            <div>
              <span className="font-semibold">{item?.card?.info?.name} </span>
              <span className="text-sm">
                ₹
                {item?.card?.info?.finalPrice / 100 ||
                  item?.card?.info?.defaultPrice / 100}{" "}
              </span>
              <p className="font-medium">
                {item?.card?.info?.ratings?.aggregatedRating?.rating || "NA"}⭐
              </p>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="relative">
              <button className="absolute bg-slate-50 text-green-700 font-medium rounded-sm p-0.5 inset-x-4  -bottom-3">
                ADD
              </button>
              <img
                className="w-20 h-20 rounded-lg"
                src={ITEM_IMG + item?.card?.info?.imageId}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
