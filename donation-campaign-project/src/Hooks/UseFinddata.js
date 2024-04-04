import { useEffect, useState } from "react";

function useFindDataById(id, contestApiArr) {
  const [foundData, setFoundData] = useState({});

  useEffect(() => {
    const foundItem = contestApiArr?.find(
      (donation) => donation.id === parseFloat(id)
    );

    setFoundData(foundItem);
  }, [id, contestApiArr]);

  return foundData;
}

export default useFindDataById;
