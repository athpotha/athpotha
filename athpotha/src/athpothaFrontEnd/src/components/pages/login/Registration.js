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

function Registration() {
  const main = document.querySelector(`.${classes.mainDiv}`);
  const [toggleClicked, setToggleBtn] = useState(false);
  const isEmailSent = useSelector((state) => state.registration.isEmailSent);
  const selectedSignupButton = useSelector(
    (state) => state.signupButton.selectedSignupButton
  );
  // us
  if (toggleClicked === true) {
    main.classList.toggle(classes["sign-up-mode"]);
    setToggleBtn(false);
  }

  function moveSlider(e) {
    let index = e.target.dataset.value;
    let images = document.querySelectorAll(`.${classes.image}`);
    let bullets = document.querySelectorAll(`.${classes.bullets} span`);

    let imageNumber = "img-" + index;
    let currentImage = document.querySelector(`.${classes[imageNumber]}`);
    images.forEach((img) => {
      img.classList.remove(classes.show);
    });
    currentImage.classList.add(classes.show);

    let textSlider = document.querySelector(`.${classes["text-group"]}`);
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove(classes.active));
    e.target.classList.add(classes.active);
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

            <div className={classes.carousel}>
              <div className={classes["images-wrapper"]}>
                <img
                  src="/images/image1.png"
                  className={`${classes.image} ${classes["img-1"]} ${classes.show}`}
                  alt=""
                />
                <img
                  src="/images/image2.png"
                  className={`${classes.image} ${classes["img-2"]}`}
                  alt=""
                />
                <img
                  src="/images/image3.png"
                  className={`${classes.image} ${classes["img-3"]}`}
                  alt=""
                />
              </div>

              <div className={classes["text-slider"]}>
                <div className={classes["text-wrap"]}>
                  <div className={classes["text-group"]}>
                    <h2>Create your own courses</h2>
                    <h2>Customize as you like</h2>
                    <h2>Invite students to your className</h2>
                  </div>
                </div>

                <div className={classes.bullets}>
                  <span
                    className={classes.active}
                    data-value="1"
                    onClick={moveSlider}
                  ></span>
                  <span data-value="2" onClick={moveSlider}></span>
                  <span data-value="3" onClick={moveSlider}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </StyledEngineProvider>
  );
}

export default Registration;
