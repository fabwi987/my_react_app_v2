import React from "react";

export default class Body extends React.Component {
   constructor(){
       super();
       this.state = {name: "Fabian", country: "Sweden"};
   }
      
   render() {
    return (
      <div>
        <h1>{this.state.name} from {this.state.country}</h1>
      </div>
    );
  }
}