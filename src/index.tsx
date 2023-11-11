import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Timers } from "./components/Timers";
import { EventsCallback } from "./components/EventsCallback";
import { DomElements } from "./components/DomElements";
import { ClosureRef } from "./components/ClosureRef";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const childrenRoutesApp = [
  {
    path: "timers",
    name: "Таймеры",
    element: <Timers />,
  },
  {
    path: "events-callback",
    name: "События",
    element: <EventsCallback />,
  },
  {
    path: "dom-elements",
    name: "Дом елементы",
    element: <DomElements />,
  },
  {
    path: "closure-ref",
    name: "Ссылки из замыканий",
    element: <ClosureRef />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: childrenRoutesApp,
  },
]);

root.render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
