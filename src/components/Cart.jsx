import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4 border-b pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Cart</h1>
          <p className="text-lg text-gray-500">
            Total: <span className="font-semibold">{cartItems.length}</span> items
          </p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 mr-8">
          Clear Cart
        </button>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
