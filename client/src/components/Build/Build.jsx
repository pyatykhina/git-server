import React from "react";
import "./Build.scss";

import done from "../../assets/images/done.svg";
import branch from "../../assets/images/branch.svg";
import author from "../../assets/images/author.svg";
import calendar from "../../assets/images/calendar.svg";
import watch from "../../assets/images/watch.svg";

function Build() {
    return (
        <>
            <li className="build">
                <span className="build-info">
                    <div>
                        <img alt="done" src={done} className="build-status"/>
                    </div>
                    <div>
                        <div className="build-line">
                            <div className="build__number">#1368</div>
                            <div className="build__title">add documentation for postgres scaler</div>
                        </div>
                        <div className="build-line">
                            <img alt="branch" src={branch} className="build__icon" />
                            <div className="build__branch">master</div>
                            <div className="build__hash">9c9f0b9</div>
                            <img alt="author" src={author} className="build__icon" />
                            <div className="build__author">Philip Kirkorov</div>
                        </div>
                    </div>
                </span>
                <div>
                    <div className="build-line">
                        <img alt="calendar" src={calendar} className="build__icon" />
                        <div className="build__time">21 янв, 03:06</div>
                    </div>
                    <div className="build-line">
                        <img alt="watch" src={watch} className="build__icon" />
                        <div className="build__time">1 ч 20 мин</div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Build;
