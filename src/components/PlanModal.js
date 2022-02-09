import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function PlanModal(props) {
    return (
        <AddPlanModalBlack>
            <AddPlanModalMain>
                <h1>일정 추가</h1>
                <Box width="100%" height="350px">
                    <PlanDiv label="분류" height="40px" />
                    <PlanDiv label="내용" height="100px" />
                </Box>
                <PlanBtn onClick={() => {
                    // 입력한 값 저장 후 닫기
                    props.setPlanModal(false);
                }}>저장</PlanBtn>
                <PlanBtn
                    color="#8ac1a7"
                    onClick={() => {
                        props.setPlanModal(false);
                    }}
                >
                    닫기
                </PlanBtn>
            </AddPlanModalMain>
        </AddPlanModalBlack>
    );
}

function PlanDiv(props) {
    const InputDiv = styled.div`
        width: 100%;
        display: flex;
        label {
            margin: 20px;
        }
    `;
    const InputPlan = styled.textarea`
        margin: 10px;
        width: 70%;
        height: ${(props) => props.height || "auto"};
        resize: none;
    `;

    return (
        <InputDiv>
            <label>{props.label}</label>
            <InputPlan height={props.height} />
        </InputDiv>
    );
}

const Box = styled.div`
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
`;

const AddPlanModalBlack = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.3);
`;

const AddPlanModalMain = styled.div`
    width: 70vw;
    max-width: 500px;
    height: 580px;
    padding: 10px;
    padding-top: 50px;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: 10vh;
    background-color: #2c3333;
    color: #faeee7;
    text-align: center;
    h1 {
        margin-bottom: 40px;
    }
`;
const PlanBtn = styled.button`
    width: 40%;
    height: 50px;
    margin: 10px;
    border-radius: 7px;
    border: none;
    background-color: ${(props) => props.color || "#325288"};
    color: #faeee7;
`;
