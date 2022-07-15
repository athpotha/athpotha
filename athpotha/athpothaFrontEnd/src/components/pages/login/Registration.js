import { StyledEngineProvider } from "@mui/material";
import React, { useState } from "react";
import classes from "./Login.module.css";
// import PasswordEye from "./PasswordEye";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Registration() {
  const main = document.querySelector(`.${classes.mainDiv}`);
  const [toggleClicked, setToggleBtn] = useState(false);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  // const [passwordEyeFocus, setPasswordEyeFocus] = useState("");

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
              <form
                action="index.html"
                autoComplete="off"
                className={classes["sign-in-form"]}
              >
                <div className={classes.logo}>
                  <img src="/images/athpotha_v3.png" alt="easyclassName" />
                </div>

                <div className={classes.heading}>
                  <h2>Get Started</h2>
                  <h6>Already have a student account? </h6>
                  <span
                    className={classes.toggle}
                    onClick={() => setToggleBtn(true)}
                  >
                    Sign in
                  </span>
                </div>

                <SignUpForm />
              </form>

              <form
                action="index.html"
                autoComplete="off"
                className={classes["sign-up-form"]}
              >
                <div className={classes.logo}>
                  <img src="/images/athpotha_v3.png" alt="අත්පොත" />
                </div>

                <div className={classes.heading}>
                  <h2>Welcome Back</h2>
                  <h6>Not registred as a student yet? </h6>
                  <span
                    className={classes.toggle}
                    onClick={() => setToggleBtn(true)}
                  >
                    Sign up
                  </span>
                  <SignInForm />
                </div>
              </form>
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
