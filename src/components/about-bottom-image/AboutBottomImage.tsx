"use client";

import React from "react";
import styles from "./AboutBottomImage.module.css";
import Image from "next/image";

function AboutBottomImage() {
  return (
    <>
      <section className={styles.aboutBottomImage}>
        <Image
          src={"/html.png"}
          alt={"html"}
          width={90}
          height={90}
        ></Image>
        <Image
          src={"/css.png"}
          alt={"CSS"}
          width={90}
          height={90}
        ></Image>
        <Image
          src={"/ts.png"}
          alt={"TypeScript"}
          width={75}
          height={75}
        ></Image>
        <Image
          src={"/git.png"}
          alt={"Git"}
          width={90}
          height={90}
        ></Image>
        <Image
          src={"/figma.png"}
          alt={"figma"}
          width={90}
          height={90}
        ></Image>
        <Image
          src={"/react.png"}
          alt={"react"}
          width={90}
          height={90}
        ></Image>
        <Image
          src={"/js.png"}
          alt={"JavaScript"}
          width={90}
          height={90}
        ></Image>
        <Image
          src={"/next.png"}
          alt={"Next.js"}
          width={90}
          height={90}
        ></Image>
      </section>
    </>
  );
}

export default AboutBottomImage;
