import React from 'react';
import classes from "./Login.module.css";

function Carousel() {
    function moveSlider(e) {
        let index = e.target.dataset.value;
        let images = document.querySelectorAll(`.${classes.image}`);
        let bullets = document.querySelectorAll("span");

        let imageNumber = "img-" + index;
        let currentImage = document.querySelector(`.${classes[imageNumber]}`);
        images.forEach((img) => {
            img.classList.remove(classes.show);
        });
        currentImage.classList.add(classes.show);

        let textSlider = document.querySelector(`.${classes["text-group"]}`);
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

        bullets.forEach((bull) => {
            bull.classList.remove(classes.active);
        });
        e.target.classList.add(classes.active);
    }

    return (
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
    )
}

export default Carousel