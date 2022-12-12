import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter } from "react-icons/fi";
import { RiMailOpenLine, RiLinkedinLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="social-icons">
        <Link href="https://github.com/mrinnnmoy">
            <FiGithub  size={40} className="icon-1"/>
        </Link>
        <Link href="http://twitter.com/mrinnnmoy" className="icon-2">
            <FiTwitter size={40}/>
        </Link>
        <Link href="mailto:mrinmoy202000@gmail.com" className="icon-3">    
            <RiMailOpenLine size={40}/>
        </Link>
        <Link href="https://www.linkedin.com/in/mrinnnmoy/" className="icon-4">
            <RiLinkedinLine size={40} />
        </Link>
    </div>
  )
};

export default Navbar;