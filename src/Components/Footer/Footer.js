import React from "react";
import { Component } from "react";
import "./footer.css"
export default  class Footer extends Component {
    render(){
        return(
            <footer className="page-footer font-small stylish-color-dark">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-12 heading-3">
                        <h5 className="w">About</h5>
                        <p className="t">Colorize pictures with AI, turning black and white photos to color in seconds. Reimagine the past by colorizing pictures of ancestors and historic figures.</p>
                        <p className="t">Enhance and fix blurry pictures intelligently with deblur technology.</p>
                    </div>
                    <div className="col-lg-2 col-md-4 col-12">
                        <h5 className="w">Account</h5>
                        <ul className="link">
                            <li >
                                <a className="link" href="">My Account</a>
                            </li>
                            <li>
                                <a href="/Login">Login</a>
                            </li>
                            <li>
                                <a href="">settings</a>
                            </li>
                            <li>
                                <a href="">support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-12">
                        <h5 className="w">Navigation</h5>
                        <ul className="link">
                            <li>
                                <a href="/Home">Home</a>
                            </li>
                            <li>
                                <a href="/About">About Us</a>
                            </li>
                            <li>
                                <a href="blog.html">Read Blog</a>
                            </li>
                            <li>
                                <a href="/colorize">Colorize</a>
                            </li>
                            <li>
                                <a href="/enhance">Enhance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3  col-md-4 col-12 social">    
                        <img className="ooo" src="/images/logo.png" alt="pay-cards"/>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}
