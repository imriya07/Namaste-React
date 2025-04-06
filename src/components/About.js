import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent componentDidMount");
  }
  render() {
    // console.log("parent Render");

    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Riya (function)"}/> */}

        <UserClass name={"Riya (class)"} location={"Bengaluru"} />
        {/* <UserClass name={"Riya shree"} location={"Bengaluru"} /> */}
      </div>
    );
  }
}

export default About;
