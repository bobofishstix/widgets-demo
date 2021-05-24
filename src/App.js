import "./App.css";
import Home from "./components/Home/home.jsx";
import Minesweeper from "./components/Minesweeper/minesweeper.jsx";
import EightBall from "./components/EightBall/eightBall.jsx";
import Board from "./components/TTT/ttt-board.jsx";
import NavBar from "./components/NavBar/navbar.jsx";
import Sidebar from "./components/NavBar/sidebar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="global" id="outer-container">
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <NavBar />
        <Router>
          <div className="main">
            <Route path="/" exact component={Home} />
            <Route path="/minesweeper" exact component={Minesweeper} />
            <Route path="/ball" exact component={EightBall} />
            <Route path="/ttt" exact component={Board} />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
