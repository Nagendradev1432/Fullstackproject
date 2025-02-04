import React, { useRef, useState } from "react";
import "./Instructions.css";
import { Checkbox } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Instructions({ closeModal, isModal }) {
  const checkRef = useRef(null);

  const {id} = useParams();

  const navigate = useNavigate();

  const [buttonEnable, setButtonEnable] = useState(false);

  const handleOnChange = (e) => {
    if (checkRef.current.checked) {
      setButtonEnable(!buttonEnable);
    } else {
      setButtonEnable(!buttonEnable);
    }
  };

  const handleButtonClick = () => {
    console.log("naviagtomnh");
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="bg-color">
      <div className="close-button">
        {isModal && (
          <button onClick={closeModal} className="removeicon">
            <ion-icon  name="close-outline"></ion-icon>
          </button>
        )}
      </div>
      <div className="instructions">
        <h1>Quiz Instructions</h1>
        <p>
          Welcome to the quiz! Please read the following instructions carefully
          before you start:
        </p>
        <ol>
          <li>There are 10 multiple-choice questions in this quiz.</li>
          <li>You have 30 minutes to complete the entire quiz.</li>
          <li>Each question has four options, and only one is correct.</li>
          <li>
            Click on the option you think is correct to select your answer.
          </li>
          <li>You can change your answer before submitting the quiz.</li>
          <li>After answering all the questions, click the "Submit" button.</li>
        </ol>
        <p>Good luck, and have fun!</p>
        {!isModal && (
          <>
            <label>
              <input type="checkbox" ref={checkRef} onChange={handleOnChange} />
              I agree to terms and conditions
            </label>
            <button
              className="start-btn"
              onClick={() => handleButtonClick()}
              disabled={!buttonEnable}
            >
              start the exam
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Instructions;
