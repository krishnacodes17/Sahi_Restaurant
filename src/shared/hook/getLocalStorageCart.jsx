


export const getCartFromStorage = () => {
  const cart = localStorage.getItem("cart");
  if (!cart) return [];
  return JSON.parse(cart);
};


export const setCartToStorage = (data)=>{
    localStorage.setItem("cart", JSON.stringify(data) || [])
}