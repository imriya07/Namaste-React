import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // count: 0,
            userInfo:{
                name: "Dummy",
                location: "dakdnd",
            }
        }
        // console.log(this.props.name,"Child constructor");
        
    }
    async componentDidMount(){
        // console.log("child componentDidMount");
        const data = await fetch("https://api.github.com/users/imriya07")
        const json = await data.json()
        console.log(json,"****");
        this.setState({
            userInfo: json,
        })
        
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
        
    }
    render(){
        // console.log("Child Render");
        
        // const{name, location} = this.props
        // const {count} = this.state
        const {name, location, avatar_url} = this.state.userInfo
        return (
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6">
                {/* <h1>count={count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Click</button> */}
                {/* <h1>count2={count2}</h1> */}
                <img src={avatar_url}/>
              <h2 className="text-xl font-bold text-gray-800">Name: {name}</h2>
              <h3 className="text-lg text-gray-600">Location: {location}</h3>
              <h4 className="text-gray-500">Contact: @Riya</h4>
            </div>
          );
    }
}

export default UserClass