import { updateProblem } from "@/app/lib/actions";
import { fetchProblem } from "@/app/lib/data";
import styles from "@/app/ui/homeboard/problems/singleProblem/singleProblem.module.css";
import Image from "next/image";

const SingleProblemPage = async ({ params }) => {
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
        <form action={updateProblem} className={styles.form}>
          <input type="hidden" name="id" value={problem.id} />
          <label>タイトル</label>
          <input type="text" name="title" placeholder={problem.title} />
          <label>ステップ数</label>
          <input type="number" name="step" placeholder={problem.step} max="10" />
          <label>難易度</label>
          <select name="level" id="level" defaultValue={problem.level}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <label>カテゴリー</label>
          <select name="cat" id="cat" defaultValue={problem.cat}>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="NextJs">Next.Js</option>
            <option value="NuxtJs">Nuxt.Js</option>
          </select>
          <label>問題の詳細</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={problem.desc}
          ></textarea>
          <button>投稿を更新</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProblemPage;