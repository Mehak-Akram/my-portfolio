"use client";
import React from "react";
import styles from "./AboutSection.module.css";
import { caveat, inter } from "@/font";
import Button from "../button/Button";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function AboutSection() {
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
      <section id="about" className={styles.about}>
        <div className={styles.aboutLeftDiv} data-aos="zoom-in-up">
          <h1 className={caveat.className}>Mehak Akram</h1>
          <p className={caveat.className}>
            {" "}
            <Typewriter
              words={[
                "Front-End Developer!",
                "Web Developer!",
                "NextJS Developer!",
              ]}
              loop={Infinity}
              cursorStyle={"_"}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <h3 className={`${styles.detailText} ${inter.className}`}>
            Passionate about crafting interactive and user-friendly web
            experiences. Experienced in building responsive front-end
            applications using modern technologies. Specialized in developing
            agentic AI solutions with the OpenAI Agent SDK. Skilled at
            designing, implementing, and integrating autonomous AI agents to
            solve complex problems and enhance user experiences.
          </h3>
          <Button text={"Contact Me"} />
        </div>
        <div className={styles.aboutRightDiv}>
          <Image
            src={"/profile.png"}
            alt={"Profile Picture"}
            width={400}
            height={400}
            data-aos="zoom-in-up"
            className={styles.img}
          ></Image>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
