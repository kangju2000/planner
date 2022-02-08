import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Planner(props) {
    let [plan, setPlan] = useState([
        { a: "수학", b: "기출1회", c: " " },
        { a: "영어", b: "수특 1강풀기", c: "v" },
    ]);
    return (
        <div>
            <MainPlanner>
                <PlannerHeader>
                    <PlannerTitle>
                        <p>Seize the day</p>
                    </PlannerTitle>
                    <PlannerDate>
                        <MediumFont border={"2px solid"}>
                            <p>Date</p>
                        </MediumFont>
                        <MediumFont border={"2px solid"}>
                            <p>D - Day</p>
                        </MediumFont>
                        <LargeFont border={"2px solid"}>
                            <p>D - ??</p>
                        </LargeFont>
                        <LargeFont border={"2px solid"}>
                            <p>
                                <SelectTime></SelectTime>H
                                <SelectTime> </SelectTime>M
                            </p>
                        </LargeFont>
                    </PlannerDate>
                </PlannerHeader>
                <PlannerBody>
                    <Plan>
                        <MediumFont>
                            <p>Music</p>
                        </MediumFont>
                        <table>
                            <thead></thead>
                            <tbody>
                                {plan.map(function (a, i) {
                                    return (
                                        <AddPlan
                                            plan={a}
                                            alignCenter={props.alignCenter}
                                            key={i}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                        <AddPlanBtn
                            onClick={() => {
                                let newPlan = [...plan];
                                newPlan.unshift({
                                    a: "과목",
                                    b: "대충 계획 내용",
                                    c: "?",
                                });
                                setPlan(newPlan);
                            }}
                        >
                            + add plan
                        </AddPlanBtn>
                    </Plan>
                    <TimeTable>
                        <MediumFont>Time Table</MediumFont>
                    </TimeTable>
                </PlannerBody>
            </MainPlanner>
        </div>
    );
}

function AddPlan(props) {
    return (
        <tr>
            <td>{props.plan.a}</td>
            <td>{props.plan.b}</td>
            <td className="text-center">{props.plan.c}</td>
        </tr>
    );
}

const MainPlanner = styled.div`
    width: 100vw;
    height: 100vh;
`;
const PlannerHeader = styled.div`
    display: flex;
    padding-top: 65px;
    width: 100%;
    height: 300px;
`;
const MediumFont = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 5px;
    border-bottom: ${(props) => props.border || "none"};
`;
const LargeFont = styled(MediumFont)`
    text-align: center;
    font-size: 30px;
`;
const PlannerTitle = styled(LargeFont)`
    width: 60%;
`;
const PlannerDate = styled.div`
    width: 40%;
    max-width: 500px;
    padding: 10px;
`;
const PlannerBody = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
`;
const Plan = styled.div`
    width: 60%;
    padding: 10px;
`;
const TimeTable = styled.div`
    width: 40%;
    max-width: 500px;
    padding: 10px;
`;
const AddPlanBtn = styled.button`
    margin: 10px;
    float: right;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 1px 1px gray;
`;
const SelectTime = styled.select``;

export default Planner;
