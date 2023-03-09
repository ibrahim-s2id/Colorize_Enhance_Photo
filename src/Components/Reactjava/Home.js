import React from "react";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import '../Container/multyimage.js';
import Discription_Models from "../Discription_Models/Discription_Models";
import Photos from "../Photos/Photos";
import '../css/style.css';

class Home extends React.Component{
    render(){
    return(
        <div className="body">
          
                <Header up_image="We use AI technology to restore old photos automatically" image="/images/header2.jpg" />
                <Container/>
                <Discription_Models/>
                <Photos/>
                <Footer/>
            
        </div>
      );}
    }

export default Home;