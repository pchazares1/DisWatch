import { Component } from "react";

class Homepage extends Component{

    render(){
        return(
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name = "Jimmy" />,
    document.getElementById('hello-example')
)