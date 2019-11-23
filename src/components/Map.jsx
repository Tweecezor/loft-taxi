import React,{useEffect,useState} from 'react';
import mapboxgl from 'mapbox-gl';
// import ReactMapGL from 'react-map-gl';
import CallTaxi from './CallTaxi';
import {connect} from 'react-redux'
import {getAddressesList} from '../reducers';
import {fetchAddressesList,fetchCardDataRequest} from '../Actions/actions';
import { Link } from 'react-router-dom';
import {getUserToken} from '../reducers';



class Map extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        console.log(props.cardData.cardNumber === '');
    }
    componentDidMount(){
        this.props.getCardData(this.props.userToken);
        mapboxgl.accessToken = 'pk.eyJ1IjoidHdlZWN6IiwiYSI6ImNrMjRtaHIxYjBnemYzbXJ3aWViNXdrNjEifQ.76mRux1cIMwrvLuGh6f3Gw';
        
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 9,
            center: [30.19, 59.87]
        });
        console.log('mounted COMPONENT')
       
    }

    componentDidUpdate(){
        if(this.props.coords.length) {
            this.draw(this.map,this.props.coords);
        }
        console.log(this.props)
        if(this.props.newOrder) {
            if (this.map.getLayer('route')) {
                this.map.removeLayer('route'); this.map.removeSource('route');
            }
        }
    }
    
    draw = (map,coord)=>{
        map.flyTo({
            center: coord[0],
                zoom: 15 });
               
            
                map.addLayer({
                id: "route",
                type: "line",
                source: {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates: coord
                        }
                    }
                },
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#ffc617",
                    "line-width": 8
                }
                });
        }
    addMap = (element) => {this.mapContainer = element}

    render() {
        return (
            <>
                <div ref = {this.addMap} className = 'map'>
                    <div className = 'container'>
                        {this.props.cardData.cardNumber !== '' &&  <CallTaxi />}
                        {this.props.cardData.cardNumber === '' &&  
                            <div className="warninng-block">
                                <h2 className = "warning_header">Заполните данные кредитной карты</h2>
                                <Link to={`/profile`} className = 'link-btn'>Перейти</Link>
                            </div>
                        }
                    </div>
                </div>
            </>
            
        );
    }
}
// const Map = (props) => {
  
//     console.log(props);
//     var flag = 1;
//     var map;
//    const [divMap,setDivMap] = useState();
 
//     useEffect(()=>{
//         console.log(divMap);
//         console.log('in use effect');
//         mapboxgl.accessToken = 'pk.eyJ1IjoidHdlZWN6IiwiYSI6ImNrMjRtaHIxYjBnemYzbXJ3aWViNXdrNjEifQ.76mRux1cIMwrvLuGh6f3Gw';
        
//         map = new mapboxgl.Map({
//             container: document.querySelector('.map'),
//             style: 'mapbox://styles/tweecz/ck26a6xyo0ej51co4poy6y8gc',
//             zoom: 9,
//             center: [30.19, 59.87]
//         });
       
//         props.getAddresses();
//         map.on('load',()=>{
//             setTimeout( draw(map),6000);
           
//         })
//     },[flag]);
//     var coord = [
//         [30.348308, 59.932573],
//         [30.355483, 59.93168],
//         [30.350019, 59.922859],
//         [30.339609, 59.919693],
//         [30.342747, 59.917104],
//         [30.320473, 59.909069],
//         [30.300603, 59.909234],
//         [30.299499, 59.898466],
//         [30.302343, 59.887851],
//         [30.298358, 59.875588]
//         [30.293599, 59.8747],
//         [30.290602, 59.852339],
//         [30.279596, 59.834648],
//         [30.27679, 59.832989],
//         [30.275081, 59.833692],
//         [30.283282, 59.832596],
//         [30.291613, 59.82616],
//         [30.322928, 59.809261],
//         [30.323901, 59.79261],
//         [30.318439, 59.790863],
//         [30.300942, 59.793364],
//         [30.282353, 59.796571],
//         [30.27744, 59.799996],
//         [30.272183, 59.80065]
//     ];
//     // const ftch = ()=>{
//     //     fetch(`https://loft-taxi.glitch.me/route?address1=Шаверма на Невском&address2=Пулково (LED)`).
//     //     then(response=>response.json())
//     //     .then(result=>{
//     //       console.log(result);
//     //     })
//     // }
//     var addresses = props.addressesList;
//     // console.log(addresses);


// const draw = (map)=>{
//     // console.log('efwAGRHT');
//     // console.log(map);
//     console.log('sdafghjkhl');
//     console.log(coord)
//         map.flyTo({
//             center: coord[0],
//              zoom: 15 });
//             //  map.addLayer({
//             //     id: "route",
//             //     type: "line",
//             //     source: {
//             //         type: "geojson",
//             //         data: {
//             //             type: "Feature",
//             //             properties: {},
//             //             geometry: {
//             //                 type: "LineString",
//             //                 coordinates: coord
//             //             }
//             //         }
//             //     },
//             //     layout: {
//             //         "line-join": "round",
//             //         "line-cap": "round"
//             //     },
//             //     "paint": {
//             //         "line-color": "#888",
//             //         "line-width": 8
//             //     }
//             //     });


//         // map.addLayer({ id: "route", type: "line", source: {
//         //     type: "geojson", data: {
//         //     type: "Feature", properties: {}, geometry: {
//         //     type: "LineString",
//         //                  coord
//         //                }
//         //     } },
//         //     layout: {
//         //     "line-join": "round", "line-cap": "round"
//         //     }, paint: {
//         //     "line-color": "#ffc617", "line-width": 8
//         //     } });
//     }
   
//     return (
//         <>
//             <div ref={setDivMap} className = 'map'>
//                 {/* <div onClick={draw} className="bigTEXT">БОЛЬШОЙ ТЕСТ</div> */}
//                 <div className = 'container'>
//                     <CallTaxi value={props.addressesList} />
//                 </div>
//             </div>
//         </>
//     )
// }

const mapStateToProps = state => {
    return({
        // addressesList:getAddressesList(state)
        coords:state.OrderCoordsReducer.coords,
        cardData:state.ProfileReducer,
        userToken:getUserToken(state),
        newOrder:state.OrderCoordsReducer.newOrder
        // cardData:state.ProfileReducer
        // allCoord:getCoord(state)
    })
}

const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch)
    return ({
        getAddresses: () => {
            dispatch(fetchAddressesList())
        },
        getCardData : (userToken)=>{
            // debugger;
            dispatch(fetchCardDataRequest({userToken}))
        },
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Map);
