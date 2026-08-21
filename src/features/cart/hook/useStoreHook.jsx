import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createOrder } from "../../orders/state/orderSlice";
import { clearCart } from "../state/CartSlice";

export const useStoreHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.recipes
  );

  // Temporary pricing because DummyJSON recipe doesn't provide price
  const getPrice = (id) => {
    const prices = {
      1: 299,
      2: 249,
      3: 199,
    };

    return prices[id] || 249;
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + getPrice(item.id) * item.quantity;
  }, 0);

  const deliveryFee = cartItems.length > 0 ? 40 : 0;

  const total = subtotal + deliveryFee;


  // ================= PLACE ORDER =================

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      return;
    }

    const orderData = {
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        quantity: item.quantity,
        price: getPrice(item.id),
      })),

      subtotal,

      deliveryFee,

      total,

      itemCount: cartItems.reduce((sum, item) => {
        return sum + item.quantity;
      }, 0),
    };

    dispatch(createOrder(orderData));

    dispatch(clearCart());

    navigate("/home/orders");
  };


  return {
    cartItems,
    getPrice,
    subtotal,
    total,
    deliveryFee,
    handlePlaceOrder,
    dispatch,
  };
};