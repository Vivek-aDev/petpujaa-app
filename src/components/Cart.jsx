import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/Store/Slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4 border-b pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Cart</h1>
          <p className="text-lg text-gray-500">
            Total:{" "}
            <span className="font-semibold text-red-500">
              {cartItems.length}
            </span>{" "}
            items
          </p>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300 ease-in-out mr-8"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
        {cartItems.length !== 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <div className="text-center py-8 rounded-lg">
            <h1 className="text-2xl font-semibold text-gray-600 flex items-center justify-center mb-4">
              😇 Add items to your cart
            </h1>
            <Link to={"/"}>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
