"use client";

import React from 'react'
import styles from "./AboutBottomImage.module.css"
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";

function AboutBottomImage() {
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
  return (
    <>
    <section className={styles.aboutBottomImage} >
            <Image src= {"/html.png"} alt = {"html"} width = {90} height = {90} data-aos="fade-right"></Image>
                        <Image src= {"/css.png"} alt = {"CSS"}width = {90} height = {90} data-aos="fade-right"></Image>
            <Image src= {"/ts.png"} alt = {"TypeScript"}width = {75} height = {75} data-aos="fade-right"></Image>
            <Image src= {"/git.png"} alt = {"Git"}width = {90} height = {90} data-aos="fade-right"></Image>
            <Image src= {"/figma.png"} alt = {"figma"}width = {90} height = {90} data-aos="fade-right"></Image>
            <Image src= {"/react.png"} alt = {"react"}width = {90} height = {90} data-aos="fade-right"></Image>
            <Image src= {"/js.png"} alt = {"JavaScript"}width = {90} height = {90} data-aos="fade-right"></Image>
            <Image src= {"/next.png"} alt = {"Next.js"}width = {90} height = {90} data-aos="fade-right"></Image>

        
    </section>
    </>
  )
}

export default AboutBottomImage