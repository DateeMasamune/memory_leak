import { Button } from "@mui/material";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";

export const GlobalVariables = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Button>Запустить утечку памяти</Button>
        <Button>Убрать утечку памяти утечку памяти</Button>
      </div>
    </Layout>
  );
};
