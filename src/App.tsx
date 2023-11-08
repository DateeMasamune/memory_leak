import { Outlet } from "react-router-dom";
import { TopMenu } from "./components/TopMenu";
import "./global.scss";

function App() {
  return (
    <main className="main_container">
      <TopMenu />
      <Outlet />
    </main>
  );
}

export default App;
