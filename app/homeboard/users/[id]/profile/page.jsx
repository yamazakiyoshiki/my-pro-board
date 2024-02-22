import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/users/singleUser/usersProfile/usersProfile.module.css"
import Image from "next/image";
import Link from "next/link";

const ProfilePage = async ({params}) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>ユーザーネーム</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className={styles.readonly}
            readOnly
          />
          <label>認証</label>
          <input
            type="text"
            name="isAdimin"
            placeholder={user.isAdmin?"ログインユーザー" : "ゲストユーザー"}
            className={styles.readonly}
            readOnly
          />
          <label>ログイン頻度</label>
          <input
            type="text"
            name="isActive"
            placeholder={user.isActive? "多い" : "少ない"}
            className={styles.readonly}
            readOnly
          />
          <label>自己紹介</label>
          <textarea
            type="text"
            name="desc"
            placeholder={user.desc}
            className={styles.readonly}
            readOnly
          />
          <Link href="/homeboard/users">
            <button>戻る</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage;
