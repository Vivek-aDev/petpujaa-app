import Restaurantcard from "./Restaurantcard";

import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
          <Restaurantcard key={resturant?.info?.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
