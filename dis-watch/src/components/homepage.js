import React from "react";

class Homepage extends React.Component{

    render(){
        return(
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}
export default Homepage;