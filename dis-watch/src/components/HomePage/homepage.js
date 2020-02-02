import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import './homepage.css';

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
            <div className={"container"}>
                DisWatch {this.props.name}
                    <div className={"row"}>

                        {/* <button class="btn btn-primary" type="submit">Hello World</button> */}
                        <button className={"dis-button"} id={"fire"} type="submit" onClick={this.findLocation.bind(this)}>Fire</button>
                        <button className={"dis-button"} id={"tornado"} type="submit" onClick={this.findLocation.bind(this)}>Tornado</button>

                    </div>

                    <div className={"row"}>
                        <button className={"dis-button"} id={"flood"} type="submit" onClick={this.findLocation.bind(this)}>Flood</button>
                        <button className={"dis-button"} id={"earthquake"} type="submit" onClick={this.findLocation.bind(this)}>Earthquake</button>

                    </div>
            </div>
        );

    }
}
export default Homepage;

