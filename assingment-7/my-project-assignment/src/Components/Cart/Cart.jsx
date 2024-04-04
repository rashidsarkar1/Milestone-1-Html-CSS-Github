const Cart = ({ seletedData, creditOnCart, totalPriceOnCart }) => {
  return (
    <div>
      <div className=" bg-[#f3f3f3]  w-[350px] p-5 rounded-xl">
        <h3 className="text-xl font-bold  text-[#2F80ED]">
          Credit Hour Remaining {20 - creditOnCart} hr
        </h3>
        <hr className="w-11/12 my-3" />

        <h2 className="mb-3 text-xl font-bold">Course Name</h2>
        <ul className="list-decimal">
          {seletedData.map((item, idx) => (
            <li
              key={idx}
              className="relative left-[19px] text-base text-[#1c1b1b99]"
            >
              {item.title}
            </li>
          ))}
        </ul>
        <hr className="w-11/12 my-3" />
        <p className="text-[#1c1b1bcc] text-base font-medium">
          Total Credit Hour : {creditOnCart}
        </p>
        <hr className="w-11/12 my-3" />
        <p className="text-[#1c1b1bcc] text-base font-semibold">
          Total Price : {totalPriceOnCart} USD
        </p>
      </div>
    </div>
  );
};

export default Cart;
