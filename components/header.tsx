"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative bg-white/20 backdrop-blur-md py-4 px-5 z-30">
      <nav className="flex justify-end">
        <ul className="flex flex-row text-black gap-10 font-semibold">
          <li>Home</li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2">
                Registration & Venue <ChevronDownIcon size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfgsTkZdkYDaeCYwdCK5K9AdCV_hiHKkL2Gjv7fkqRWWACtdA/viewform"
                    target="_blank"
                  >
                    Registration Link
                  </a>
                </li>
                <li>
                  <Link href="/venue" target="_blank">
                    Venue
                  </Link>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
