import { Layout } from "../Layout";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

/**
 * 
 * Включаю запись бегаю мышкой по экрану без удаления события
 * переключаюсь на пустую страницу бегаю там потом жду и выключаю запись (утечка)
 * 
 * Включаю запись бегаю мышкой по экрану с удалением события
 * переключаюсь на пустую страницу бегаю там потом жду и выключаю запись (устранение утечки)
 */

export const EventsCallback = () => {
  const [coords, setCoords] = useState({ y: 0, x: 0 });
  const saveCoords = useRef<string[]>([]);

  const doSomething = <T,>(gigantObject: T) => gigantObject;

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const coord = {
        y: event.clientY,
        x: event.clientX,
      };
      setCoords(coord);
      saveCoords.current.push(...Array(10000).fill(JSON.stringify(coord)));
      console.log("==========>saveCoords", saveCoords);
      doSomething(saveCoords);
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
    saveCoords.current.push(coord);
    console.log("==========>saveCoords", saveCoords);
    doSomething(saveCoords);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlerCoords);

    return () => {
      window.removeEventListener("mousemove", handlerCoords);
    };
  }, []);
 */