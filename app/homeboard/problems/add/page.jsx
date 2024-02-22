import { auth } from "@/app/auth";
import { addProblem } from "@/app/lib/actions";
import styles from "@/app/ui/homeboard/problems/addProblem/addProblem.module.css";

const AddProblemPage = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      <form action={addProblem} className={styles.form}>
        <input type="text" placeholder="問題のタイトル" name="title" required />
        <select name="cat"  defaultValue="des" >
          <option value="des" disabled>問題のカテゴリーを選択</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="NextJs">Next.Js</option>
          <option value="NuxtJs">Nuxt.Js</option>
        </select>
        <input type="number" placeholder="問題のステップ数" name="step" min={0} max={10} required />
        <select name="level" required defaultValue="level">
          <option value="level" disabled>問題のレベルを選択</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="A">C</option>
        </select>
        <input
          type="hidden"
          name="username"
          defaultValue={user.username}
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="問題を記述"
        />
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default AddProblemPage;