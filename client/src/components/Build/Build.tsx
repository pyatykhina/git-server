import React from "react";
import "./Build.scss";
import moment from "moment";

import done from "../../assets/images/done.svg";
import pending from "../../assets/images/pending.svg";
import fail from "../../assets/images/fail.svg";
import branch from "../../assets/images/branch.svg";
import author from "../../assets/images/author.svg";
import calendar from "../../assets/images/calendar.svg";
import watch from "../../assets/images/watch.svg";

function Build({ variant, buildNumber, commitMessage, branchName, commitHash, authorName, status, start, duration }: IBuild) {
    return (
        <>
            <li className="build">
                <div>
                    {status === "Waiting" && <img alt="pending" src={pending} className="build-status"/>}
                    {status === "InProgress" && <img alt="pending" src={pending} className="build-status"/>}
                    {status === "Success" && <img alt="done" src={done} className="build-status"/>}
                    {status === "Fail" && <img alt="fail" src={fail} className="build-status"/>}
                    {status === "Canceled" && <img alt="fail" src={fail} className="build-status"/>}
                </div>
                <span className={`build-info ${variant === "opened" && "build-info-opened"}`}>
                    <div>
                        <div className="build-line">
                            <div className={`build__number build__number-${status}`}>#{buildNumber}</div>
                            <div className="build__title">{commitMessage}</div>
                        </div>
                        <div className="build-line">
                            <div className="build-line-subline build-line-subline-xs">
                                <img alt="branch" src={branch} className="build__icon" />
                                <div className="build__branch">{branchName}</div>
                                <div className="build__hash">{commitHash?.substr(0, 7)}</div>
                            </div>
                            <div className="build-line-subline">
                                <img alt="author" src={author} className="build__icon" />
                                <div className="build__author">{authorName}</div>
                            </div>
                        </div>
                    </div>

                    {variant === "opened" && <div className="build-divider"/>} 
                    {variant !== "opened" && <div className="build-divider build-divider-constant"/>} 

                    <div className={`${variant !== "opened" && "build-block"}`}>
                        <div className={`build-line build-line-constant ${variant === "opened" && "build-line-opened"}`}>
                            {start && <div className="build-line-subline">
                                <img alt="calendar" src={calendar} className="build__icon" />
                                <div className={`build__time ${variant === "opened" && "build__time-opened"}`}>
                                    {moment(`${start}Z`).format("DD MMMM, HH:mm")}
                                </div>
                            </div>}
                        </div>
                        <div className={`build-line build-line-constant ${variant === "opened" && "build-line-opened"}`}>
                            {duration && <div className="build-line-subline">
                                <img alt="watch" src={watch} className="build__icon" />
                                <div className={`build__time ${variant === "opened" && "build__time-opened"}`}>
                                    {moment(duration).format("HH ч mm мин")}
                                </div>
                            </div>}
                        </div>
                    </div>
                </span>
            </li>
        </>
    )
}

export default Build;

interface IBuild {
    variant?: "opened", 
    buildNumber: number, 
    commitMessage: string, 
    branchName: string, 
    commitHash: string, 
    authorName: string, 
    status: "Waiting" | "InProgress" | "Success" | "Fail" | "Canceled", 
    start: string, 
    duration: number
}
