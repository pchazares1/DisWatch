import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapsStyles = {
    width: '99%',
    height: '90%'
};

export class MapContainer extends React.Component{
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                style={mapsStyles}
                initialCenter={{lat: '29.6477', lng: '-82.343'}}
            >

            <Marker position={{lat: '29.6467', lng: '-82.32'}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDUf6UPWOTW1fmiT_N2fbLZWloXk7fhjpk'
})(MapContainer);
