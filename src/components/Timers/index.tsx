import { useEffect, useState } from "react";
import styles from './styles.module.scss'
import { Layout } from "../Layout";

export const Timers = () => {
  const time = new Date().toLocaleTimeString()
  const [ctime, setTime] = useState(time)

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString()
      setTime(time)
    })
  }, [])

  return (
    <Layout className={styles.center}>
      <div className={styles.wrapper}>
        <div className={styles.clock}>{ctime}</div>
      </div>
    </Layout>
  )
};
