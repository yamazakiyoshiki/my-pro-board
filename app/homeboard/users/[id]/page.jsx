import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill/>
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>ユーザーネーム</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>メールアドレス</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>パスワード</label>
          <input type="password" name="password" />
          <label>電話番号</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>住所</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>認証</label>
          <input
            type="text"
            name="isAdimin"
            placeholder={user.isAdmin?"ログインユーザー" : "ゲストユーザー"}
            className={styles.readonly}
            readOnly
          />
          <label>ログイン頻度</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive.toString()? "多い" : "少ない"}>
            <option value={true}>多い</option>
            <option value={false}>少ない</option>
          </select>
          <label>自己紹介</label>
          <textarea type="text" name="desc" placeholder={user.desc}/>
          <button>情報を更新</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;