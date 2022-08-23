import React, { Component } from 'react'


// 2)update:-getDerivedStateFromProps,shouldcomponentUpdate,render,getsnapshotbeforupdate,componentdidupdate

export default class Update extends Component {
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

    shouldComponentUpdate(nextprops,nextState){
        console.log("shouldComponentUpdate")
        console.log(nextprops,nextState)
        return false
    }
    
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getsnapshotbeforupdate")
        console.log(prevprops,prevstate)
        return 46;
    }
    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log("componentDidUpdate")
        console.log(prevprops,prevstate,snapshot)


    }

    clickhandle=()=>{
        console.log("clicked")
        this.setState({roll:"102"})
  }

  render() {
    console.log("render")

    return (
      <div>
          <h1>hello {this.state.roll}</h1>
          <button onClick={this.clickhandle}> click me</button>
      </div>
    )
  }
}
