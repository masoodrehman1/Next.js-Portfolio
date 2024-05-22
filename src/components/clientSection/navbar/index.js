"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];
function CreateMenus({ getMenuItems, activeLink, setActiveLink }) {
  return getMenuItems.map((items) => (
    <LinkScroll
      activeClass="active"
      to={items.id}
      smooth={true}
      duration={1000}
      spy={true}
      onSetActive={() => setActiveLink(items.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
        activeLink === items.id
          ? "text-green-main shadow-green-main animation-active"
          : "text-[#000]} font-bold hover:text-green-main"
      }`}
    >
      {items.id}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-green-main bg-green-main">
                <span className="text-[#fff] text-[25px] font-bold">P</span>
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="bg-white col-start-10 col-end-12 flex justify-center items-center">
            <button className="py-3 font-semibold hover:shadow-green-main rounded-lg text-xl tracking-widest transition-all outline-none border-[2px] border-green-main bg-[#fff] text-black">
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden left-0 right-0 bottom-0 z-20 px-4 sm:px-8 shadow-lg">
        <div className="bg-white sm:px-3">
          <ul className="overflow-x-auto w-full flex justify-between items-center text-black">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
