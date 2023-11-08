import { Layout } from "../Layout";
import { useCallback, useEffect, useState } from "react";
import styles from './styles.module.scss'

export const EventsCallback = () => {
  const [coords, setCoords] = useState({ y: 0, x: 0 })

  const handlerCoords = useCallback((event: MouseEvent) => {
    setCoords({
      y: event.clientY,
      x: event.clientX
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handlerCoords)

    return () => {
      window.removeEventListener('mousemove', handlerCoords)
    }
  }, [handlerCoords])

  return (
    <Layout className={styles.center}>
      <div>Координаты Y: {coords.y}</div>
      <div>Координаты X: {coords.x}</div>
    </Layout>
  )
};
