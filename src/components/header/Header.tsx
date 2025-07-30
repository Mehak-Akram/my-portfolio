"use client";
import styles from "./Header.module.css";
import { caveat, inter } from "@/font";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect , useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={caveat.className}>Mehak Akram</h1>

          {isOpen ? (
            <ul
              className={`${inter.className} ${styles.navUl} ${styles.active}`}
            >
              <CgCloseR className={styles.close} size={30} onClick={()=>setIsOpen(false)}/>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"#about"}>About</Link>
              </li>
              <li>
                <Link href={"#portfolio"}>Portfolio</Link>
              </li>
              <li>
                <Link href={"#services"}>Services</Link>
              </li>
              <li>
                <Link href={"#contact-us"}>Contact</Link>
              </li>
            </ul>
          ) : (
            <ul
              className={`${inter.className} ${styles.navUl}`}
              data-aos="fade-right"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"#about"}>About</Link>
              </li>
              <li>
                <Link href={"#portfolio"}>Portfolio</Link>
              </li>
              <li>
                <Link href={"#services"}>Services</Link>
              </li>
              <li>
                <Link href={"#contact-us"}>Contact</Link>
              </li>
            </ul>
          )}
          <TiThMenu
            size={30}
            className={styles.menu}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </nav>
      </header>
    </div>
  );
};

export default Header;
