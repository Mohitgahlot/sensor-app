import React from 'react';
import GoogleMapReact, {Marker, GoogleApiWrapper} from 'google-maps-react';
import Styled from 'styled-components';


const SimpleMap = (prods) =>{
    const defaultProps = {
        center: {
            lat: 34.0522,
            lng: -118.2437
        },
        zoom: 8,
    };



        return (
            // Important! Always set the container height explicitly
            <div style={{ marginBottom:"0px", height: "40vh"}}>
                <GoogleMapReact style={{ height: '40vh', width: '80%', marginTop:"40px", marginBottom:"20px" }} google={prods.google}
                    zoom = {14} initialCenter={{
                    lat: 34.0522,
                    lng: -118.2437
                }}>
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        sensorId = "C234.02.234.08.S23.N35"
                        position={{lat: 34.0522, lng: -118.2437}}
                        onClick={prods.showTable}
                    />
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        sensorId = "C594.258.S3.N93"
                        position={{lat: 34.1522, lng: -118.2437}}
                        onClick={prods.showTable}
                    />
                </GoogleMapReact>
            </div>
        );
};

// const Marker = (props) => {
//     return <Mark/>
// };

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCXpR1Vm_S9f6CDMZmgf3VlnQo_4RJ1XgI')
})(SimpleMap)
