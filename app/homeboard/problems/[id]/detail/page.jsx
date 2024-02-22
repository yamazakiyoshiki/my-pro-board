import { fetchProblem } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/problems/detailProblem/detail.module.css";
import Image from "next/image";
import Link from "next/link";

const DetailProblemPage = async ({ params }) => {
  const { id } = params;
  const problem = await fetchProblem(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproblem.jpg" alt="" fill />
        </div>
        {problem.title}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>タイトル</label>
          <input type="text" name="title" placeholder={problem.title} readOnly />
          <label>ステップ数</label>
          <input type="number" name="step" placeholder={problem.step} readOnly />
          <label>難易度</label>
            <input type="text" name="level" placeholder={problem.level} readOnly />
          <label>カテゴリー</label>
            <input type="text" name="cat" placeholder={problem.cat} readOnly />
          <label>問題の詳細</label>
          <textarea
            name="desc"
            rows="10"
            placeholder={problem.desc}
            readOnly
          />
          <Link href="/homeboard/problems">
          <button>戻る</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DetailProblemPage;