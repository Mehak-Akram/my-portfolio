"use client";
import React from "react";
import styles from "./ServicesCard.module.css";
import { inter } from "@/font";
import { servicesCardData } from "@/constant/servicesCards";
import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";

function ServicesCard() {
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
      {servicesCardData.map((item, index) => {
        const Icon = item.icon; 
        return (
          <div className={`${styles.card} ${inter.className}`} key={index} data-aos="fade-up"
     data-aos-duration="3000">
            <div className={styles.cardIcon}>
              <Icon size={60} /> 
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
}

export default ServicesCard;