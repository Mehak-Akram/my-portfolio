"use client";
import React from 'react'
import styles from './HeroSection.module.css'
import { inter } from '@/font'
import Button from '../button/Button'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";
import Link from 'next/link';

const HeroSection = () => {
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
    <div>
        <section className={`${styles.hero} ${inter.className}`} >
            <h1 data-aos="zoom-in-up">Hey! I'm {" "}<span>Mehak Akram</span> <br/>
              <span>I</span>'m {" "}
              <Typewriter words={['Front-End Developer!', 'Web Developer!', 'NextJS Developer!']}
              loop={Infinity}
              cursorStyle={'_'}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}/>
            </h1>
            <p data-aos="zoom-in-up">Skilled in modern front-end technologies like <span>Next.Js</span> and <span>Tailwind CSS </span>
 I design fast and responsive <br />  user interfaces. I'm also an  <span> Agentic AI developer</span> using the <span>OpenAI Agent SDK </span>  to create autonomous, goal-oriented AI agents.</p>
<Button text={"Hire Me"}/>
<div className={styles.socialIcons} data-aos="zoom-in-up"> <Link href={"https://github.com/Mehak-Akram"}><FaGithub size = {30} /></Link>
<Link href={"https://x.com/MehakAkram597"}><FaXTwitter size = {30}/></Link>
<FaInstagram size = {30}/>
<FaWhatsapp size = {30}/>
<FaLinkedin size = {30}/>
</div>
<div className = {styles.bottomDiv}>
    <Image src= {"/behance.png"} alt = {"Behance-image"} width = {156} height = {156} data-aos="fade-right"></Image>
        <Image src= {"/dribble.png"} alt = {"dribble-image"} width = {156} height = {156} data-aos="fade-right"></Image>
    <Image src= {"/upwork.png"} alt = {"upwork-image"} width = {156} height = {156} data-aos="fade-right"></Image>
    <Image src= {"/freelancer.png"} alt = {"freelancer-image"} width = {156} height = {156} data-aos="fade-right"></Image>

        </div>
        </section>
    </div>
  )
}

export default HeroSection