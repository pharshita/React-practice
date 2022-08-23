import React, { Component } from 'react'

export default class Unmount extends Component {

    componentDidMount(){
        console.log("componentDidMount")
      }

    componentWillUnmount(){
        console.log("componentWillUnmount")
      }
  render() {
    return (
      <>
          <h1>hello</h1>
          <h2>harshita</h2>
      </>
    )
  }
}
