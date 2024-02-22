import { fetchProblems } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/problems/problems.module.css";
import Search from "@/app/ui/homeboard/search/search";
import Pagination from "@/app/ui/homeboard/pagination/pagination";
import Link from "next/link";

const ProblemsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, problems } = await fetchProblems(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="問題を検索..." />
        <Link href="/homeboard/problems/add">
          <button className={styles.createButton}>
            新規作成
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>タイトル</td>
            <td className={styles.spHidden}>カテゴリー</td>
            <td className={styles.spHidden}>レベル</td>
            <td>作成日</td>
            <td>投稿者</td>
            <td>編集</td>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>
                <div className={styles.problem}>
                  {problem.title > 20 ?
                  `${problem.title.substring(0, 15)}...` : problem.title}
                </div>
              </td>
              <td className={styles.spHidden}>{problem.cat}</td>
              <td className={styles.spHidden}>{problem.level}</td>
              <td>{problem.createdAt?.toString().slice(4, 16)}</td>
              <td>{problem.username}</td>
              <td>
                <Link href={`/homeboard/problems/${problem.id}/detail`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    詳細
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProblemsPage;