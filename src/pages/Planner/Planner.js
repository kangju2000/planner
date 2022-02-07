import React, { useEffect, useState } from "react";
import "./Planner.css";

function Planner(props) {
    let [plan, setPlan] = useState([
        { a: "수학", b: "기출1회", c: " " },
        { a: "영어", b: "수특 1강풀기", c: "v" },
    ]);
    return (
        <div>
            <div className="main-planner">
                <div className="planner-header">
                    <div className="planner-title large-font-style">
                        <p>Seize the day</p>
                    </div>
                    <div className="planner-date">
                        <p className="medium-font-style">Date</p>
                        <p className="medium-font-style">D - Day</p>
                        <p className="large-font-style">D - ??</p>
                        <p className="large-font-style">??H ??M</p>
                    </div>
                </div>
                <div className="planner-body">
                    <div className="plan">
                        <div className="medium-font-style">Music</div>
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
                        <button
                            className="add-plan-btn"
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
                        </button>
                    </div>
                    <div className="timetable">
                        <p className="medium-font-style">Time Table</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AddPlan(props) {
    return (
        <tr>
            <td>{props.plan.a}</td>
            <td>{props.plan.b}</td>
            <td style={props.alignCenter}>{props.plan.c}</td>
        </tr>
    );
}

export default Planner;
