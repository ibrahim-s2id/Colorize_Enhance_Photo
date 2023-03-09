import React from "react";
import "./Photos.css"
import Photo_row from "./Photo_row";

class Photos extends React.Component {
    render() {
        return (
            <div className="photos">
                <Photo_row title="Colorize" row="row1" img1="grayscale.png" img2="predirecated-image.jpg" img3="orginal-image.png" />
                <Photo_row title="Enhance" row="row2" img1="low-resolution.png" img2="predirected-image.png" img3="orginal-image-enhance.png" />
                <div className="photo-footer">
                    {/* <div className="photo-footer-left">
                        <img src="/images/icon1.png" />
                        <div className="footer-left-text">
                            <p>“Colorizer works like magic. It is just changes your black and white photo into color in just a few clicks. The images look like they were taken using a digital camera.”</p>
                        </div>
                    </div>
                    <div className="photo-footer-right">
                        <img src="/images/icon1.png" />
                        <div className="footer-left-text">
                            <p>“The enhance option needs tweaking, but it’s alright. The colorization option is very good, it’s very easy to use and really fun! I hope this developer continues to improve its accuracy, it is a very good app!”</p>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}
export default Photos;