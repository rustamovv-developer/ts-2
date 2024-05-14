import React, { memo } from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import img1 from "@/assets/images/footer-1.png";
import img2 from "@/assets/images/footer-2.png";
import img3 from "@/assets/images/footer-3.png";
import img4 from "@/assets/images/footer-4.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__left">
            <Image src={logo} alt="logo" className="footer__img" />
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer__card">
            <h2 className="footer__title">Contact us</h2>
            <p className="footer__text">
              E: info@example.com <br /> P: +94 7670000000 <br /> A: 123
              Hospital rd, <br />
              Kalubowila, Dehiwela
            </p>
          </div>
          <div className="footer__card">
            <h2 className="footer__title">Useful links</h2>
            <p className="footer__text">Shop All</p>
            <p className="footer__text">Tempered Glass</p>
            <p className="footer__text">Back-cover</p>
            <p className="footer__text">About Us</p>
          </div>
          <div className="footer__right">
            <div className="footer__box">
              <Image src={img1} alt="logo" className="footer__icon" />
              <p className="footer__text">Whatsapp</p>
            </div>
            <div className="footer__box">
              <Image src={img2} alt="logo" className="footer__icon" />
              <p className="footer__text">Facebook</p>
            </div>
            <div className="footer__box">
              <Image src={img3} alt="logo" className="footer__icon" />
              <p className="footer__text">Instargram</p>
            </div>
            <div className="footer__box">
              <Image src={img4} alt="logo" className="footer__icon" />
              <p className="footer__text">Tik Tok</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
