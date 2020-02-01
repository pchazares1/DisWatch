import React from "react";

class Homepage extends React.Component{

    render(){
        return(
            <div>
                Hello {this.props.name}
                <div id = "table">
                    <button type="button">Fire</button>
                    <button type="button">Tornado</button>
                    <button type="button">Flood</button>
                    <button type="button">Earthquake</button>
                </div>
            </div>
        );
    }
}
export default Homepage;