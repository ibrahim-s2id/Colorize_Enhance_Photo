import React from "react";
import "./multyimage";
import './imageenhance';
import "./Card_Home_page.css"
import Card_Content from "./Card_Content";
import "./image_enhance_animation.css"
import "./image_colorize_animation.css"
class Container extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="carda">
                    <div class="image">
                        <div class="image__img"></div>
                        <div class="image__img"></div>
                    </div>
                    <Card_Content titel="AI Colorize!" type="Colorize" disc="Colorize pictures with AI, turning black and white photos to color in seconds." />
                </div>
                <div className="carda">
                    <article className="article-card">
                        <figure className="image-card">
                            <div class="banner-wrapper" id="banner-wrapper">
                                <div class="banner design">
                                    <div class="banner-content">
                                        <img src="/images/en3.jpg" />
                                    </div>
                                </div>
                                <div class="banner dev">
                                    <div class="banner-content">
                                        <img src="/images/en4.jpg" />
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <Card_Content titel="AI Enhance!" type="Enhance" disc="Enhance and fix blurry pictures intelligently with deblur technology." />
                    </article>
                </div>
            </div>

        );
    }

}
export default Container;