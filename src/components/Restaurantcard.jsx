import { CDN_URL } from "../utils/constants";

const styleResCard = {
  backgroundColor: "#f0f0f0",
};

const Restaurantcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card" style={{ styleResCard }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h4>{name}</h4>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default Restaurantcard;
