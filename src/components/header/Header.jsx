import React, {useEffect} from "react";
import "./Header";
import "./Header.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])

  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>THE WORLD'S LEADING</span>
            <span>CROSS-PLATFORM SECURE</span>
            <span>MESSAGING SYSTEM</span>
          </h1>
          <p className="u-text-small u-text-light">
            SocialX is Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus autem nemo dolorem tempore, odit dolore magnam aut culpa
            debitis voluptatem?
          </p>
          <div className="button-cta">
            <button className="btn btn-white">Get Started</button>
            <button className="btn btn-org">How it Works</button>
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
}

export default Header;
