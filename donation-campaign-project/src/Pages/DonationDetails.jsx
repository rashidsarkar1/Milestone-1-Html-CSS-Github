import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Layout/MainLayaout";
import useFindDataById from "../Hooks/UseFinddata";
import swal from "sweetalert";

function DonationDetails() {
  const contestApiValue = useContext(GlobalContext);
  const { id } = useParams();
  const foundDonationData = useFindDataById(id, contestApiValue);

  console.log(foundDonationData);
  if (!foundDonationData) {
    return null;
  }
  const { picture, description, title, text_button_bg, price } =
    foundDonationData;

  const btnStyle = {
    backgroundColor: text_button_bg,
  };
  const handleDonate = () => {
    const donatedItems = [];
    const storedDonations = JSON.parse(localStorage.getItem("donations"));

    // pay nai kiso tokon
    if (!storedDonations) {
      donatedItems.push(foundDonationData);
      localStorage.setItem("donations", JSON.stringify(donatedItems));

      swal("Success", "Donation Added!", "success");
    } else {
      const isExits = storedDonations.find((item) => item.id == id);
      if (!isExits) {
        donatedItems.push(...storedDonations, foundDonationData);
        localStorage.setItem("donations", JSON.stringify(donatedItems));
        swal("Success", "Donation Added!", "success");
      } else {
        swal("Warning", "Donation is already added!", "warning");
      }
    }
  };

  return (
    <>
      <div className="test2">
        <div
          className="h-[500px] flex justify-center relative  p-12 object-cover overflow-hidden text-center bg-center  bg-no-repeat bg-cover rounded-lg "
          style={{ backgroundImage: `url('${picture}')` }}
        >
          <div
            className="absolute flex items-center bottom-0 left-0 right-0 w-full h-[20%] overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <button
              onClick={handleDonate}
              style={btnStyle}
              className={`btn overflow-hidden outline-none text-white border-0 lg:ml-8`}
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg text-justify text-[#0b0b0bb3] mt-6">
          {description}
        </p>
      </div>
    </>
  );
}

export default DonationDetails;
