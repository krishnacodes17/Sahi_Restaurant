export const getOrderFromStorage = () => {
  try {
    let order = JSON.parse(localStorage.getItem("orders"));
    return order ? order : [];
  } catch {
    return [];
  }
};

export const setOrderToStorage = (data) => {
  try {
    localStorage.setItem("orders", JSON.stringify(data));
  } catch {
    // silent fail
  }
};
