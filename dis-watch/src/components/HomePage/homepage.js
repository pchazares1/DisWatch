import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Homepage extends React.Component{

    render(){
        return(
            <div class="container">
                Hello {this.props.name}
                    <div class="row">

                        {/* <button class="btn btn-primary" type="submit">Hello World</button> */}
                        <button class="btn btn-danger" type="submit">Fire</button>
                        <button class="btn btn-secondary" type="submit">Tornado</button>

                        </div>
                        <div class="row">
                            <button type="button">Flood</button>
                            <button type="button">Earthquake</button>
                    
                    </div>
            </div>
        );
    }
}
export default Homepage;

