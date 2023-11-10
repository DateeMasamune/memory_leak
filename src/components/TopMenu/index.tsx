import { useNavigate } from "react-router-dom";
import { childrenRoutesApp } from "../..";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./styles.module.scss";

export const TopMenu = () => {
  const navigate = useNavigate();
  const routeList = childrenRoutesApp?.map(({ path, name }) => ({
    path,
    name,
  }));

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.topMenu}>
        <li>
          <Button variant="contained" onClick={() => navigate('/')}>
            <HomeIcon />
          </Button>
        </li>
        {routeList?.map(({ path, name }) => (
          <li key={name}>
            <Button variant="contained" onClick={() => navigate(path)}>
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
