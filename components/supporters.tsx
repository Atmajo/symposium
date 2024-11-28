import React from "react";
import CloudLogo from "./cloud-logo";

const data = [
  {
    id: 1,
    url: "/iem.png",
  },
  {
    id: 4,
    url: "/ips.png",
  },
  {
    id: 5,
    url: "/rsc.webp",
  },
  {
    id: 6,
    url: "/src.png",
  },
  {
    id: 3,
    url: "/e5.jpeg",
  },
  {
    id: 2,
    url: "/uem.png",
  },
];

const Supporters = () => {
  return (
    <div className="pb-5">
      <CloudLogo data={data} />
    </div>
  );
};

export default Supporters;
