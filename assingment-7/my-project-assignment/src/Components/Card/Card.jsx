import React, { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Card = ({ catagoryData }) => {
  const [seletedData, setSeletedData] = useState([]);
  const [totalPriceOnCart, setTotalPriceOnCart] = useState(0);
  const [creditOnCart, setCreditOnCart] = useState(0);

  const handleCorseName = (data) => {
    const temData = [...seletedData];
    const newData = seletedData.find((item) => item.title === data.title);
    if (!newData) {
      if (creditOnCart + Number(data.credit) <= 20) {
        let temCredit = creditOnCart;
        temCredit = temCredit + Number(data.credit);
        setCreditOnCart(temCredit);
        temData.push(data);
        setSeletedData(temData);

        let temPrice = totalPriceOnCart;
        temPrice = temPrice + Number(data.price);
        setTotalPriceOnCart(temPrice);
      } else {
        toast.error(
          "Credit limit exceeded. You cannot use more than 20 credits.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
    } else {
      toast.error(
        "This course has already been selected. Please choose another course.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  return (
    <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <div className="container flex gap-2 mx-auto my-3">
        <div className="flex-1 ">
          <div className="grid grid-cols-3 gap-2">
            {catagoryData.map((item, idx) => (
              <SingleCard
                key={idx}
                handleCorseName={handleCorseName}
                catagoryData={item}
              ></SingleCard>
            ))}
          </div>
        </div>

        <Cart
          seletedData={seletedData}
          totalPriceOnCart={totalPriceOnCart}
          creditOnCart={creditOnCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Card;
