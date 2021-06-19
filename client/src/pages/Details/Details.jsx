import React from "react";
import "./Details.scss";

function Details(props) {
    return (
        <div>Details {props.match.params.number}</div>
    )
}

export default Details;
