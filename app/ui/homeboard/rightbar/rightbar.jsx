import styles from "./rightbar.module.css";
import Image from "next/image";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>ProBoardの今後の予定</span>
          <h3 className={styles.title}>
            今後追加する予定の機能
          </h3>
          <p className={styles.desc}>
            今後の追加予定の機能としては、ユーザー同士で可能なチャット機能
            、ヘッダー画像を設定できる機能、対話形式で質問に答えてくれるコード
            ヘルパー、問題の正解数や投稿数に応じて変動するスコア機能を考えて
            いますのでお楽しみにしててください。
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}> Ver.1.0.0</span>
          <h3 className={styles.title}>
            ProBoardリリース開始
          </h3>
          <p className={styles.desc}>
            本日よりProBoardがリリースしました。機能の修正や追加などを日々行なっていきたい
            と思ってますのでどうぞよろしくお願いします。また使い方など不明な点がある際はページ
            左の下部にあります使い方ページをご覧ください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;