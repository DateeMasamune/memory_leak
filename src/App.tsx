import { Outlet } from "react-router-dom";
import { TopMenu } from "./components/TopMenu";
import "./global.scss";

function App() {
  return (
    <div className="container">
      <TopMenu />
      <Outlet />
    </div>
  );
}

export default App;
