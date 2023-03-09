import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }


    render() {

       
        return (
            <Fragment>
                <div className="navbar n">
                    <div className="brand n">
                        <img alt="" src='/images/logo.png' className="logo" />
                    </div>
                    {/* <i class='bx bx-menu' onClick={this.handleShowNavbar} style={{ fontSize: "5rem", color: "#fff" }} id="#menu-icon" ></i> */}
                    {/* <div className={`nav-elements  ${this.state.showNavbar && 'active'}`}>
                    <ul>

                        <Link to="/Home" class="active">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/colorize">Colorize</Link>
                        <Link to="/enhance">Enhance</Link>
                        <Link to="/Pricing">Pricing</Link>
                    </ul>
                    </div> */}
                    <div className={`nav-items ${this.state.isOpen && "open"}`}>
                        <a href="/Home">Home</a>
                        <a href="/about">About</a>
                        <a href="/colorize">Colorize</a>
                        <a href="/enhance">Enhance</a>
                    </div>
                    <div
                        className={`nav-toggle ${this.state.isOpen && "open"}`}
                        onClick={() => this.setState({isOpen:!this.state.isOpen})}
                    >
                        <div className="bar"></div>
                    </div>
                    {
                        localStorage.getItem("idAdmin") != null ?
                            <div className="btn_header n" >
                                <a href="/Logout">
                                    <button className="btn_Header_Login">Logout</button>
                                </a>
                            </div>
                            :
                            <div className="btn_header n" >
                                <a href="/Login">
                                    <button className="btn_Header_Login">Login</button>
                                </a>
                            </div>
                    }
                </div>
                <div className="img_Header">
                    <img src={this.props.image}></img>
                    <div className="up_to_background_image"> <h1>{this.props.up_image}</h1></div>
                </div>
            </Fragment>
        );
    }
}
export default Header;