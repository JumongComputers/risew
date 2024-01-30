import Link from "next/link";
import React from "react";
import InfoBox from "../SubAdmin/InfoBox";

interface OverviewProps {
  overviews: any;
}

const Overview: React.FC<OverviewProps> = ({ overviews }) => {
  return (
    <div className="w-full px-4 py-6">
      <h3 className="text-[#19202C] mb-4 font-bold text-5xl">Overview</h3>
      <div className="flex flex-col lg:flex-row  gap-5">
        <InfoBox title={"Total Number Of Bookings"} count={overviews?.[0]?.total} />
        <InfoBox title={"Completed Bookings"} count={overviews?.[0]?.completed} />
        <InfoBox title={"Pending Bookings"} count={overviews?.[0]?.pending} />
      </div>
    </div>
  );
};

export default Overview;
