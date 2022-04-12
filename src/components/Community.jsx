import React from "react";

const Community = () => {
  return (
    <div id="community" className="w-full">
      <div className="container w-full h-full bg-[#0c0202]/90 flex flex-col justify-center">
        <div className="mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-bold my-6">
            Join Our DeFi Community
          </h1>
          <form action="" className="my-4">
            <div className="py-2">
              <input
                type="text"
                className="py-1 px-3 mr-3 rounded-md text-black"
                placeholder="Email .."
              />
              <button className="btn my-2">Sign Up</button>
            </div>
            <div>
              <input type="checkbox" />
              <span>
                &nbsp; Yes, I agree to receive email communications from DeFi.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Community;
