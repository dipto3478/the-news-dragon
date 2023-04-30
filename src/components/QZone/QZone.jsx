import React from "react";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-[#F3F3F3] ">
      <h3 className="text-[#403F3F] font-semibold text-xl p-5 ">Q-Zone</h3>
      <div className="flex flex-col ">
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
