"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaHouse, FaMessage } from "react-icons/fa6";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { lable: "Home", icon: <FaHouse />, href: "/" },
    {
      lable: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/susan-yan-7608601ab/",
    },
    {
      lable: "Github",
      icon: <FaGithub />,
      href: "https://github.com/Shuang09",
    },
    { lable: "Contact",
      icon: <FaMessage />,
      href: "/WIPpage" },
  ];

  return (
    <nav className='flex m-4 items-center h-14 mb-5 mt-10 justify-end'>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
                'size-20': true,
              "text-zinc-100": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zince-800 transition-colors": true,
            })}
          >
            {link.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
