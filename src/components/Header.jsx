import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import NavMenu from "./NavMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClickToggle() {
    setShowMenu((prev) => !prev);
  }

  return (
    <>
      <header className="flex justify-between items-center sticky top-0 px-4 py-2 bg-[#1A1A1A] z-20">
        <div className="w-20">
          <img className="w-full" src={logo} alt="Logo" />
        </div>

        <div className="hidden lg:block">
          <NavMenu ulStyle="flex gap-6" aColor="white" />
        </div>

        <div className="lg:hidden">
          <button
            className="text-2xl text-white cursor-pointer"
            onClick={handleClickToggle}
          >
            {showMenu ? <FaXmark /> : <FaBars />}{" "}
          </button>
        </div>
      </header>

      {showMenu && (
        <div className="fixed top-28 right-4 w-50 lg:hidden z-20">
          <NavMenu
            navStyle="p-4 rounded-xl bg-white"
            ulStyle="flex flex-col items-center gap-5"
            aColor="black"
          />
        </div>
      )}
    </>
  );
}
