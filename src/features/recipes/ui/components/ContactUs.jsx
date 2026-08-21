import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= HEADER ================= */}




      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden">

          <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#ff5a00]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-14 text-center sm:px-6 sm:pb-16 sm:pt-20">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff5a00]/20 bg-[#ff5a00]/5 px-4 py-2 text-xs font-medium text-[#ff5a00]">
              <FiMail size={13} />
              We'd love to hear from you
            </span>

            <h1 className="mt-6 text-4xl font-black sm:text-5xl">
              Let's
              <span className="text-[#ff5a00]">
                {" "}Talk.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              Have a question, suggestion or just want to say hello?
              Send us a message and we'll get back to you.
            </p>

          </div>

        </section>


        {/* ================= CONTACT CONTENT ================= */}

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">

          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

            {/* ================= CONTACT INFO ================= */}

            <div className="space-y-4">

              {/* Email */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#ff5a00]/30">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                    <FiMail size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-white/30">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      hello@sahirestaurant.com
                    </p>

                    <p className="mt-1 text-xs text-white/25">
                      We usually reply within 24 hours.
                    </p>
                  </div>

                </div>

              </div>


              {/* Phone */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#ff5a00]/30">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                    <FiPhone size={19} />
                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      +91 98765 43210
                    </p>

                    <p className="mt-1 text-xs text-white/25">
                      Mon – Sun, 10:00 AM – 10:00 PM
                    </p>

                  </div>

                </div>

              </div>


              {/* Address */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#ff5a00]/30">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                    <FiMapPin size={19} />
                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      123 Food Street
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/25">
                      Your City, Gujarat
                      <br />
                      India – 395001
                    </p>

                  </div>

                </div>

              </div>


              {/* Opening Hours */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                    <FiClock size={19} />
                  </div>

                  <div className="flex-1">

                    <p className="text-xs text-white/30">
                      Opening Hours
                    </p>

                    <div className="mt-2 space-y-2">

                      <div className="flex justify-between text-xs">
                        <span className="text-white/40">
                          Monday – Friday
                        </span>

                        <span className="text-white/70">
                          10 AM – 10 PM
                        </span>
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="text-white/40">
                          Saturday – Sunday
                        </span>

                        <span className="text-white/70">
                          9 AM – 11 PM
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Social */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">

                <p className="text-xs text-white/30">
                  Follow Us
                </p>

                <div className="mt-4 flex gap-2">

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#181818] text-white/40 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
                  >
                    <FiInstagram size={17} />
                  </a>

                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#181818] text-white/40 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
                  >
                    <FiTwitter size={17} />
                  </a>

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#181818] text-white/40 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
                  >
                    <FiFacebook size={17} />
                  </a>

                </div>

              </div>

            </div>


            {/* ================= CONTACT FORM ================= */}

            <div className="rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-7">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
                  Send a Message
                </p>

                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Fill out the form and tell us what's on your mind.
                </p>

              </div>


              <form className="mt-7 space-y-5">

                {/* Name + Email */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-white/50"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#181818] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#ff5a00]/60"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-white/50"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#181818] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#ff5a00]/60"
                    />

                  </div>

                </div>


                {/* Subject */}

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium text-white/50"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What is this about?"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#181818] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-[#ff5a00]/60"
                  />

                </div>


                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-white/50"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition focus:border-[#ff5a00]/60"
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#ff5a00] text-sm font-bold text-black transition hover:bg-orange-400 active:scale-[0.99]"
                >
                  Send Message
                  <FiSend size={16} />
                </button>

                <p className="text-center text-[11px] text-white/20">
                  We'll never share your information with third parties.
                </p>

              </form>

            </div>

          </div>

        </section>


        {/* ================= MAP / LOCATION ================= */}

        <section className="border-t border-white/5 bg-[#0d0d0d]">

          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">

            <div className="grid items-center gap-8 lg:grid-cols-2">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
                  Find Us
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Come say hello.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                  Whether you're here for a quick bite or a relaxed
                  meal with friends, we'd love to have you.
                </p>

                <div className="mt-6 flex items-start gap-3">

                  <FiMapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#ff5a00]"
                  />

                  <p className="text-sm leading-6 text-white/60">
                    123 Food Street,
                    <br />
                    Your City, Gujarat – 395001
                  </p>

                </div>

              </div>


              {/* Map Placeholder */}

              <div className="flex h-64 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#111111] sm:h-72">

                <div className="text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a00]/10 text-[#ff5a00]">
                    <FiMapPin size={24} />
                  </div>

                  <p className="mt-4 text-sm font-semibold">
                    Sahi Restaurant
                  </p>

                  <p className="mt-1 text-xs text-white/30">
                    Your City, Gujarat
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default ContactUs;