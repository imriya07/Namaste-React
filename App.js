{/* <div id="parent">
        <div id="child">
            <h1>I am an h1 Tag</h1>
            <h2>I am an h1 Tag</h2>
        </div>
        <div id="child2">
            <h1>I am an h1 Tag</h1>
            <h2>I am an h1 Tag</h2>
        </div>
</div> */}

//ReactElement(object) = HTML(Browser Understands)

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an h1 Tag"),React.createElement("h2",{},"I am an h2 Tag"))] ,
[   React.createElement("div",{id:"child2"},React.createElement("h1",{},"I am an Child2 h1 Tag"),React.createElement("h2",{},"I am an Child2 h2 Tag"))])

console.log(parent);//object


// const heading = React.createElement("h1", {id:"heading", ab :"riya"}, "Hello World from React!")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)