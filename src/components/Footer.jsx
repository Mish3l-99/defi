import React from "react";
import { FaDiscord, FaTwitter, FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="w-full py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4">
            <h1 className="font-bold my-2 py-1 text-lg md:text-2xl border-b-2 border-[#df4923]">
              Products
            </h1>
            <div className="mt-4">
              <ul>
                <li>App</li>
                <li>Analytics</li>
                <li>Token Lists</li>
                <li>DeFi.</li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h1 className="font-bold my-2 py-1 text-lg md:text-2xl border-b-2 border-[#df4923]">
              Developers
            </h1>
            <div className="mt-4">
              <ul>
                <li>Documentation</li>
                <li>Github</li>
                <li>Whitepaper</li>
                <li>Bug Bounty</li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h1 className="font-bold my-2 py-1 text-lg md:text-2xl border-b-2 border-[#df4923]">
              Governance
            </h1>
            <div className="mt-4">
              <ul>
                <li>Forum</li>
                <li>Docs.</li>
                <li>Policies</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h1 className="font-bold my-2 py-1 text-lg md:text-2xl border-b-2 border-[#df4923]">
              About
            </h1>
            <div className="mt-4">
              <ul>
                <li>Blog</li>
                <li>Info</li>
                <li>Jobs</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
        {/* community */}
        <div className="mt-8">
          <div className="flex flex-row items-center justify-center">
            <FaDiscord className="text-3xl mx-2 text-[#df4923] cursor-pointer hover:text-slate-300 duration-400" />
            <FaTwitter className="text-3xl mx-2 text-[#df4923] cursor-pointer hover:text-slate-300 duration-400" />
            <FaReddit className="text-3xl mx-2 text-[#df4923] cursor-pointer hover:text-slate-300 duration-400" />
          </div>
          <div className="text-center mt-3">
            <h1>2022. &#169; All Rights Reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
