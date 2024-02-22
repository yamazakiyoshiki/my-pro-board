import { fetchUserPosts } from "@/app/lib/data";
import { deleteProblem } from "@/app/lib/actions";
import { auth } from "@/app/auth";
import styles from "@/app/ui/homeboard/problems/mypost/mypost.module.css";
import Search from "@/app/ui/homeboard/search/search";
import Pagination from "@/app/ui/homeboard/pagination/pagination";
import Link from "next/link";

const MyPostPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {user} = await auth();
  const { count, posts } = await fetchUserPosts(q, page, user.username);
  const userPosts = posts.filter(post => post.username === user.username);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="問題を検索..." />
        <Link href="/homeboard/problems/add">
          <button className={styles.addButton}>新規作成</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>タイトル</td>
            <td className={styles.spHidden}>詳細</td>
            <td className={styles.spHidden}>レベル</td>
            <td>作成日</td>
            <td>投稿者</td>
            <td>投稿</td>
          </tr>
        </thead>
        <tbody>
          {userPosts.map((post) => (
            <tr key={post.id}>
              <td>
                <div className={styles.post}>
                  {post.title > 20 ?
                  `${post.title.substring(0, 20)}...` : post.title}
                </div>
              </td>
              <td className={styles.spHidden}>
                {post.desc.length > 20 ? `${post.desc.substring(0, 20)}...` : post.desc}
              </td>
              <td className={styles.spHidden}>{post.level}</td>
              <td>{post.createdAt?.toString().slice(4, 16)}</td>
              <td>{post.username}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/homeboard/problems/${post.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      編集
                    </button>
                  </Link>
                  <form action={deleteProblem}>
                    <input type="hidden" name="id" value={post.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      削除
                    </button>
                  </form>
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

export default MyPostPage;