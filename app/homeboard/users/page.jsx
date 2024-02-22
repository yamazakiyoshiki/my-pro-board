import { auth } from "@/app/auth";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/homeboard/pagination/pagination";
import Search from "@/app/ui/homeboard/search/search";
import styles from "@/app/ui/homeboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);
  const authUser = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="ユーザーを検索..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>名前</td>
            <td className={styles.userEmail}>メールアドレス</td>
            <td>開設日</td>
            <td className={styles.admin}>アカウント</td>
            <td>使用頻度</td>
            <td>情報</td>
          </tr>
        </thead>
        <tbody>
          {users.filter(user => user.id !== authUser.id).map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td className={styles.userEmail}>{user.email ? user.email : "未登録"}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td className={styles.admin}>{user.isAdmin ? "認証済み" : "ゲスト"}</td>
              <td>{user.isActive ? "多い" : "少ない"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/homeboard/users/${user.id}/profile`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      プロフィール
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;