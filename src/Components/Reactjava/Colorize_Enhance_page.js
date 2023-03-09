import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../Container/multyimage.js';
import Discription_Models from "../Discription_Models/Discription_Models";
import Photos from "../Photos/Photos";
import Card_Color_enhanc from "./Card_Color_enhanc";
import Login from '../Login/Login';

const Colorizepage =(props)=> {
    if (localStorage.getItem("idAdmin") != 0) {
      return (
        <div className="body">
          <Header up_image={props.up_image} image={props.imgURL} />
          <Card_Color_enhanc type={props.type} />
          <Discription_Models />
          <Photos />
          <Footer />
        </div>
      );
    }
    else {alert("You must login !")
      return (
        <div>
          <Login />
        </div>
      );
    }
  }
export default Colorizepage;