import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter } from "react-icons/fi";
import { RiMailOpenLine, RiLinkedinLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="social-icons">
        <Link href="https://github.com/mrinnnmoy">
            <FiGithub  size={30}/>
        </Link>
        <Link href="http://twitter.com/mrinnnmoy">
            <FiTwitter size={30}/>
        </Link>
        <Link href="mailto:mrinmoy202000@gmail.com">    
            <RiMailOpenLine size={30}/>
        </Link>
        <Link href="https://www.linkedin.com/in/mrinnnmoy/">
            <RiLinkedinLine size={30} />
        </Link>
    </div>
  )
};

export default Navbar;