import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleResCard = {
  backgroundColor: "#f0f0f0",
};

const Restaurantcard = (props) => {
  // console.table(props);

  return (
    <div className="res-card" style={styleResCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"
        alt=""
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.stars}</h4>
      <h4>{props.eta}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Restaurantcard
          resName="Maa Mangala Hotel"
          cuisine="Veg thali, chicken thali, biriyani, papad"
          stars="4.4⭐"
          eta="10 minutes"
        />
        <Restaurantcard
          resName="Food Villa"
          cuisine="Biriyani, North Indian, Asian"
          stars="3.4⭐"
          eta="24 minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
