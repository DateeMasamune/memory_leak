import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Layout } from "../Layout";

export const Timers = () => {
  const time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const saveTime = useRef<{ times: string[] }>({ times: [] });

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCtime(time);
      saveTime.current.times.push(`${time} `);
      console.log('==========>saveTime.', saveTime.current.times);
    }, 1000);
  }, []);

  return (
    <Layout className={styles.center}>
      <div className={styles.wrapper}>
        <div className={styles.clock}>{ctime}</div>
        <div>{saveTime.current.times}</div>
      </div>
    </Layout>
  );
};




















/**
 *   useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCtime(time);
      saveTime.current.times.push(`${time} `);
      console.log('==========>saveTime.', saveTime.current.times);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
 */
