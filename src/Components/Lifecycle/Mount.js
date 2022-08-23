import React, { Component } from 'react'

export default class Mount extends Component {

    // 1)mounting process:-constructor,static getDerivedStateFromProps,render,componentDidMount

    constructor(props) {
        super(props);
        console.log("Construnctor app");
        console.log(props);
        this.state = {
          roll:"101"
        };
      }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        console.log(props,state)
        return null;
    }
    

    componentDidMount(){//finaly data set it DOM
        console.log("componentDidMount")
    }

   
 
  render() {
      console.log("render")
    return (
      <div>
          <h1>Hello {this.props.name1}</h1>
          <h1>Hello {this.state.roll}</h1>
      </div>
    )
  }
}
