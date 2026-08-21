import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiArrowLeft, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

import { useStoreHook } from "../../hook/useStoreHook";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../state/CartSlice";

const StorePage = () => {
  const dispatch = useDispatch();
  let { cartItems, handlePlaceOrder, getPrice, subtotal, deliveryFee, total } =
    useStoreHook();

  return (
    <div>
      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
        {/* Title */}
         <Link
          to={-1}
          className="hidden sm:inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-[#ff5a00] mb-5"
        >
          <FiArrowLeft size={17} />
          Back to Home
        </Link>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
              Your selection
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-4xl">Your Cart</h1>

            <p className="mt-2 text-sm text-white/35">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={() => dispatch(clearCart())}
              className="self-start text-xs text-white/35 transition hover:text-red-400 sm:self-auto"
            >
              Clear cart
            </button>
          )}
        </div>

        {/* ================= EMPTY CART ================= */}

        {cartItems.length === 0 ? (
          <div className="mt-10 flex min-h-[450px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#111111] px-5 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ff5a00]/10 text-5xl">
              🛒
            </div>

            <h2 className="mt-6 text-2xl font-bold">Your cart is empty</h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
              Looks like you haven't added anything delicious yet. Explore our
              menu and find your next favourite meal.
            </p>

            <Link
              to="/home/menu"
              className="mt-7 rounded-xl bg-[#ff5a00] px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
            >
              Explore Our Menu
            </Link>
          </div>
        ) : (
          /* ================= CART CONTENT ================= */

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            {/* ================= CART ITEMS ================= */}

            <section className="space-y-4">
              {cartItems.map((item) => {
                const price = getPrice(item.id);
                const itemTotal = price * item.quantity;

                return (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-[#111111] p-3 sm:p-4"
                  >
                    <div className="flex gap-3 sm:gap-5">
                      {/* Image */}

                      <Link
                        to={`/home/recipe/${item.id}`}
                        className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#181818] sm:h-32 sm:w-32"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-300 hover:scale-105"
                        />
                      </Link>

                      {/* Content */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <Link
                              to={`/home/recipe/${item.id}`}
                              className="line-clamp-2 text-sm font-semibold text-white transition hover:text-[#ff5a00] sm:text-base"
                            >
                              {item.name}
                            </Link>

                            <p className="mt-1 text-xs text-white/35">
                              {item.cuisine}
                            </p>

                            <div className="mt-2 flex items-center gap-1 text-xs">
                              <span className="text-[#ffc107]">★</span>

                              <span className="text-white/50">
                                {item.rating}
                              </span>
                            </div>
                          </div>

                          {/* Delete */}

                          <button
                            type="button"
                            onClick={() => dispatch(removeFromCart(item.id))}
                            aria-label={`Remove ${item.name}`}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white/30 transition hover:bg-red-500/10 hover:text-red-400"
                          >
                            <FiTrash2 size={17} />
                          </button>
                        </div>

                        {/* Bottom */}

                        <div className="mt-4 flex items-center justify-between gap-3">
                          {/* Quantity */}

                          <div className="flex items-center rounded-xl border border-white/10 bg-[#0b0b0b]">
                            <button
                              type="button"
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                              className="flex h-9 w-9 items-center justify-center text-white/50 transition hover:text-white"
                            >
                              <FiMinus size={14} />
                            </button>

                            <span className="w-7 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                              className="flex h-9 w-9 items-center justify-center text-white/50 transition hover:text-[#ff5a00]"
                            >
                              <FiPlus size={14} />
                            </button>
                          </div>

                          {/* Price */}

                          <div className="text-right">
                            <p className="text-xs text-white/30">
                              ₹{price} × {item.quantity}
                            </p>

                            <p className="mt-0.5 text-base font-bold text-[#ff5a00]">
                              ₹{itemTotal}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            {/* ================= ORDER SUMMARY ================= */}

            <aside className="h-fit lg:sticky lg:top-6">
              <div className="rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-6">
                <h2 className="text-lg font-bold">Order Summary</h2>

                {/* Subtotal */}

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">Subtotal</span>

                    <span className="font-medium">₹{subtotal}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">Delivery Fee</span>

                    <span className="font-medium">₹{deliveryFee}</span>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Total</span>

                      <span className="text-xl font-black text-[#ff5a00]">
                        ₹{total}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout */}

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="mt-6 h-12 w-full rounded-xl bg-[#ff5a00] text-sm font-bold text-black transition hover:bg-orange-400 active:scale-[0.99]"
                >
                  Proceed to Checkout
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-white/25">
                  Taxes and final delivery charges may be calculated at
                  checkout.
                </p>
              </div>

              {/* Secure Order */}

              <div className="mt-4 rounded-2xl border border-white/5 bg-[#111111] p-4 text-center">
                <p className="text-xs text-white/35">
                  🔒 Secure & reliable ordering
                </p>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default StorePage;
