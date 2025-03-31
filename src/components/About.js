import { Component } from 'react'
import User from './User'
import UserClass from "./UserClass"

class About extends Component{
  constructor(props){
    super(props);
    // console.log("parent constructor");
    
  }
  componentDidMount(){
    // console.log("parent componentDidMount");
    
}
  render(){
    // console.log("parent Render");
    
    return (
      <div>
        <h1>About</h1>
        {/* <User name={"Riya (function)"}/> */}
  
        <UserClass name={"Riya (class)"} location={"Bengaluru"} />
        {/* <UserClass name={"Riya shree"} location={"Bengaluru"} /> */}
      </div>
    )
  }
}


export default About