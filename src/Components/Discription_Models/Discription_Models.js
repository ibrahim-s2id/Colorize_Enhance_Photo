import React from "react";
import "./Dic_Mod.css";
import Content_model from "./Content_model";

class Examples extends React.Component {
    render() {
        return (
            <div className="examples">
                <div className="examples-sub">
                    <h1 className="op">Powerful AI tools help you improve and restore old pictures</h1>
                </div>
                <div className="examples-component">
                    <Content_model position="left" title="Enhancer" dis="Trained by thousands of HD picture, AI Image Enhancer could fix the blurry pictures and make them high definition." />
                    <Content_model position="right" title="Colorizer" dis="Image Colorizer is our basic AI feature that could add color to black and white pictures naturally." />
                </div>
            </div>
        );
    }
}
export default Examples;