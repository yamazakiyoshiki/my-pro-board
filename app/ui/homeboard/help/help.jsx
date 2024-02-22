import styles from "@/app/ui/homeboard/help/help.module.css";
import { MdHelpCenter, MdOutlineMenuBook, MdSupervisedUserCircle } from "react-icons/md";

const helpData = [
  {
    icon: <MdSupervisedUserCircle/>,
    cardTitle: "user",
    title: "ユーザーページ",
    desc: "1.ユーザーページではこのアプリを登録しているユーザー一覧やプロフィールを見ることができます。\n\n※今後はユーザー同士でのチャット機能を追加予定です。",
  },
  {
    icon: <MdOutlineMenuBook/>,
    cardTitle: "problem",
    title: "問題ページ",
    desc: "1.問題一覧ページではこのアプリ全ユーザーが投稿した問題の一覧を見ることができます。\n\n2.自分の投稿一覧ページでは自分が投稿した問題を一覧で確認することができ編集、削除ができます。\n\n3.問題を解くページでは問題一覧の中から問題にチャレンジすることが出来ます。\n\n3.問題を作るページでは問題作成フォーマットにそって簡単に問題を作ることが出来ます。",
  },
];

const Help = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MdHelpCenter size={30}/>
        <h1>ProBoardのご利用方法</h1>
      </div>
      <div className={styles.intro}>
        <span>
          プログラミング用学習アプリProBoardをご利用ありがとうございます。<br />
          このページでは主な使い方を紹介しています。操作など分からなくなった時には<br />
          立ち寄ってみてください。これからも機能を追加していく予定なのでその際は<br />
          ヘルプページも追加していくのでどうぞご確認ください。これからもユーザーが<br />
          簡単に使えるようなアプリケーションを目指していきますのでよろしくお願いします。
        </span>
        <div className={styles.collection}>
      {helpData.map((help) => (
        <div key={help.title} className={`${styles.card} ${styles[help.cardTitle]}`}>
          <h2>
            <span className={styles.icon}>{help.icon}</span>
            <span>{help.title}</span>
          </h2>
          <span className={styles.desc}>{help.desc}</span>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Help;