import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form } from "react-bootstrap";

export default function Login(props) {
    return (
        <LoginModalBlack>
            <LoginModalMain>
                <button
                    type="button"
                    className="btn-close btn-close-white float-end"
                    aria-label="Close"
                    onClick={() => {
                        props.setModal(false);
                    }}
                />
                <h1 className="text-center">로그인</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <InputStyle
                            type="email"
                            placeholder="이메일"
                            onChange
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <InputStyle type="pwd" placeholder="비밀번호" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input type="checkbox" name="xxx" value="yyy" />
                        <span> 로그인 상태 유지</span>
                    </Form.Group>
                    <Link to="/daily">
                        <LoginBtn
                            type="submit"
                            onClick={() => {
                                props.setModal(false);
                            }}
                        >
                            로그인
                        </LoginBtn>
                    </Link>
                    <Link to="/signup">
                        <SignupBtn
                            onClick={() => {
                                props.setModal(false);
                            }}
                        >
                            회원가입
                        </SignupBtn>
                    </Link>
                </Form>
            </LoginModalMain>
        </LoginModalBlack>
    );
}
const LoginModalBlack = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.3);
`;
const LoginModalMain = styled.div`
    width: 70vw;
    max-width: 500px;
    height: 580px;
    padding: 50px;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: 10vh;
    background-color: #2c3333;
    color: #faeee7;
    h1 {
        font-family: "cafe-font-bold";
        font-size: 40px;
        margin: 40px;
    }
`;
const InputStyle = styled(Form.Control)`
    width: 100%;
    height: 50px;
    border-radius: 7px;
    border: none;
`;
const LoginBtn = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 7px;
    border: none;
    background-color: #325288;
    color: white;
    margin-top: 20px;
`;
const SignupBtn = styled(LoginBtn)`
    background-color: #8ac1a7;
`;
