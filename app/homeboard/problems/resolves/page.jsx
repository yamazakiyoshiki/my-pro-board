import { fetchProblems } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/problems/resolveProblem/resolves.module.css";
import Search from "@/app/ui/homeboard/search/search";
import Pagination from "@/app/ui/homeboard/pagination/pagination";
import Link from "next/link";

const ResolvesProblemPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, problems } = await fetchProblems(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="問題を検索..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>タイトル</td>
            <td className={styles.spHidden}>詳細</td>
            <td>レベル</td>
            <td>作成日</td>
            <td className={styles.spHidden}>ステップ数</td>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>
                <div className={styles.problem}>
                  {problem.title}
                </div>
              </td>
              <td className={styles.spHidden}>{problem.desc.length >
                20 ? `${problem.desc.substring(0, 20)}...` : problem.desc}</td>
              <td>{problem.level}</td>
              <td>{problem.createdAt?.toString().slice(4, 16)}</td>
              <td className={styles.spHidden}>{problem.step}ステップ</td>
              <td>
                <Link href={`/homeboard/problems/${problem.id}/resolve`}>
                  <button className={styles.button}>
                    チャレンジ
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ResolvesProblemPage;
