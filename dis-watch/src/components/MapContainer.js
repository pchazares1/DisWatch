import React from 'react';
import firebase from 'firebase';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapsStyles = {
    width: '99%',
    height: '90%'
};

export class MapContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          reports: []
        };
      }

    componentDidMount() {
        firebase.firestore().collection('Reports').onSnapshot((snapshot => {
            const reports = snapshot.docs.map(doc => doc.data())
            console.log(reports);
            this.setState({reports})
        }));
    }   

    dog = "https://i.imgur.com/saZKUm3.png"
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                style={mapsStyles}
                initialCenter={{lat: '29.6477', lng: '-82.343'}}
            >

            {this.state.reports.map(report => 
            <Marker 
                position={{lat: report.x, lng: report.y}} 
                title={report.disType}
            />)}

            <Marker  position={{lat: '29.6467', lng: '-82.32'}} icon={this.dog} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDUf6UPWOTW1fmiT_N2fbLZWloXk7fhjpk'
})(MapContainer);
