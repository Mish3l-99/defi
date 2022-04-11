import React from "react";
import mainVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <video autoPlay loop muted id="video">
        <source src={mainVid} type="video/mp4" />
      </video>
      {/* just an ovrerlay */}
      <div className="absolute bg-black/50 w-full h-screen z-[-1]"></div>

      <div className="h-screen flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-semibold my-3">
          Decentralized
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold my-2">
          <span className="text-[#df4923] bg-black p-2">Trading</span> Protocol
        </h1>
        <p className="text-lg md:text-xl py-2 my-2 px-2 bg-slate-600/30">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          recusandae pariatur perferendis veniam, vitae iusto eos hic quia
          corrupti ab.
        </p>
        <div className="flex justify-center px-2 mt-4">
          <button className="btn mr-2 md:mr-8">Use Defi</button>
          <button className="btn-outline">Documentation</button>
        </div>
      </div>
      <div className="container mt-[-50px] md:mt-[-80px] text-center">
        <h2 className=" text-sm md:text-2xl font-bold">
          Total Volume Secured: $42,345,665,776.67
        </h2>
      </div>
    </div>
  );
};

export default Hero;
