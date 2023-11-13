import { Layout } from "../Layout";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export const EventsCallback = () => {
  const [coords, setCoords] = useState({ y: 0, x: 0 });
  const saveCoords = useRef<string[]>([]);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const coord = {
        y: event.clientY,
        x: event.clientX,
      };
      setCoords(coord);
      saveCoords.current.push(...Array(10000).fill(JSON.stringify(coord)));
      console.log("==========>saveCoords", saveCoords);
    })

  }, []);

  return (
    <Layout className={styles.center}>
      <div>Координаты Y: {coords.y}</div>
      <div>Координаты X: {coords.x}</div>
    </Layout>
  );
};




























/**
 *   const handlerCoords = (event: MouseEvent) => {
    const coord = {
      y: event.clientY,
      x: event.clientX,
    };
    setCoords(coord);
    saveCoords.current.push(...Array(10000).fill(JSON.stringify(coord)));
    console.log("==========>saveCoords", saveCoords);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlerCoords);

    return () => {
      window.removeEventListener("mousemove", handlerCoords);
    };
  }, []);
 */