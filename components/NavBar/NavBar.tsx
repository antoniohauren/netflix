"use client";

import { navBarItems } from "@/share/constants";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import { NavBarProps } from ".";
import { AccountMenu } from "../AccountMenu";
import { MobileMenu } from "../MobileMenu";
import { NavBarItem } from "../NavBarItem";

const TOP_OFFSET = 66;

export function NavBar({}: NavBarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const { image } = useUserStore();

  function toggleMobileMenu() {
    setShowMobileMenu((value) => !value);
  }

  function toggleAccountMenu() {
    setShowAccountMenu((value) => !value);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <div className="h-4 w-20 lg:w-24 lg:h-6 relative">
          <Image
            src="/images/logo.png"
            fill
            className="object-contain"
            alt={`navbar logo`}
          />
        </div>

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {navBarItems.map((item, index) => (
            <NavBarItem key={index} label={item} />
          ))}
        </div>

        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>

          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 overflow-hidden relative">
              <Image
                src={image || "/images/default-blue.png"}
                alt="user profile picture"
                fill={true}
                className="rounded-md"
              />
            </div>

            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />

            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
