import {useState} from 'react'
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
    const [navMenu, setNavMenu] = useState(false);
    const router = useRouter();
    const handleNavigate = (path) => {
        router.push(path);
      };
    
      const showMenuBox = () => {
        setNavMenu(!navMenu);
      };
  return (
    <>
    <section className={styles.section1}>
          <div className={styles.navContainer}>
            <div className={styles.logoBox}>
              <Image
                src="/navLogo2.png"
                width={50}
                height={50}
                className={styles.logo}
                onClick={showMenuBox}
              />

              <Image
                src="/assetLogo.png"
                width={150}
                height={50}
                className={styles.logo2}
              />
            </div>

            <div
              className={styles.blogBox}
              onClick={() => handleNavigate("/blogs")}
            >
              <span>Blog</span>
            </div>
          </div>
          {navMenu && (
          <div className={styles.menuBox}>
            <p onClick={() => handleNavigate("/")}>Home</p>
            <p onClick={() => handleNavigate("/about")}>About Us</p>
            <p onClick={() => handleNavigate("/services")}>Our Services</p>
            <p onClick={() => handleNavigate("/careers")}>Careers</p>
          </div>
        )}
        </section>
        </>
  )
}

export default NavBar