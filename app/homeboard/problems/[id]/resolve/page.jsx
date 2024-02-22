import { fetchProblem } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/resolve/resolve.module.css";

const SingleResolvePage = async ({params}) => {
  const { id } = params;
  const problem = await fetchProblem(id);
  return (
    <div className={styles.container}>
      <div className={styles.problem}>
        <div className={styles.header}>
          <h1>{problem.title}</h1>
          <span className={`${styles.level} ${styles[problem.level]}`}>{problem.level}レベル</span>
          <span className={`${styles.cat} ${styles[problem.cat]}`}>{problem.cat}</span>
        </div>
        <p className={styles.desc}>{problem.desc}</p>
      </div>
    </div>
  );
};

export default SingleResolvePage;
