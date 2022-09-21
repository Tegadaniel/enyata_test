import React from "react";
import headerImage from "../../../assets/starWarsImage.svg";
import { navLinks } from "./utils/data";
import { useRecoilState } from "recoil";
import { activeNavItemState } from "../../../atoms/ActiveNavBarAtom";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" xl:flex mt-5 xl:mx-8">
          <img src={headerImage} className=" h-20 w-20" alt="starwars" />
        </div>
        <div className="space-y-8 w-full ">
          {navLinks.slice(0, 1).map((link) => {
            return (
              <div className="mt-8 mb-16" key={link.id}>
                <NavItem link={link} key={link.id} />
              </div>
            );
          })}

          {navLinks.slice(1, 4).map((link) => (
            <NavItem link={link} key={link.id} />
          ))}
        </div>
      </div>
    </>
  );
}

function NavItem({ link }) {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
  const handleClicked = (link) => {
    setActiveNav(link.id);
    navigate(link.link);
  };
  return (
    <div
      key={link.id}
      onClick={() => handleClicked(link)}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
      group hover:border-[#0A74DC] rounded-md border-transparent ${
        activeNav === link.id && "border-[#0A74DC] bg-[#0A74DC] p-3"
      } `}
    >
      <img
        className="w-5 h-5 xl:flex md:flex flex"
        src={link.icon}
        alt={link.name}
      />{" "}
      <h1
        className={`text-white group-hover:text-white group-hover:border-[#0A74DC] xl:flex hidden  `}
      >
        {link.name}
      </h1>
    </div>
  );
}
