/** @format */

import React from "react";

const LeftNavMenuItem = ({ text, icon, isSelected, action }) => {
  return (
    <div
      className={` text-white text-sm cursor-pointer h-7 flex items-center px-3 rounded-lg mb-[1px] hover:bg-white/[0.15]  ${isSelected}`}
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
