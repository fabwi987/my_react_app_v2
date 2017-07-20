import React from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default class Layout extends React.Component {

render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
    <div className="container-fluid">
        <Nav location={location} />
        <div className="col-md-6 col-md-offset-3" style={containerStyle}>
             <h1>Irecommend</h1>
             {this.props.children}       
        </div>
        <Footer/>
    </div>
    );
  }
}
