import React, { useState } from "react";
import "./login.css";

function Login() {
  const main = document.querySelector("main");
  const [toggleClicked, setToggleBtn] = useState(false);

  function changeFocus(e) {
    const input = e.target;
    if (input.classList !== "active") {
      input.classList.add("active");
    }
    input.addEventListener("blur", () => {
      if (input.value !== "") return;
      input.classList.remove("active");
    });
  }

  if (toggleClicked == true) {
    if (main.classList != "sign-up-mode") {
      main.classList.add("sign-up-mode");
    } else {
      main.classList.remove("sign-up-mode");
    }
    setToggleBtn(false);
  }

  function moveSlider(e) {
    let index = e.target.dataset.value;
    const images = document.querySelectorAll(".image");
    const bullets = document.querySelectorAll(".bullets span");
    console.log(index);

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => {
      img.classList.remove("show");
    });
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    e.target.classList.add("active");
  }

  //   bullets.forEach((bullet) => {
  //     bullet.addEventListener("click", moveSlider);
  //   });
  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className="sign-in-form"
            >
              <div className="logo">
                <img src="/images/athpotha_v3.png" alt="අත්පොත" />
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet? </h6>
                <span className="toggle" onClick={() => setToggleBtn(true)}>
                  Sign up
                </span>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Name</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    // onClick={() => setFocus(true)}
                    onClick={changeFocus}
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  <a href="#">Foget Password?</a>
                </p>
              </div>
            </form>

            <form
              action="index.html"
              autoComplete="off"
              className="sign-up-form"
            >
              <div className="logo">
                <img src="/images/athpotha_v3.png" alt="easyclassName" />
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account? </h6>
                <span className="toggle" onClick={() => setToggleBtn(true)}>
                  Sign in
                </span>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    onClick={changeFocus}
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <a href="#"> Terms of Services </a> and{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src="/images/image1.png"
                className="image img-1 show"
                alt=""
              />
              <img src="/images/image2.png" className="image img-2" alt="" />
              <img src="/images/image3.png" className="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your className</h2>
                </div>
              </div>

              <div className="bullets">
                <span
                  className="active"
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
