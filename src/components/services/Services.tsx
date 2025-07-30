import React from "react";
import styles from "./Services.module.css";
import { caveat, inter } from "@/font";
import ServicesCard from "./services-card/ServicesCard";

function Services() {
  return (
    <>
      <section id="services" className={styles.services}>
        <h1 className={`${caveat.className}`}>
          <span>W</span>hat <span>I</span> Do<span> F</span>or<span> C</span>
          lients
        </h1>
        <p className={inter.className}>
          I provide a range of services to help businesses establish a strong
          online presence and achieve their digital goals. From web development
          to SEO optimization, <br /> I ensure that each project is tailored to meet
          the unique needs of my clients, delivering high-quality results that
          drive success.
        </p>
        <div className={styles.serviceCardDiv}>
       <ServicesCard/>
        </div>
      </section>
    </>
  );
}

export default Services;
