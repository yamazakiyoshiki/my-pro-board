import styles from "@/app/ui/notfound.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Not Found</h2>
      <p>
        ページが見つかりません。<br/>
        まだ未実装のページかもしれません。<br/>
        実装まで少々お待ちください。
      </p>
      <div className={styles.button}>
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
}