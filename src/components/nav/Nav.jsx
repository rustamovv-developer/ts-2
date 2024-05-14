import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <h2>nav</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
};

export default Nav;
