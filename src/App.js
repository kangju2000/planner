import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useContext} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import BtmBar from "./components/BtmBar";
import Login from "./components/Login";
import Signup from "./pages/Signup";
import Planner from "./pages/Planner";
import Month from "./pages/Month"
import Week from "./pages/Week"

function App() {
    const [modal, setModal] = useState(false);
    return (
        <div className="App">
            {modal === true ? <Login setModal={setModal} /> : null}

            <NavBar setModal={setModal} />
            <BtmBar />

            <Switch>
                <Route exact path="/">
                    <div className="main-contents">
                        <div className="main-title">
                            <span>플래너</span>
                        </div>
                        <div className="text-center">
                            <button
                                className="main-start-btn"
                                onClick={() => {
                                    setModal(true);
                                }}
                            >
                                시작하기
                            </button>
                        </div>
                    </div>
                </Route>
                <Route path="/daily">
                    <Planner />
                </Route>
                <Route path="/weekly">
                    <Week />
                </Route>
                <Route path="/monthly">
                    <Month />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
