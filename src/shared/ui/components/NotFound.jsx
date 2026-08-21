import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiHome,
  FiSearch,
} from "react-icons/fi";

function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-4 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a00]/10 blur-[130px]" />

      {/* Decorative Circles */}

      <div className="absolute left-[8%] top-[15%] h-20 w-20 rounded-full border border-[#ff5a00]/10" />

      <div className="absolute bottom-[15%] right-[8%] h-28 w-28 rounded-full border border-white/5" />

      {/* Main Content */}

      <main className="relative w-full max-w-xl text-center">

        {/* Logo */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[#ff5a00]/20 bg-[#111111] shadow-[0_0_50px_rgba(255,90,0,0.08)]">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a00] text-3xl shadow-lg shadow-[#ff5a00]/20">
            🍴
          </div>

        </div>


        {/* 404 */}

        <div className="mt-8">

          <p className="text-8xl font-black leading-none tracking-tighter text-white sm:text-9xl">
            4<span className="text-[#ff5a00]">0</span>4
          </p>

        </div>


        {/* Message */}

        <div className="mt-7">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff5a00]">
            Oops! Wrong Table
          </p>

          <h1 className="mt-3 text-2xl font-black sm:text-3xl">
            This page isn't on our menu.
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/35">
            Looks like you've wandered somewhere we don't serve.
            Don't worry, let's get you back to something delicious.
          </p>

        </div>


        {/* Actions */}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/home"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#ff5a00] px-6 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
          >
            <FiHome size={16} />
            Back to Home
          </Link>


          <Link
            to="/home/menu"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141414] px-6 text-sm font-medium text-white/60 transition hover:border-[#ff5a00]/40 hover:text-white active:scale-95"
          >
            <FiSearch size={16} />
            Explore Menu
          </Link>

        </div>


        {/* Bottom Brand */}

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-white/20">

          <span>🍴</span>

          <span>
            Sahi Restaurant
          </span>

          <span className="h-1 w-1 rounded-full bg-white/15" />

          <span>
            Taste that feels right.
          </span>

        </div>

      </main>

    </div>
  );
}

export default NotFound;