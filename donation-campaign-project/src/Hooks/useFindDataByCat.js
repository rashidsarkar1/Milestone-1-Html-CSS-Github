import { useEffect, useState } from "react";

function useFindDataByCat(category, contestApiArr) {
  const [foundData, setFoundData] = useState({});

  useEffect(() => {
    const foundItem = contestApiArr?.filter(
      (donation) => donation.category === category
    );

    setFoundData(foundItem);
  }, [category, contestApiArr]);

  return foundData;
}

export default useFindDataByCat;
