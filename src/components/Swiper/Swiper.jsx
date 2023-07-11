"use client";

import React, { useRef, useEffect, useState } from "react";

import { register } from "swiper/element/bundle";

register();

const Swiper = ({ children, slidesPerView }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [slidePerViewSize, setSlidePerViewSize] = useState(5);

    const swiperElemRef = useRef();
    useEffect(() => {
        swiperElemRef.current.addEventListener("progress", (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElemRef.current.addEventListener("slidechange", (e) => {
            console.log("slide changed");
        });
    }, []);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    });

    useEffect(() => {
        if (windowWidth < 400) {
            setSlidePerViewSize(1);
        } if (windowWidth > 400) {
            setSlidePerViewSize(2);
        } if (windowWidth > 500) {
            setSlidePerViewSize(2);
        } if (windowWidth > 1000) {
            setSlidePerViewSize(5);
        }
    }, [windowWidth]);

    return (
        <div>
            <swiper-container
                ref={swiperElemRef}
                slides-per-view={slidePerViewSize}
                navigation="true"
                pagination="false"
            >
                {children}
            </swiper-container>
        </div>
    );
};

export default Swiper;
