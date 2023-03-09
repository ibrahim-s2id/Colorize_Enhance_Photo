import React from "react";
import "./Dic_Mod.css";

const Content_model = (props) => {
    return (
        <div className={`example-component-${props.position}`}>
            <div className={`image-left`}>
                <img src={`/images/icon-${props.position}.png`} />
            </div>
            <div className={`sub-left`}>
                <h3>Image {props.title}</h3>
                <p>{props.dis}</p>
            </div>
        </div>
    );
}
export default Content_model