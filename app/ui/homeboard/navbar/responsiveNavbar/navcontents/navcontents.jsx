"use client";

import styles from "@/app/ui/homeboard/navbar/responsiveNavbar/navcontents/navcontents.module.css";
import Link from "next/link";
import { MdClear } from "react-icons/md";

const NavContents= ({setIsOpen, navContents}) => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.navContents}>
          {navContents?.map((content) => (
            <Link
              key={content.title}
              href={content.path}
              className={styles.navContent}
            >
              <button onClick={() => setIsOpen(false)}>
                {content.title}
                {content.icon}
              </button>
            </Link>
          ))}
          <button onClick={() => setIsOpen(false)} className={styles.button}>
            <MdClear size={30}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavContents;
