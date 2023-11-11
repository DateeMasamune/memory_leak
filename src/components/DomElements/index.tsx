import { useEffect, useRef } from "react";
import { Layout } from "../Layout";
import { Button } from "@mui/material";

export const DomElements = () => {
  const elements = useRef<HTMLDivElement[]>([])

  const createElements = () => {
    for (let i = 0; i < 70_000; i++) {
      const element = document.createElement('div')
      element.innerText = `element number ${i}`
      elements.current.push(element)
    }
  }

  const addElements = () => {
    for(let elem of elements.current) {
      document.getElementById('dom')?.append(elem)
    }
  }

  const removeAllElements = () => {
    for (let element of elements.current) {
      element.remove()
    }
  }

  useEffect(() => {
    createElements()
    addElements()
  }, [])

  return (
    <Layout>
      <Button onClick={() => removeAllElements()}>Удалить все элементы</Button>
      <div id="dom" />
    </Layout>
  )
};


















/**
 *   const removeAllElements = () => {
    for(let element of elements.current) {
      element.remove()
    }
    elements.current = []
    console.log('==========>elements.current', elements.current);
  }
 */
