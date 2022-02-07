import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div>
            <div className="login-div">
                <div className="login-id">
                    <input id="id" placeholder="아이디"></input>
                </div>
                <div id="pwd" className="login-pwd">
                    <input placeholder="비밀번호"></input>
                </div>
                <Link to={"/main"}>
                    <button className="login-btn">로그인</button>
                </Link>
                <Link to={"/signup"}>
                    <button className="signup-btn">회원가입</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
