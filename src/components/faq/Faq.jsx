import React, {useEffect} from "react";
import "./Faq.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from "./Question";
import { questions } from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <section id="faq">
      <div className="container faq" data-aos="fade-up">
        <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQS</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dolorum similique hic tempore esse saepe nihil est. Enim et velit
            cupiditate itaque sequi delectus consequatur sunt nobis commodi?
            Minus, autem.
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
