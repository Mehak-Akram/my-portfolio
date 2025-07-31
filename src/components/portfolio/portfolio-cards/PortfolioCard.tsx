"use client";
import React from "react";
import styles from "./PortfolioCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { portfolioCards } from "@/constant/portfolioCard";
import { inter } from "@/font";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
const PortfolioCard = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      {portfolioCards.map((item) => {
        return (
          <div className={styles.card} key={item.id} data-aos="flip-left">
            <Link href={item.href}>
              {" "}
              <div className={styles.cardImage}>
                {item.type == "image" ? (
                  <Image
                    src={item.src}
                    alt="project-image"
                    width={607}
                    height={607}
                    className={styles.img}
                  />
                ) : (
                  <video src={item.src} controls autoPlay loop muted></video>
                )}
              </div>
            </Link>

            <div className={`${styles.cardTexth1} ${inter.className}`}>
              {item.title}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PortfolioCard;
