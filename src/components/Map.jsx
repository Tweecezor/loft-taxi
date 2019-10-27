import React from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';



class Map extends React.Component {

   
    // handler  = event =>{
    //     console.log('dfsgr');
    // }
    // state = {
    //     viewport: {
    //         width: '100vw',
    //         height: '100vh',
    //         latitude: 55.75370903771494,
    //         longitude: 37.61981338262558,
    //         zoom: 12,

    //     },
    //     accessToken : 'pk.eyJ1IjoidHdlZWN6IiwiYSI6ImNrMjRtaHIxYjBnemYzbXJ3aWViNXdrNjEifQ.76mRux1cIMwrvLuGh6f3Gw'
    // }
    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoidHdlZWN6IiwiYSI6ImNrMjRtaHIxYjBnemYzbXJ3aWViNXdrNjEifQ.76mRux1cIMwrvLuGh6f3Gw';
        
        new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/tweecz/ck26a6xyo0ej51co4poy6y8gc',
            zoom: 12,
            center: [37.625, 55.742]
        });
    }

    render() {
        return (
            // <ReactMapGL 
            //     {...this.state.viewport}
            //     mapboxApiAccessToken = {this.state.accessToken}
            //     onViewportChange={(viewport) => this.setState({viewport})}
            // />

 

            <>
                <div id = 'map' ></div>
                {/* <div onClick = {this.handler}>фавыпкуие</div> */}
            </>
            
        );
    }
}
export default Map;
