import React from "react";
import "./Card_Home_page.css"

const Card_Content = (props) => {
    return (
        <div className="articale-content">
            <h2 className="card-title"> {props.titel}</h2>
            <p className="card-explan">{props.disc}</p>
            <a name="" id="" className="btn btn-primary" href="/colorize" role="button">{props.type} Photo</a>
        </div>
    );
}
export default Card_Content