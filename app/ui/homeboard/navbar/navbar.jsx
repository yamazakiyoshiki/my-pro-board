"use client";

import styles from "./navbar.module.css";
import ResponsiveNavbar from "./responsiveNavbar/responsiveNavbar";
import Link from "next/link";
import {
  MdPublic,
  MdSearch,
  MdSupervisedUserCircle,
} from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="検索..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <Link href="/homeboard/users">
            <MdSupervisedUserCircle size={20} />
          </Link>
          <Link href="/homeboard">
            <MdPublic size={20} />
          </Link>
          <ResponsiveNavbar/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;