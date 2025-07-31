import React from "react";
import styles from "./portfolio.module.css";
import { caveat, inter } from "@/font";
import PortfolioCard from "./portfolio-cards/PortfolioCard";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h1 className={caveat.className}>
          <span>M</span>y <span>L</span>ast <span>W</span>ork
        </h1>
        <p className={inter.className}>
          A showcase of my recent projects and creative work.Each project
          highlights my skills in web development and design. <br />
          Explore the cards below to learn more about the technologies and
          solutions I've implemented.
        </p>
        <div className={styles.myWork}>
          <PortfolioCard />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
