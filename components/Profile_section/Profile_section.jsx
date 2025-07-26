import { assets } from "@/assets/assets";
import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";

const Profile_section = () => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePicture}>
          <Image
            src={assets.nanny_img}
            alt="Nanny image"
            className={styles.nannyImg}
          />
        </div>
        <div className={styles.profileInfoContainer}>
          <div className={styles.profileInfoHeader}>
            <h1 className={styles.profileInfoTitle}>Auklės informacija</h1>
          </div>
          <div className={styles.profileNameContainer}>
            <div className={styles.frame2}>
              <Image
                src={assets.verify}
                alt="Verify Icon"
                className={styles.verifyIcon}
              />
              <h1>Mia</h1>
            </div>
            <div className={styles.profileButtons}>
              <button className={styles.buttons40}>
                <Image
                  src={assets.heart_outlined}
                  alt="Heart Icon"
                  className={styles.heartIcon}
                />
                <h2>Išsaugoti</h2>
              </button>
              <button className={styles.buttons40}>
                <Image
                  src={assets.share}
                  alt="Share Icon"
                  className={styles.shareIcon}
                />
                <h2>Dalintis</h2>
              </button>
            </div>
          </div>
          <div className={styles.profileDescription}>
            <p>
              Sveiki! Mano vardas Aistė ir man labai patinka dirbti su vaikais.
              Jau daugiau nei penkerius metus prižiūriu vaikus, tiek ne visą,
              tiek visą darbo dieną, ir man labai patinka kurti vaikams linksmą
              ir saugią aplinką. Visada stengiuosi sugalvoti veiklų, kurios būtų
              ne tik linksmos, bet ir lavinančios bei pritaikytos... Daugiau
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_section;
