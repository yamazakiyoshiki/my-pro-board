import styles from "./footer.module.css";
import { auth, signOut } from "@/app/auth";
import { MdLogout, MdOutlineSettings } from "react-icons/md";
import Link from "next/link";

const Footer = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      <div>
        <Link href={`/homeboard/users/${user.id}`} className={styles.setting}>
          <MdOutlineSettings/>
          ユーザー設定
        </Link>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
          <button className={styles.logout}>
          <MdLogout />
          ログアウト
        </button>
      </form>
      <div className={styles.text}>© yamazaki Dev</div>
    </div>
  );
};

export default Footer;