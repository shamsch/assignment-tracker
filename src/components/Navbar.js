import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./SearchBar.js";
import { useMode } from "../hooks/useMode";
import modeIcon from "../asset/mode.svg";

export default function NavBar() {
  const { mode, changeMode } = useMode();

  const toggleMode = () => {
    mode === "dark" ? changeMode("white") : changeMode("dark");
    //console.log(mode);
  };

  return (
    <div>
      <div className="navbar">
        <nav>
          <Link to={"/home"} className="brand">
            <h1>Assignment Tracker</h1>
          </Link>
          <Searchbar />
          <Link to={"/create"}>Create Assignment</Link>
        </nav>
      </div>
      <div className="mode-div">
        <img src={modeIcon} alt="Mode Icon" onClick={toggleMode}></img>
      </div>
    </div>
  );
}
