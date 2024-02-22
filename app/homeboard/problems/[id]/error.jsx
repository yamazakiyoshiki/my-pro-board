"use client";

import styles from "@/app/ui/error.module.css";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className={styles.container}>
      <h2>問題のタイトルが他に投稿された問題と被ってる恐れがあります</h2>
      <button
        onClick={
          () => reset()
        }
      >
        もう一度試す
      </button>
    </div>
  );
}