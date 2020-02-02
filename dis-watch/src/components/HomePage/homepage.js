import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";

class Homepage extends React.Component{
    month; day; hour;
    add(coords) {
        this.findDate();
        firebase.firestore().collection("Reports").add({
            x: coords.coords.latitude,
            y: coords.coords.longitude,
            month: this.month,
            day: this.day,
            totalTime: this.hour +''+ this.min
        });
    }

    findDate(){
        var d = new Date();
        this.month = d.getMonth();
        this.day = d.getDate();
        this.hour = d.getHours();
        this.min = d.getMinutes();

    }

    findLocation(){
        navigator.geolocation.getCurrentPosition((coords) => {
            // This == HomePage
            this.add(coords)
        }, console.log)
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
                            <button type="button" onClick={this.findLocation.bind(this)}>Flood</button>
                            <button type="button">Earthquake</button>

                    </div>
            </div>
        );

    }
}
export default Homepage;

