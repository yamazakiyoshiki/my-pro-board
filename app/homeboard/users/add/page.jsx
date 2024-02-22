import styles from "@/app/ui/homeboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="ユーザーネーム" name="username" required />
        <input type="email" placeholder="メールアドレス" name="email" required />
        <input
          type="password"
          placeholder="パスワード"
          name="password"
          required
        />
        <input type="phone" placeholder="電話番号" name="phone" />
        <textarea
          name="address"
          id="address"
          rows="2"
          placeholder="住所"
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>認証済み?</option>
          <option value={true}>はい</option>
          <option value={false}>いいえ</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>ログイン頻度</option>
          <option value={true}>多い</option>
          <option value={false}>少ない</option>
        </select>
        <textarea
          name="desc"
          id="desc"
          rows="2"
          placeholder="自己紹介"
        />
        <button type="submit">新規登録</button>
      </form>
    </div>
  );
};

export default AddUserPage;