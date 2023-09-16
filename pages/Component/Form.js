import {useState} from 'react'
import Image from "next/image";
import styles from "@/styles/Form.module.css";
import { useRouter } from "next/router";

const Form = () => {
  return (
    <>
     <section className={styles.section6}>
          <div className={styles.footerContainer}>
            <div className={styles.menuContainer}>
              <h3>Menu</h3>
              <p onClick={() => handleNavigate("/about")}>About Us</p>
              <p onClick={() => handleNavigate("/services")}>Our Services</p>
              <p>Privicy Policy</p>
              <p onClick={() => handleNavigate("/careers")}>Careers</p>
              <div className={styles.mailContainer}>
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                <form>
                  <div className={styles.inputContainer}>
                    <input placeholder="Enter your email here*" />
                    <button>Submit</button>
                  </div>
                </form>
                <p className={styles.section6Para}>
                  © 2023 by Hypenet Network Services L.L.C
                </p>
              </div>
            </div>
            <div className={styles.menuContainer2}>
              <h3>CONTACT US</h3>
              <p>Hypenet Network Services L.L.C</p>

              <div className={styles.iconContaner}>
                <Image
                  src="/phone.png"
                  width={50}
                  height={50}
                  className={styles.iconImage}
                  alt="icone"
                />
                <p>+971 56 778 6926 </p>
              </div>
              <div className={styles.iconContaner}>
                <Image
                  src="/mail.png"
                  width={50}
                  height={50}
                  className={styles.iconImage}
                  alt="icone"
                />
                <p>ello@hypenet.ae </p>
              </div>
              <div className={styles.iconContaner}>
                <div>
                  <Image
                    src="/map-pin.png"
                    width={50}
                    height={50}
                    className={styles.iconImage}
                    alt="icone"
                  />
                </div>

                <p>
                  Level 6B, Rolex Tower, Sheikh Zayed Road, Near Financial
                  Centre Metro, DIFC, Dubai - United Arab Emirates
                </p>
              </div>
              <div className={styles.mediaContainer}>
                <Image
                  src="/linkedInLogo.png"
                  width={100}
                  height={100}
                  alt="image"
                  className={styles.mediaImage}
                />
                <Image
                  src="/instaLogo.png"
                  width={100}
                  height={100}
                  alt="image"
                  className={styles.mediaImage}
                />
              </div>
            </div>

            <div className={styles.menuContainer3}>
              <h3>FOR ANY INFORMATION CONTACT US</h3>
              <form>
                <div className={styles.inputContainer2}>
                  <input placeholder="First Name*" />
                </div>
                <div className={styles.inputContainer2}>
                  <input placeholder="Last Name*" />
                </div>
                <div className={styles.inputContainer2}>
                  <input placeholder="Email*" />
                </div>
                <div className={styles.inputContainer2}>
                  <input placeholder="Mobile No*" />
                </div>
                <div className={styles.textAreaContainer}>
                  <textarea
                    placeholder="Enter your requirments*"
                    rows="5"
                    cols="50"
                  ></textarea>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className={styles.section7}>
          <Image
            src="/webBanner.png"
            width={1000}
            height={300}
            alt="banner"
            className={styles.banner}
          />
        </section>
    </>
  )
}

export default Form