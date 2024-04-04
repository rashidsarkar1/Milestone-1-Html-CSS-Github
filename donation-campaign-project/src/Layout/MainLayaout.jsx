import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

function MainLayaout() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/donations.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <GlobalContext.Provider value={data.donations}>
      <div className="max-w-[1320px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </GlobalContext.Provider>
  );
}

export default MainLayaout;
