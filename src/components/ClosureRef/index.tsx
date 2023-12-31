import { Button } from "@mui/material";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";

let closure = () => {
  let cache: number[] = [];

  return () => {
    const data = Array(10000).fill(10);
    cache = [...cache, ...data];
    console.log("==========>cache", cache);
  };
};

let leakClosure: (() => void) | null = closure();

const removeClouser = () => {
  
};

export const ClosureRef = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        {/* @ts-ignore */}
        <Button onClick={leakClosure}>Создать утечку памяти</Button>
        <Button onClick={removeClouser}>Устранить утечку памяти</Button>
      </div>
    </Layout>
  );
};
























/**
 * const removeClouser = () => leakClosure = null
 */
