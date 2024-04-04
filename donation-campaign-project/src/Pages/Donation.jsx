import { useEffect, useState } from "react";
import MyDonationCard from "../Components/Donations/MyDonationCard";

function Donation() {
  const [isShow, setIsShow] = useState(false);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donations"));
    if (donatedItems) {
      setDonations(donatedItems);
    }
  }, []);

  console.log(donations);

  const handleShowAll = () => {
    setIsShow(true);
  };

  return (
    <div>
      <div className="grid gap-4 mt-3 lg:grid-cols-2">
        {isShow
          ? donations.map((item) => (
              <MyDonationCard
                donationData={item}
                key={item.id}
              ></MyDonationCard>
            ))
          : donations
              .slice(0, 4)
              .map((item) => (
                <MyDonationCard
                  donationData={item}
                  key={item.id}
                ></MyDonationCard>
              ))}
      </div>
      {!isShow && donations.length > 4 && (
        <button
          onClick={handleShowAll}
          className="text-white btn w-[110px] hover:bg-[#009444]  block mx-auto my-7 overflow-hidden outline-none border-0 bg-[#009444]"
        >
          See All
        </button>
      )}
    </div>
  );
}

export default Donation;
