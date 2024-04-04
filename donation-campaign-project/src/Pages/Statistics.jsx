import React, { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { GlobalContext } from "../Layout/MainLayaout";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

function Statistics() {
  const [totalDonation, setTotalDonation] = useState(0);
  const [myDonation, setMyDonation] = useState(0);
  const [donations, setDonations] = useState([]);
  const contestApiValue = useContext(GlobalContext);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donations"));
    if (donatedItems) {
      setDonations(donatedItems);
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(contestApiValue)) {
      const totalDonation = contestApiValue.length;
      setTotalDonation(totalDonation);
      const myDonation = donations.length;
      setMyDonation(myDonation);
    }
  }, [contestApiValue, donations]);

  const data = [
    { name: "totalDonation", value: totalDonation - myDonation },
    { name: "myDonation", value: myDonation },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="container px-4 mx-auto sm:px-6 md:px-8">
          <div className="max-w-screen-md mx-auto">
            <PieChart width={300} height={300} className="mx-auto">
              <Pie
                data={data}
                cx={150}
                cy={150}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                innerRadius={0}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-2 gap-3 p-3 md:flex lg:flex lg:gap-16">
        <div className="flex items-center gap-4">
          <p>Your Donation</p>
          <div className="w-[100px] h-[12px] rounded-xl bg-[#00C49F]"></div>
        </div>
        <div className="flex items-center gap-4 ">
          <p>Total Donation</p>
          <div className="w-[100px] h-[12px] rounded-xl bg-[#FF444A]"></div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
