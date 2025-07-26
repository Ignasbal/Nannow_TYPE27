import { assets } from "@/assets/assets";
import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src={assets.logo}
              alt="Website Logo"
              className={styles.logo}
            />
          </div>

          <nav className={styles.navWrapper}>
            <ul className={styles.navLinks}>
              <li>
                <Link href="/#">Apie Nannow</Link>
              </li>
              <li>
                <Link href="/#">Ieškau auklės</Link>
              </li>
              <li>
                <Link href="/#">Noriu būti aukle</Link>
              </li>
              <li>
                <Link href="/#">Kaip veikia</Link>
              </li>
              <li>
                <Link href="/#">Savybės</Link>
              </li>
              <li>
                <Link href="/#">Įkūrėjai</Link>
              </li>
              <li>
                <Link href="/#">DUK</Link>
              </li>
            </ul>

            <div className={styles.navigationButtons}>
              <Link href="#" className={styles.registerButton}>
                <h1>Registruokis</h1>
              </Link>

              <Link href="/#" className={styles.languageSelection}>
                <h1>LT</h1>
                <Image
                  src={assets.arrow_down}
                  className={styles.arrowDownIcon}
                  alt="Arrow icon"
                />
              </Link>
            </div>
          </nav>

          <button className={styles.hamburgerMenu}>
            <Image
              src={assets.hamburger_menu}
              alt="Menu Icon"
              className={styles.menu_icon}
            />
          </button>

          {/*------Mobile menu------ */}
        </header>
      </div>
    </div>
  );
};

export default Header;
