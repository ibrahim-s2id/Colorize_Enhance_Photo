import React from "react";
import '../css/Card_Color_enhanc.css';
import im from '../imagesproject/upload2.png';
import axios from 'axios';

class Card_Color_enhanc extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      image_back_color: im,
      download_dis: true,
      selectedFile: '',
      count: localStorage.getItem("Counter")
    }
    this.imageHandler = this.imageHandler.bind(this);
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ image_back_color: reader.result })
        this.setState({ disabled: false })
      }
    }
    reader.readAsDataURL(e.target.files[0])
    this.setState({ selectedFile: e.target.files[0] })
  }

  Changecounter() {
    fetch("http://127.0.0.1:8000/" + "Updatecounter", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Counter: parseInt(this.state.count),
        UserId: localStorage.getItem('idAdmin'),
      }),
    })
      .then((result) => {
        localStorage.setItem("Counter", result)
        alert(localStorage.getItem('Counter'))
      })
    if (localStorage.getItem("Counter") > 0) {
      alert("You have only " + (localStorage.getItem("Counter")) + " credit left");
    }
  }
  CallAPI() {
    if (this.state.count != 0) {
      let count1 = this.state.count
      localStorage.setItem("Counter", this.state.count)
      const data = new FormData()
      data.append('file', this.state.selectedFile)
      console.warn(this.state.selectedFile);
      let url = "http://192.168.43.245:5000/" + this.props.type;
      axios.post(url, data, {})
        .then(res => {
          this.setState({ download_dis: false })
          console.log('koko', res);
          var bytestring = res.data.status;
          var image = String(bytestring).split('\'')[1]
          console.log(image);
          this.setState({ image_back_color: ('src', 'data:image/jpeg;base64,' + image) })
          this.setState({ count: count1 - 1 })
          this.Changecounter()
        })
    }
    else {
      alert("you shuld pricing")
    }
  }
  render() {
    const { image_back_color } = this.state
    return (
      <div className="Container-Card-Colorize">
        <div className="image_uploaded"><img src={image_back_color} id="i" /></div>
        
        <div className="btnUpload">
          <label className="choose_photo_label">
            <input type="file" className="choose_photo_input" name="image-upload" id="input" onChange={this.imageHandler} />
            <span className="choose_photo_text">Choose a Photo</span>
          </label>
        </div>
        <div className="btnColorizing">
          <button className="colo" name="brpro" type="submit" onClick={() => this.CallAPI()} disabled={this.state.disabled} >{this.props.type}</button>
        </div>
        <div className="btnDownload">
          <a href={image_back_color} download={image_back_color}><button className="b" name="btdow" type="submit" onClick={this.Changecounter} disabled={this.state.download_dis}>Download Now</button></a>
        </div>
      </div>
    );
  }
}
export default Card_Color_enhanc;
