import React from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';
import CallTaxi from './CallTaxi';



class Map extends React.Component {

    componentDidMount(){
      
        mapboxgl.accessToken = 'pk.eyJ1IjoidHdlZWN6IiwiYSI6ImNrMjRtaHIxYjBnemYzbXJ3aWViNXdrNjEifQ.76mRux1cIMwrvLuGh6f3Gw';
        
        new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/tweecz/ck26a6xyo0ej51co4poy6y8gc',
            zoom: 12,
            center: [37.625, 55.742]
        });
    }
    addMap = (element) => {this.mapContainer = element}

    render() {
        return (
            <>
                <div ref = {this.addMap} className = 'map'>
                    <div className = 'container'>
                        <CallTaxi />
                    </div>
                </div>
            </>
            
        );
    }
}
export default Map;
