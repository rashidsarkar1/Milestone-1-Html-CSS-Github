import { useContext, useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import { GlobalContext } from "../Layout/MainLayaout";
import DonationsCard from "../Components/Donations/DonationsCard";
import Donation from "./Donation";
import useFindDataByCat from "../Hooks/useFindDataByCat";

function Home() {
  const contestApiValue = useContext(GlobalContext);
  const [categoryName, setCategoryName] = useState();
  const [displayData, setDisplayData] = useState({});
  const sarchedCard = useFindDataByCat(categoryName, contestApiValue);

  useEffect(() => {
    if (Array.isArray(contestApiValue)) {
      setDisplayData(contestApiValue);
      if (sarchedCard?.length > 0) {
        setDisplayData(sarchedCard);
      }
    }
  }, [sarchedCard, contestApiValue]);

  console.log(displayData);
  return (
    <>
      <Banner setCategoryName={setCategoryName}></Banner>

      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
        {Array.isArray(displayData) &&
          displayData?.map((donatData) => (
            <DonationsCard
              key={donatData.id}
              donationsData={donatData}
            ></DonationsCard>
          ))}
      </div>
    </>
  );
}

export default Home;
