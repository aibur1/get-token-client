import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "https://i.ibb.co/dQYCnxc/Chart-fill.png", to:"home" },
    { title: "Mail", src: "https://i.ibb.co/jHTpQkr/Chart.png", to:'mail' },
    { title: "Experiences", src: "https://i.ibb.co/jHTpQkr/Chart.png", to:'experience' },
    { title: "Home", src: "https://i.ibb.co/P6JVd5k/User.png", gap: true, to:'' },
  ];
    return (
        <div>
            <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="https://i.ibb.co/ThpS7tH/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://i.ibb.co/RCk6YDy/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink
              to={Menu.to}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`${Menu.src}`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </NavLink>
          ))}
        </ul>
      </div>
        </div>
    );
};

export default Sidebar;