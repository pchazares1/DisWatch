import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapsStyles = {
    width: '99%',
    height: '90%'
};

export class MapContainer extends React.Component{
    render() {
        return (
            <div>
                <Map 
                google={this.props.google}
                zoom={8}
                style={mapsStyles}
                > 
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                 </Map>

            </div>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDUf6UPWOTW1fmiT_N2fbLZWloXk7fhjpk'
})(MapContainer);