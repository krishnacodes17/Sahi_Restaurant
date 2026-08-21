import React from "react";

function PageLoader() {
  return (
    <div className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-[#080808] px-4">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a00]/10 blur-[100px]" />

      {/* Loader Content */}

      <div className="relative flex flex-col items-center">

        {/* Logo */}

        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-[#ff5a00]/20 bg-[#111111] shadow-[0_0_40px_rgba(255,90,0,0.08)]">

          {/* Spinning Border */}

          <div className="absolute inset-0 animate-spin rounded-3xl border-2 border-transparent border-t-[#ff5a00]" />

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff5a00] text-2xl shadow-lg shadow-[#ff5a00]/20">
            🍴
          </div>

        </div>


        {/* Brand */}

        <h2 className="mt-6 text-lg font-bold tracking-tight">
          Sahi Restaurant
        </h2>

        <p className="mt-1 text-xs text-white/30">
          Taste that feels right.
        </p>


        {/* Loading Dots */}

        <div className="mt-6 flex items-center gap-1.5">

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#ff5a00]" />

          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#ff5a00]"
            style={{ animationDelay: "150ms" }}
          />

          <span
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#ff5a00]"
            style={{ animationDelay: "300ms" }}
          />

        </div>


        <p className="mt-3 text-xs text-white/25">
          Preparing something delicious...
        </p>

      </div>

    </div>
  );
}

export default PageLoader;