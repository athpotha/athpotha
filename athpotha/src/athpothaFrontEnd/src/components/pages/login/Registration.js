import { StyledEngineProvider } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import EnterEmail from "./EnterEmail";
// import { useHistory } from "react-router";
import classes from "./Login.module.css";
// import PasswordEye from "./PasswordEye";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import EmailSent from "./EmailSent";
import UserTypeSelector from "./UserTypeSelector";
import Carousel from "./Carousel";
import EnterEmail from "./EnterEmail";
import UniversityRegistrationForm from "./UniversityRegistrationForm";

function Registration() {
  const main = document.getElementsByClassName(classes.mainDiv);
  const [toggleClicked, setToggleBtn] = useState(false);
  const isEmailSent = useSelector((state) => state.registration.isEmailSent);
  const selectedSignupButton = useSelector(
    (state) => state.signupButton.selectedSignupButton
  );

  if (toggleClicked === true) {
    main[0].classList.toggle(classes["sign-up-mode"]);
    setToggleBtn(false);
  }

  return (
    <StyledEngineProvider injectFirst>
      <main className={classes.mainDiv}>
        <div className={classes.box}>
          <div className={classes["inner-box"]}>
            <div className={classes["forms-wrap"]}>
              {isEmailSent ? (
                <EmailSent
                  className="sign-in-form"
                  onClick={() => setToggleBtn(true)}
                />
              ) : selectedSignupButton === "" ? (
                <UserTypeSelector
                  className="sign-in-form"
                  onClick={() => setToggleBtn(true)}
                />
              ) : selectedSignupButton === "university" ? (
                <UniversityRegistrationForm
                  className="sign-in-form"
                  onClick={() => setToggleBtn(true)}
                />
              ) : (
                <SignUpForm
                  className="sign-in-form"
                  onClick={() => setToggleBtn(true)}
                />
              )}

              <SignInForm
                className="sign-up-form"
                onClick={() => setToggleBtn(true)}
              />
            </div>

            <Carousel />
          </div>
        </div>
      </main>
    </StyledEngineProvider>
  );
}

export default Registration;
