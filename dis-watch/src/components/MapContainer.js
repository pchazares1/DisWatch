import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapsStyles = {
    width: '99%',
    height: '90%'
};

export class MapContainer extends React.Component{
    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={8}
                style={mapsStyles}
                initialCenter={{ lat: 47.44, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDEllUUJas4n_DkmMPGbxIfAC8b9q2UU4'
})(MapContainer);