import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    logo: "/iem.png",
  },
  {
    id: 4,
    logo: "/ips.png",
  },
  {
    id: 5,
    logo: "/rsc.webp",
  },
  {
    id: 6,
    logo: "/src.png",
  },
  {
    id: 3,
    logo: "/e5.jpeg",
  },
  {
    id: 2,
    logo: "/uem.png",
  },
];

const Header = () => {
  return (
    <header className="relative py-4 z-30">
      <nav className="flex justify-between items-center">
        {data.map(({ id, logo }) => (
          <Link href={"/"} key={id}>
            <img src={logo} alt={logo} className="h-20 w-max" />
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
