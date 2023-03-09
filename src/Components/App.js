import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Container/multyimage.js';
import Colorizepage from "./Reactjava/Colorize_Enhance_page";
import Login from "./Login/Login.js";
import Register from './Login/Register';
import Home from './Reactjava/Home';
import Logout from "./Login/Logout";

class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/colorize" element={<Colorizepage
                        up_image="Best Picture Colorizer that Adds Color to Black and White Old Pictures. No Account Needed!"
                        imgURL="/images/colorize-bg.jpg"
                        type="colorize"
                    />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/enhance" element={<Colorizepage
                        up_image="Enhance and fix your blurry, low-definition old photos."
                        imgURL="/images/enhance-bg.jpg"
                        type="enhance"
                    />} />
                    <Route path="/Logout" element={<Logout />} />
                </Routes>
            </div>
        )
    }
}
export default App;