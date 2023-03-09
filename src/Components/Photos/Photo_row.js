import React from "react";

const Photo_row = (props) => {
    return (
        <div className={`${props.row}`}>
            <div className="row111">
                <h1>Exapmle {props.title}</h1>
            </div>
            <div className="photos-row1" >
                <img src={`/images/${props.img1}`} />
                <img src={`/images/${props.img2}`} />
                <img src={`/images/${props.img3}`}/>
            </div>
        </div>
    );
}
export default Photo_row;