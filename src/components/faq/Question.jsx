import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Question({ title, answer }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="container question">
      <div onClick={handleClick} className="question-title">
        <h4>{title}</h4>
        <button className="question-icon">
          {!show ? (
            <AiOutlinePlus color="#1f93ff" />
          ) : (
            <AiOutlineMinus color="red" />
          )}
        </button>
      </div>
      <div className="question-answer">
        {show && <p className="u-text-small">{answer}</p>}
      </div>
    </div>
  );
}

export default Question;
