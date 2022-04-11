import React from "react";
import { FiAperture, FiCodesandbox, FiSlack, FiLayers } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full mt-[50px] md:mt-[80px]">
      <div className="container">
        <div className="my-4 text-center">
          <h1 className="my-4 text-2xl md:text-5xl text-white font-bold">
            A Growing Protocol Ecosystem
          </h1>
          <p className="md:text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            accusantium eius error voluptatum id eum illum quae provident
            magnam. Eligendi, velit! Facere, soluta. Eligendi?
          </p>
        </div>
        <div className="px-2 mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border py-6 px-4 rounded hover:bg-[#df4923]/10">
            <div className="my-2">
              <FiAperture className="text-[#df4923]" size={60} />
            </div>
            <h1 className="font-bold text-white my-4">
              Reliable, tamper-proof network
            </h1>
            <p className="my-1 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              molestias aliquam! Delectus eaque reiciendis quaerat qui autem!
              Dolore, ut dolor.
            </p>
          </div>
          <div className="border py-6 px-4 rounded hover:bg-[#df4923]/10">
            <div className="my-2">
              <FiCodesandbox className="text-[#df4923]" size={60} />
            </div>
            <h1 className="font-bold text-white my-4">
              Seamless connection to any API
            </h1>
            <p className="my-1 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              molestias aliquam! Delectus eaque reiciendis quaerat qui autem!
              Dolore, ut dolor.
            </p>
          </div>
          <div className="border py-6 px-4 rounded hover:bg-[#df4923]/10">
            <div className="my-2">
              <FiSlack className="text-[#df4923]" size={60} />
            </div>
            <h1 className="font-bold text-white my-4">
              Proven, ready-made solutions
            </h1>
            <p className="my-1 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              molestias aliquam! Delectus eaque reiciendis quaerat qui autem!
              Dolore, ut dolor.
            </p>
          </div>
          <div className="border py-6 px-4 rounded hover:bg-[#df4923]/10">
            <div className="my-2">
              <FiLayers className="text-[#df4923]" size={50} />
            </div>
            <h1 className="font-bold text-white my-4">
              Secure off-chain Computation
            </h1>
            <p className="my-1 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              molestias aliquam! Delectus eaque reiciendis quaerat qui autem!
              Dolore, ut dolor.
            </p>
          </div>
        </div>
        <div className="my-3 md:mt-12 flex justify-center">
          <button className="btn">Use DeFi.</button>
        </div>
      </div>
    </div>
  );
};

export default About;
