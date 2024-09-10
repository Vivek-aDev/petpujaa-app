import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1>Cart</h1>
      <p>total:- {cartItems.length} items</p>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
