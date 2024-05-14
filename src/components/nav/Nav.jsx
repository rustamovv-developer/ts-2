import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href={"/"} className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href={"/shop"} className="nav__link">
                Shop
              </Link>
            </li>
            <li className="nav__item">
              <Link href={"/blog"} className="nav__link">
                Blog
              </Link>
            </li>
          </ul>
          <Image src={logo} alt="logo" className="nav__img" />
          <ul className="nav__list">
            <li className="nav__item">
              <Link href={"/about"} className="nav__link">
                About Us
              </Link>
            </li>
            <div className="nav__box">
              <input
                placeholder="Search Product"
                type="text"
                className="nav__input"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
