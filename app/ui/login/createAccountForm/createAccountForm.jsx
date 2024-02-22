"use client";

import { createAccount } from "@/app/lib/actions";
import styles from "@/app/ui/login/createAccountForm/createAccountForm.module.css";
import { useFormStatus, useFormState } from "react-dom";
import Link from "next/link";

const CreateAccountForm = () => {
  const [state, formAction] = useFormState(createAccount, undefined);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Welcome My StudyBoard!!</h2>
          <Link href="/login" className={styles.loginButton}>
            ログイン
          </Link>
        </div>
        <p>アカウントを作成してユーザー登録してください</p>
        <form action={formAction} className={styles.form}>
          <input type="text" placeholder="ユーザーネーム(必須)" name="username" required />
          <input type="email" placeholder="メールアドレス(必須)" name="email" required />
          <input
            type="password"
            placeholder="パスワード(必須)"
            name="password"
            required
          />
          <input type="phone" placeholder="電話番号(任意)" name="phone" />
          <textarea
            name="address"
            id="address"
            rows="1"
            placeholder="住所(任意)"
          />
          <input type="hidden" name="isAdmin" value="true" />
          <input type="hidden" name="isActive" value="true" />
          <textarea
          name="desc"
          id="desc"
          rows="2"
          placeholder="自己紹介(任意)"
          />
          <SingUpButton/>
          <div className={styles.errMessage}>
            {state === "FailedSignUp" && (
              <p>
                サインアップに失敗しました。<br />
                ユーザー名が既に使われているかもしれません。
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

const SingUpButton = () => {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending}>
      新規登録
    </button>
  );
};

export default CreateAccountForm;