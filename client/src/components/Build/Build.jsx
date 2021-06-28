import React from "react";
import "./Build.scss";

import done from "../../assets/images/done.svg";
import branch from "../../assets/images/branch.svg";
import author from "../../assets/images/author.svg";
import calendar from "../../assets/images/calendar.svg";
import watch from "../../assets/images/watch.svg";

function Build({ variant, buildNumber, commitMessage, branchName, commitHash, authorName }) {
    return (
        <>
            <li className="build">
                <div>
                    <img alt="done" src={done} className="build-status"/>
                </div>
                <span className={`build-info ${variant === "opened" && "build-info-opened"}`}>
                    <div>
                        <div className="build-line">
                            <div className="build__number">#{buildNumber}</div>
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
                            <div className="build-line-subline">
                                <img alt="calendar" src={calendar} className="build__icon" />
                                <div className={`build__time ${variant === "opened" && "build__time-opened"}`}>21 янв, 03:06</div>
                            </div>
                        </div>
                        <div className={`build-line build-line-constant ${variant === "opened" && "build-line-opened"}`}>
                            <div className="build-line-subline">
                                <img alt="watch" src={watch} className="build__icon" />
                                <div className={`build__time ${variant === "opened" && "build__time-opened"}`}>1 ч 20 мин</div>
                            </div>
                        </div>
                    </div>
                </span>
            </li>
        </>
    )
}

export default Build;
