import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Planner from "./Planner.js";
import Login from "./Login.js";

function App() {
    return (
        <div className="App">
            <Navbar expand={false} className="nav-bar">
                <div className="nav-container">
                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar"
                        className="nav-side-button"
                    />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        className="side-bar"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                PLANNERr
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Brand className="nav-title">
                        <Link
                            to="/"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            PLANNER
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link
                            to="/login"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            Login
                        </Link>
                    </Navbar.Brand>
                </div>
            </Navbar>

            <Switch>
                <Route exact path="/">
                    <div className="main-contents">
                        <div className="main-title">
                            <span>
                                나만의
                                <br />
                                플래너
                            </span>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Link to="/main">
                                <button className="main-start-btn">
                                    시작하기
                                </button>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route path="/main">
                    <Planner />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
