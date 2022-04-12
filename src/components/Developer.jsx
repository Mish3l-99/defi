import React from "react";
import devImg from "../assets/terminal.png";

const Developer = () => {
  return (
    <div id="developers" className="w-full py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold md:text-4xl my-4 py-2 text-white">
              Superpowers of DeFi Developers
            </h1>
            <p className="dev-p text-slate-400">
              Checkout the <a href="/">Documentation</a>, the
              <a href="/"> quick start</a> or the guide below to integrate your
              project with thousands of tokens and billions in liquidity.
            </p>
          </div>
          <div className="mt-8">
            <img
              src={devImg}
              alt="/"
              className="h-[300px] object-contain shadow-md shadow-[#e46748] rounded mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
