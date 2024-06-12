import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex bg-zinc-900 text-white justify-between p-4">
    <span>©2024 – present Raziuddin Shah</span>
    <ul className="flex items-center">
      <li className="ml-10 hover:border-b text-xl">
        <Link href="/Project">Project</Link>
      </li>
      <li className="mx-10 hover:border-b text-xl">
        <Link href="/Contact">Contact</Link>
      </li>
      <li className="mx-10 hover:border-b text-xl">
        <Link href="/Blog">Blog</Link>
      </li>
    </ul>
  </div>
  
  );
};

export default Footer;
