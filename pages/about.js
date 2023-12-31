import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";
import right1 from "../public/rightImg1.png";
import right2 from "../public/rightImg2.png";
import right3 from "../public/rightImg3.png";
import right4 from "../public/rightImg4.png";
import NavBar from "./Component/NavBar";
import Form from "./Component/Form";

const About = () => {
  const imageData = [
    {
      imgUrl: right1,
      text: "Quality Assurance",
    },
    {
      imgUrl: right2,
      text: "Right User Experience",
    },
    {
      imgUrl: right3,
      text: "Robust & Timely Implemetationm",
    },
    {
      imgUrl: right4,
      text: "Scalable & Stable Build",
    },
  ];

  const gifData = [
    {
      para: "Our expert team understands your objectives and requirements,crafting tailored solutions through focused research, ideation,and design thinking, commitment and excellence.",
    },
    {
      para: "We create tailored business solutions in collaboration with our diverse team, ensuring clear communication throughout design and iterative development",
    },
    {
      para: "Our expert team understands your objectives and requirements,crafting tailored solutions through focused research, ideation,and design thinking, commitment and excellence.",
    },
  ];

  const gifDataMob = [
    {
      title: "DEFINE",
      para: "Our expert team understands your objectives and requirements,crafting tailored solutions through focused research, ideation,and design thinking, commitment and excellence.",
    },
    {
      title: "DESIGIN",
      para: "We create tailored business solutions in collaboration with our diverse team, ensuring clear communication throughout design and iterative development",
    },
    {
      title: "DELIVER",
      para: "Our expert team understands your objectives and requirements,crafting tailored solutions through focused research, ideation,and design thinking, commitment and excellence.",
    },
  ];
  return (
    <>
      <Head>
        <title>HYPENET</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <section className={styles.section2}>
          <div className={styles.contentContainer}>
            <Image
              src="/leftImage.png"
              width={500}
              height={200}
              className={styles.leftImage}
            />
            <div className={styles.rightContainer}>
              <Image
                src="/gif2.gif"
                width={100}
                height={50}
                className={styles.topLftImg}
              />
              <div className={styles.header}>
                <h2>ABOUT US</h2>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section3}>
          <div className={styles.mobHeader}>
            {" "}
            <h2>BRAND PROMISE</h2>
          </div>
          <div className={styles.header}>
            <div>
              <h2>BRAND PROMISE</h2>
            </div>
            <div>
              <h2>WHY US ?</h2>
            </div>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.Box}>
              <div className={styles.leftBox}>
                <Image
                  src="/commaLogo.png"
                  width={300}
                  height={200}
                  alt="image"
                  className={styles.logoImage}
                />
                <p className={styles.text}>we at</p>
                <Image
                  src="/webLogo.png"
                  width={300}
                  height={200}
                  alt="image"
                  className={styles.logoImage2}
                />
                <div className={styles.paraBox}>
                  <p>
                    &ldquo;Client servicing is not merely a department; it
                    embodies the essence of our entire company&rdquo;
                  </p>
                </div>
              </div>
              <div className={styles.rightBoxContainer}>
                <div className={styles.mobheader2}>
                  <h2>WHY US?</h2>
                </div>
                <div className={styles.rightBox}>
                  <div className={styles.box2}>
                    <div className={styles.imgTxtBox}>
                      <Image
                        src="/rightImg1.png"
                        width={60}
                        height={60}
                        alt="image"
                        className={styles.rightImg}
                      />
                      <div className={styles.iconText}>
                        <p>Quality Assurance</p>
                      </div>
                    </div>
                    <div className={styles.imgTxtBox2}>
                      <Image
                        src="/rightImg2.png"
                        width={60}
                        height={60}
                        alt="image"
                        className={styles.rightImg}
                      />
                      <div className={styles.iconText}>
                        <p>Quality Assurance</p>
                      </div>
                    </div>
                    <div className={styles.imgTxtBox3}>
                      <Image
                        src="/rightImg3.png"
                        width={60}
                        height={60}
                        alt="image"
                        className={styles.rightImg}
                      />
                      <div className={styles.iconText}>
                        <p>Quality Assurance</p>
                      </div>
                    </div>
                    <div className={styles.imgTxtBox4}>
                      <Image
                        src="/rightImg4.png"
                        width={60}
                        height={60}
                        alt="image"
                        className={styles.rightImg}
                      />
                      <div className={styles.iconText}>
                        <p>Quality Assurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section5}>
          <div className={styles.header}>
            <h2>TEAM</h2>
          </div>
          <div className={styles.container}>
            <div className={styles.containerContent}>
              <div className={styles.leftBox2}>
                <div>
                  <p>WHATS KEEPS US MOVING?</p>
                </div>
              </div>
              <Image
                src="/arrowIcon.png"
                width={80}
                height={80}
                alt="image"
                className={styles.iconImage2}
              />
              <div className={styles.leftContent}>
                <div>
                  <p>
                    If you want to walk fast.
                    <br />
                    <span>Walk Alone</span>
                    <br />
                    But if you want to walk far,
                    <span>
                      <br />
                      Walk Together”
                    </span>
                    <br />
                    -Ratan Tata
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.containerContent}>
              <div className={styles.leftBox3}>
                <div>
                  <p className={styles.number}>20+</p>
                  <p className={styles.leftTxt}>Expert with</p>
                </div>
              </div>
              <Image
                src="/arrowIcon.png"
                width={80}
                height={80}
                alt="image"
                className={styles.iconImage2}
              />
              <div>
                <div className={styles.numContainer}>
                  <p className={styles.number}>20+</p>
                  <p className={styles.leftTxt}>Years of Average Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div>
              {" "}
              <p>
                | 3D | Game Designers | Design Thinkers | Data Scientists |
                Marketing | 3D | Game Designers | Design Thinkers | Data
                Scientists | Marketing
              </p>
            </div>
          </div>
        </section>
        <div className={styles.clientBanner}>
          <Image
            src="/clientBanner.png"
            alt="client"
            width={1000}
            height={700}
            className={styles.clientImage}
          />
        </div>
        <section4 className={styles.section4}>
          <div className={styles.leftContainer}>
            <div className={styles.topBox}></div>
            <div className={styles.middleBox}></div>
            <div className={styles.bottomBox}></div>

            <h2 className={styles.headerTag}>3</h2>

            <Image
              src="/giffCard.gif"
              width={100}
              height={100}
              alt="gif"
              className={styles.giffImage}
            />

            <div className={styles.label1}></div>
            <div className={styles.label2}></div>
            <p className={styles.para1}>EFINE</p>
            <p className={styles.para2}>ESIGN</p>
            <p className={styles.para3}>ELIVER</p>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.rightContainerBox}>
              {gifData.map((data, index) => (
                <div key={index} className={styles.paraText}>
                  <p>{data.para}</p>
                </div>
              ))}
            </div>
          </div>
        </section4>
        <section className={styles.section8}>
          <h2>Testimonials</h2>
          <div className={styles.line}></div>
          <div className={styles.section8Container}>
            <div className={styles.circleBox}></div>
            <p className={styles.section8Containerpara}>
              “I started working with Zeta as I was going through a career
              transition – and I could not be more grateful for having met her
              throughout that journey. Zeta brings so much knowledge, experience
              and a no-nonsense approach when helping me tackle challenges and
              mental obstacles. She brings amazing, fresh insights and helps me
              shift my thought process to help me believe in myself and move
              closer towards my goals. Zeta’s sincere and strong motivation to
              help, as well as her ability to customize the approach based on
              the personal or career challenge, make her a wonderful career
              coach and the best life coach in Dubai.”
            </p>
            <h3>Martine Chami</h3>
            <p className={styles.section8Title}>
              Business Process Transformation | Operational Excellence |
              Internal Audit
            </p>
          </div>
        </section>

        <section className={styles.section7}>
          <div className={styles.heading}>
            <h2>INTRODUCING</h2>
          </div>

          <div className={styles.imgContainer}>
            <div className={styles.imgContentBox}>
              <Image
                src="/F5Logo.png"
                width={200}
                height={200}
                alt="image"
                className={styles.imgLogo}
              />
              <Image
                src="/line.png"
                width={200}
                height={200}
                alt="image"
                className={styles.verticalLine}
              />
              {/* <div className={styles.verticalLine}></div> */}
              <div className={styles.section7HeadingBox}>
                <h3>Unleashing Extraordinary Experiences</h3>
                <p>Where AI, ML,& Futuristic Tech Converge!</p>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.webLogoContainer}>
          <p>Present</p>
          <Image
            src="/hypenetTxtLogo.png"
            width={70}
            height={70}
            className={styles.imageBox}
          />
        </div>

        <section className={styles.section4Mobile}>
          <div>
            <h2 className={styles.headerTags}>3</h2>
            <Image
              src="/giffCard.gif"
              width={100}
              height={100}
              alt="gif"
              className={styles.giffImages}
            />
          </div>
          <div className={styles.textContainer}>
            {gifDataMob.map((data, index) => (
              <div key={index} className={styles.textBox}>
                <h2>{data.title}</h2>
                <div className={styles.paraTxt}>
                  <p>{data.para}</p>
                </div>
              </div>
            ))}

            {/* <div></div>
            <div></div> */}
          </div>
        </section>
        <Form />
      </main>
    </>
  );
};

export default About;
