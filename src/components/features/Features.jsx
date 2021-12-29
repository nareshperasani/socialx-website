import React,{useEffect} from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { featureList } from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Features() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  },[])
  return (
    <section id="features">
      <div className="container features" data-aos="fade-up">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquam dolorum similique hic tempore esse saepe nihil est.
            Enim et velit cupiditate itaque sequi delectus consequatur sunt
            nobis commodi? Minus, autem.
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
            <img src={phoneFeatures} alt="" />
          </div>
          <div className="features-right">
            {featureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
