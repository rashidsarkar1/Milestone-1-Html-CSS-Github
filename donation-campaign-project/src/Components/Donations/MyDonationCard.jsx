function MyDonationCard({ donationData }) {
  const {
    picture,
    card_bg,
    category,
    category_bg,
    id,
    title,
    price,
    text_button_bg,
  } = donationData;
  const titleStyle = {
    color: text_button_bg,
  };
  const cardStyle = {
    backgroundColor: card_bg,
  };
  const textStyle = {
    backgroundColor: category_bg,
    color: text_button_bg,
  };
  const btnStyle = {
    backgroundColor: text_button_bg,
  };

  return (
    <div className="flex items-center justify-center ">
      <div
        style={cardStyle}
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={picture}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h2
            style={textStyle}
            className="inline-block px-4 py-1 text-base rounded-lg card-title "
          >
            {category}
          </h2>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p style={titleStyle} className="mt-2 text-xl font-semibold">
            ${price}
          </p>

          <button
            // onClick={handleDonate}
            style={btnStyle}
            className={` mt-6 h-[40px] w-[130px] rounded-lg  text-white border-0 `}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyDonationCard;
