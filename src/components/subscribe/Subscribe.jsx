import React, {useEffect} from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Subscribe() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  },[])
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Subscribe now!</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
        </form>
        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebook />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
