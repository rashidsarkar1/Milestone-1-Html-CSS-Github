import React from "react";

import { LuDollarSign } from "react-icons/Lu";
import { GoBook } from "react-icons/Go";

const SingleCard = ({ catagoryData, handleCorseName, handleCredit }) => {
  const { title, price, credit, description, image_url } = catagoryData;
  // console.log(image_url);

  return (
    <div>
      <div className="bg-[#f3f3f3] p-4 h-[470px] rounded-xl mb-3 relative">
        <div className="mx-auto">
          <div className="mx-auto">
            <div className=" w-[270px]">
              <img
                className="rounded-xl w-[280px] h-[144px] relative"
                src={image_url}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold my-4">{title}</h2>
              <p className="text-sm mb-3 text-[#1c1b1b99]">{description}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mb-3 absolute bottom-[93px] ">
          <div className="icons flex">
            <LuDollarSign className="text-2xl mr-2" />
            <h3>Price : {price}</h3>
          </div>
          <div className="creadit flex">
            <GoBook className="text-2xl mr-2"></GoBook>
            <h3>Credit : {credit}hr</h3>
          </div>
        </div>
        <button
          onClick={() => {
            handleCorseName(catagoryData);
          }}
          className="btn btn-info w-[275px] text-white absolute bottom-4"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
