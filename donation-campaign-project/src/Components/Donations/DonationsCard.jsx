import { useNavigate } from "react-router-dom";

function DonationsCard({ donationsData }) {
  const { picture, card_bg, category, category_bg, id, title, text_button_bg } =
    donationsData;
  // console.log(card_bg);
  const cardStyle = {
    backgroundColor: card_bg,
  };
  const textStyle = {
    backgroundColor: category_bg,
    color: text_button_bg,
  };
  const titleStyle = {
    color: text_button_bg,
  };
  const goTo = useNavigate();
  const handleDetails = () => {
    goTo(`/donation-details/${id}`);
  };
  return (
    <>
      <div
        onClick={handleDetails}
        style={cardStyle}
        className={` shadow-xl card w-auto cursor-pointer  `}
      >
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className={`card-body inline-block ]`}>
          <h2
            style={textStyle}
            className="inline-block px-4 py-1 text-base rounded-lg card-title "
          >
            {category}
          </h2>
          <p style={titleStyle} className="mt-2 text-xl font-semibold">
            {title}
          </p>
        </div>
      </div>
    </>
  );
}

export default DonationsCard;
