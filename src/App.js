import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useContext, lazy, Suspense } from "react";
import { Navbar, Nav, Offcanvas, Form } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup.js";
let Planner = lazy(() => {
    return import("./pages/Planner/Planner.js");
});

function App() {
    var alignCenter = { textAlign: "center" };
    var navColor = { backgroundColor: "#24a19c" };
    const [modal, setModal] = useState(false);
    return (
        <div className="App">
            {modal === true ? <Modal setModal={setModal} /> : null}

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
                        <Offcanvas.Header closeButton style={navColor}>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                PLANNER
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">ㅇㅇ</Nav.Link>
                                <Nav.Link href="#action2">ㅎㅎ</Nav.Link>
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
                        <button
                            className="nav-login-btn"
                            onClick={() => {
                                setModal(true);
                            }}
                        >
                            로그인
                        </button>
                    </Navbar.Brand>
                </div>
            </Navbar>

            <Switch>
                <Route exact path="/">
                    <div className="main-contents">
                        <div className="main-title">
                            <span>플래너</span>
                        </div>
                        <div style={alignCenter}>
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
                <Route path="/main">
                    <Suspense fallback={<div>로딩중이에요</div>}>
                        <Planner alignCenter={alignCenter} />
                    </Suspense>
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </div>
    );
}

function Modal(props) {
    return (
        <div className="login-modal-black">
            <div className="login-modal-main">
                <button
                    type="button"
                    className="btn-close btn-close-white float-end"
                    aria-label="Close"
                    onClick={() => {
                        props.setModal(false);
                    }}
                />

                <h1 className="text-center">Login</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="이메일"
                            className="input-style"
                            onChange
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="pwd"
                            placeholder="비밀번호"
                            className="input-style"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input type="checkbox" name="xxx" value="yyy" />
                        <span> 로그인 상태 유지</span>
                    </Form.Group>
                    <Link to="/main">
                        <button
                            type="submit"
                            className="input-style login-btn"
                            onClick={() => {
                                props.setModal(false);
                            }}
                        >
                            로그인
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button
                            className="input-style signup-btn"
                            onClick={() => {
                                props.setModal(false);
                            }}
                        >
                            회원가입
                        </button>
                    </Link>
                </Form>
            </div>
        </div>
    );
}

export default App;
