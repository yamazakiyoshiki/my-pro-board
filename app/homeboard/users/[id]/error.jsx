"use client";

import styles from "@/app/ui/error.module.css";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className={styles.container}>
      <h2>既に存在するユーザー名かもしれません。</h2>
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