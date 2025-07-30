"use client";
import React from 'react'
import styles from './Button.module.css'
import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";

function Button(props : {text : string}) {
    useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  },[]);
    const {text} = props
  return (
    <>
    <button className={styles.button} data-aos="zoom-in-up">
        {text}
    </button>

    </>
  )
}

export default Button