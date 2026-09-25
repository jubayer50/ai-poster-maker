"use client";

import { Button } from "@heroui/react";
import { FiArrowRight } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_35%)]" />

      <div className="relative max-w-330 mx-auto flex min-h-162.5 text-center justify-center items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Small badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <LuSparkles className="text-emerald-400" />
            AI-Powered Political Poster Maker
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Create Professional
            <span className="block bg-linear-to-r from-emerald-400 via-green-300 to-red-400 bg-clip-text text-transparent">
              Political Posters
            </span>
            in Seconds.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Create beautiful Bangla political posters with your photos, custom
            text, and AI-powered design suggestions. Choose a template, add your
            information, and generate your poster instantly.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Button className="border border-emerald-400/30 bg-linear-to-r from-emerald-500 to-green-500 px-5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30">
              <FiArrowRight /> Create Poster
            </Button>

            <Button className="border border-green-500 bg-transparent text-white">
              Explore Templates
            </Button>
          </div>

          {/* Small info */}
          <div className="mt-8 flex gap-3 justify-center flex-wrap text-sm text-slate-500">
            <span>✓ Bangla Support</span>
            <span>✓ AI Layout Suggestions</span>
            <span>✓ High Resolution</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
