import React from 'react'
import styles from "./ContactUs.module.css"
import { caveat, inter } from '@/font'
import { FaGithub, FaLocationDot } from 'react-icons/fa6'
import { MdEmail} from 'react-icons/md'
import Link from 'next/link'

function ContactUs() {
  return (
    <> <section id='contact-us' className={styles.contactUs}>
         <h1 className={`${caveat.className}`}><span>C</span>ontact <span>M</span>e</h1>
                <p className={inter.className}></p>
        <div className={styles.contactUsBottomDiv}>
          <div className={styles.contactLeftDiv}>

            <div className={styles.contactLeftDivContainer} data-aos="fade-right">
              <Link href={"https://github.com/Mehak-Akram"}><FaGithub size= {24} color={'var(--logo-color'}/></Link>
              <div className={styles.contactLeftDivText}>
                <h6>Have a question</h6>
                <h6>I am here to help you</h6>
                <h6>Mehak-Akram</h6>
              </div>
              
            </div>
            <div className={styles.contactLeftDivContainer} data-aos="fade-right">
              <FaLocationDot size = {24} color={'var(--logo-color'}/>
              <div className={styles.contactLeftDivText}>
                <h6>Current Location</h6>
                <h6>Karachi Pakistan</h6>
                <h6>serving client worldwide</h6>
              </div>
              
            </div>
          </div>
          <div className={styles.contactRightDiv}data-aos="fade-up"
     data-aos-duration="3000">
            <form>
              <div className={styles.topInputDiv}>
                <input type="text" placeholder='Your name' className={styles.inputDetails}/>
                <input type="text" placeholder='Your email' className={styles.inputDetails}/>
              </div>
              <input type="text" placeholder='Subject'className={styles.inputDetails} style={{width : "100%"}}/>
              <textarea placeholder='Your message' className={styles.inputDetails} style={{height : "224px"}}></textarea>
              <input type="submit" className={styles.inputBtn} value={"Send message"} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
            </form>
          </div>
        </div>
        
        </section></>
  )
}

export default ContactUs