import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FiArrowLeft,
  FiPackage,
  FiCalendar,
  FiChevronRight,
  FiShoppingBag,
} from "react-icons/fi";
import { cancelOrder } from "../../state/orderSlice";


const OrderPage = () => {
  const dispatch = useDispatch();

  const orders = useSelector(
    (state) => state.orders.orders
  );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Preparing":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";

      case "Delivered":
        return "bg-green-500/10 text-green-400 border-green-500/20";

      case "Cancelled":
        return "bg-red-500/10 text-red-400 border-red-500/20";

      case "Out for Delivery":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";

      case "Pending":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";

      default:
        return "bg-white/5 text-white/50 border-white/10";
    }
  };

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= HEADER ================= */}

      


      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">

        {/* Back */}

        <Link
          to={-1}
          className="hidden sm:inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-[#ff5a00] mb-5"
        >
          <FiArrowLeft size={17} />
          Back to Home
        </Link>


        {/* Heading */}

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
            Order History
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-white/35">
            Track your orders and view your previous purchases.
          </p>

        </div>


        {/* ================= EMPTY STATE ================= */}

        {orders.length === 0 ? (

          <div className="mt-10 flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#111111] px-5 text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ff5a00]/10 text-5xl">
              📦
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No orders yet
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
              You haven't placed any orders yet. Explore our
              menu and discover something delicious.
            </p>

            <Link
              to="/home/menu"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ff5a00] px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
            >
              <FiShoppingBag size={16} />
              Explore Our Menu
            </Link>

          </div>

        ) : (

          /* ================= ORDERS ================= */

          <div className="mt-8 space-y-5">

            {orders.map((order) => (

              <article
                key={order.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition hover:border-white/15"
              >

                {/* ================= ORDER HEADER ================= */}

                <div className="flex flex-col gap-4 border-b border-white/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff5a00]/10 text-[#ff5a00]">
                        <FiPackage size={15} />
                      </div>

                      <div>

                        <p className="text-xs text-white/30">
                          Order ID
                        </p>

                        <p className="text-sm font-bold">
                          {order.id}
                        </p>

                      </div>

                    </div>


                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/30">

                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={13} />
                        {formatDate(order.createdAt)}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span>
                        {formatTime(order.createdAt)}
                      </span>

                    </div>

                  </div>


                  {/* Status */}

                  <span
                    className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>

                </div>


                {/* ================= ORDER ITEMS ================= */}

                <div className="divide-y divide-white/5">

                  {order.items?.map((item, index) => (

                    <div
                      key={`${item.id}-${index}`}
                      className="flex items-center gap-3 p-4 sm:gap-4 sm:px-6"
                    >

                      {/* Image */}

                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#181818] sm:h-20 sm:w-20">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                      </div>


                      {/* Info */}

                      <div className="min-w-0 flex-1">

                        <h3 className="line-clamp-2 text-sm font-semibold sm:text-base">
                          {item.name}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-white/30">

                          <span>
                            Qty: {item.quantity}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-white/20" />

                          <span>
                            ₹{item.price} each
                          </span>

                        </div>

                      </div>


                      {/* Item Total */}

                      <p className="shrink-0 text-sm font-bold text-[#ff5a00] sm:text-base">
                        ₹{item.price * item.quantity}
                      </p>

                    </div>

                  ))}

                </div>


                {/* ================= ORDER FOOTER ================= */}

                <div className="border-t border-white/5 p-5 sm:px-6">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    {/* Summary */}

                    <div>

                      <p className="text-xs text-white/30">
                        {order.itemCount}{" "}
                        {order.itemCount === 1 ? "item" : "items"}
                      </p>

                      <div className="mt-1 flex items-center gap-2">

                        <span className="text-sm text-white/40">
                          Total
                        </span>

                        <span className="text-xl font-black text-[#ff5a00]">
                          ₹{order.total}
                        </span>

                      </div>

                    </div>


                    {/* Actions */}

                    <div className="flex w-full gap-2 sm:w-auto">

                      {order.status === "Preparing" && (

                        <button
                          type="button"
                          onClick={() =>
                            handleCancelOrder(order.id)
                          }
                          className="flex-1 rounded-xl border border-red-500/20 px-4 py-2.5 text-xs font-medium text-red-400 transition hover:bg-red-500/10 sm:flex-none"
                        >
                          Cancel Order
                        </button>

                      )}


                      <button
                        type="button"
                        className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-white/10 bg-[#181818] px-4 py-2.5 text-xs font-medium text-white/60 transition hover:border-[#ff5a00]/40 hover:text-white sm:flex-none"
                      >
                        View Details
                        <FiChevronRight size={14} />
                      </button>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </main>

    </div>
  );
};

export default OrderPage;