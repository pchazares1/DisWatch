import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";

class Homepage extends React.Component{

    add() {
        firebase.firestore().collection("Reports").add({
            test: "hello",
            x: 1,
            y: 2
        });
    }

    render(){
        firebase.firestore().collection('Reports').onSnapshot((snapshot => {
            snapshot.docs.forEach(document => {
                console.log(document.data())
            })

        }));

        return(
            <div class="container">
                Hello {this.props.name}
                    <div class="row">

                        {/* <button class="btn btn-primary" type="submit">Hello World</button> */}
                        <button class="btn btn-danger" type="submit">Fire</button>
                        <button class="btn btn-secondary" type="submit">Tornado</button>

                        </div>
                        <div class="row">
                            <button type="button" onClick={this.add}>Flood</button>
                            <button type="button">Earthquake</button>

                    </div>
            </div>
        );

    }
}
export default Homepage;

