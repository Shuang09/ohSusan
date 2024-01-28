import { usePathname } from 'next/navigation'
import React from 'react'
import { FaLinkedinIn, FaGithub, FaHouse, FaMessage, } from "react-icons/fa6";

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        {lable: 'Home', icon: <FaHouse />, href: '/' },
        {lable: 'LinkedIn', icon: <FaLinkedinIn/>, href: 'https://www.linkedin.com/in/susan-yan-7608601ab/'},
        {lable: 'Github', icon: <FaGithub />, href: 'https://github.com/Shuang09'},
        {lable: 'Contact', icon: <FaMessage />, href: '#'}
    ]

  return (
    <nav>
        <ul className='flex'>
            {links.map(link =>

                <link
                key={link.href}
                href={link.href}
                >{link.icon}
                </link>)}

        </ul>
    </nav>
  )
}

export default NavBar