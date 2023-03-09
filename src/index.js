import React from "react";
import  ReactDOM from "react-dom";
import App from './Components/App.js';
import './Components/css/style.css';
import './Components/Container/image_enhance_animation.css';
import './Components/Container/image_colorize_animation.css';
import './Components/Reactjava/Colorize_Enhance_page';
import { BrowserRouter } from "react-router-dom";
import './Components/css/Card_Color_enhanc.css';


ReactDOM.render(
 <BrowserRouter>
    <App/>
 </BrowserRouter>
,document.getElementById('root'));