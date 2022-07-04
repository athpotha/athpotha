import React, { useState } from "react";
import classes from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const main = document.querySelector(`.${classes.mainDiv}`);
  const [toggleClicked, setToggleBtn] = useState(false);

  function changeFocus(e) {
    const input = e.target;
    const eyes = document.querySelectorAll(`.${classes["input-wrap-eye"]}`);
    if (input.classList !== classes.active) {
      input.classList.add(classes.active);
      if (input.id === "password") {
        eyes.forEach((eye) => {
          eye.classList.add(classes.active);
        });
      }
    }
    input.addEventListener("blur", () => {
      if (input.value !== "") return;
      input.classList.remove(classes.active);
      if (input.id === "password") {
        eyes.forEach((eye) => {
          eye.classList.remove(classes.active);
        });
      }
    });
  }

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

  function toggleEye(eye) {
    if (eye.id === "password-hide") {
      eye.classList.remove(classes.show);
      document.getElementById("password-show").classList.add(classes.show);
      document.getElementById("password").type = "text";
    } else if (eye.id === "password-show") {
      eye.classList.remove(classes.show);
      document.getElementById("password-hide").classList.add(classes.show);
      document.getElementById("password").type = "password";
    }
  }

  function eyeClickHandler(e) {
    let eye = e.target.parentNode;
    if (eye.classList[0] === classes["input-wrap-eye"]) {
      toggleEye(eye);
    } else if (eye.classList[0] === "svg-inline--fa") {
      eye = eye.parentNode;
      toggleEye(eye);
    } else {
      console.log("else");
    }
  }
  return (
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
                <img src="/images/athpotha_v3.png" alt="අත්පොත" />
              </div>

              <div className={classes.heading}>
                <h2>Welcome Back</h2>
                <h6>Not registred yet? </h6>
                <span
                  className={classes.toggle}
                  onClick={() => setToggleBtn(true)}
                >
                  Sign up
                </span>
              </div>

              <div className={classes["actual-form"]}>
                <div className={classes["input-wrap"]}>
                  <input
                    type="text"
                    minLength="4"
                    className={classes["input-field"]}
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Name</label>
                </div>
                <div className={classes["input-wrap"]}>
                  <input
                    type="password"
                    minLength="4"
                    className={classes["input-field"]}
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                    id="password"
                  />
                  <label>Password</label>
                  <span
                    className={classes["input-wrap-eye"]}
                    id="password-show"
                  >
                    <FontAwesomeIcon
                      style={{ cursor: "pointer" }}
                      icon="fa-solid fa-eye-slash"
                      onClick={eyeClickHandler}
                    />
                  </span>
                  <span
                    className={`${classes["input-wrap-eye"]} ${classes.show}`}
                    id="password-hide"
                  >
                    <FontAwesomeIcon
                      style={{ cursor: "pointer" }}
                      icon="fa-solid fa-eye"
                      onClick={eyeClickHandler}
                    />
                  </span>
                </div>
                <input
                  type="submit"
                  value="Sign In"
                  className={classes["sign-btn"]}
                />

                <p className={classes.text}>
                  <a href="#">Foget Password?</a>
                </p>
              </div>
            </form>

            <form
              action="index.html"
              autoComplete="off"
              className={classes["sign-up-form"]}
            >
              <div className={classes.logo}>
                <img src="/images/athpotha_v3.png" alt="easyclassName" />
              </div>

              <div className={classes.heading}>
                <h2>Get Started</h2>
                <h6>Already have an account? </h6>
                <span
                  className={classes.toggle}
                  onClick={() => setToggleBtn(true)}
                >
                  Sign in
                </span>
              </div>

              <div className={classes["actual-form"]}>
                <div className={classes["input-wrap"]}>
                  <input
                    type="text"
                    minLength="4"
                    className={classes["input-field"]}
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Name</label>
                </div>

                <div className={classes["input-wrap"]}>
                  <input
                    type="email"
                    className={classes["input-field"]}
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Email</label>
                </div>

                <div className={classes["input-wrap"]}>
                  <input
                    type="password"
                    minLength="4"
                    className={classes["input-field"]}
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Password</label>
                </div>

                <input
                  type="submit"
                  value="Sign Up"
                  className={classes["sign-btn"]}
                />

                <p className={classes.text}>
                  By signing up, I agree to the
                  <a href="#"> Terms of Services </a> and{" "}
                  <a href="#">Privacy Policy</a>
                </p>
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
  );
}

export default Login;
