import React,{useState,useEffect} from 'react';
import '../styles/CallTaxi.css';
import {connect} from 'react-redux'
import {fetchAddressesList,fetchOrderAddresses,setNewOrder} from '../Actions/actions';
import {getAddressesList} from '../reducers';
import {getCardsData,getUserToken} from '../reducers';



const OrderComponent = (props) =>{
   

    var flag;

    useEffect(()=>{
        props.getAddresses();
    },[flag]);

    var [addressFrom,setAddressFrom] = React.useState();
   
    var [addressTo,setAddressTo] = React.useState();
    
    var [addresses,setAddresses] = React.useState(props.addressesList);

    var [orderStatus,setOrderStatus] = React.useState(false);

    const [switcherFrom,setSwitcherFrom] = useState(false);
    const [switcherTo,setSwitcherTo] = useState(false);


    const onInputClicked = (e) => {
        if (e.target.dataset.input === 'to'){
            setSwitcherTo(true);
            setAddresses(filterAddress(props.addressesList,addressFrom))
            setSwitcherFrom(false);
        } else
        if (e.target.dataset.input === 'from'){
            setSwitcherFrom(true);
            setAddresses(filterAddress(props.addressesList,addressTo));
            setSwitcherTo(false);
        } 
        else {
            setSwitcherFrom(false);
            setSwitcherTo(false);
        }
    }

    const onInputChange = (e)=>{
        if (e.target.dataset.input === 'to'){
            setAddressTo(e.target.value);
            setAddresses( props.addressesList.filter((address)=>isMatching(address,e.target.value)))
        } else
        if (e.target.dataset.input === 'from'){
            setAddressFrom(e.target.value);
            setAddresses( props.addressesList.filter((address)=>isMatching(address,e.target.value)))
        } 

    }

    function isMatching(full,chunk){
 
        if (full.toLowerCase().indexOf(chunk.toLowerCase()) !== -1) {

            return true;
        } else if (full.toLowerCase().indexOf(chunk.toLowerCase()) === -1) {

            return false;
        }
    }

    function filterAddress(addresses,choosenAddress){
        return addresses.filter((address)=> address === choosenAddress ? false : true)
    }

    const choosenAddress = (e) => {
        if (e.target.dataset.direction === 'to'){
            setAddressTo(e.target.innerText)
            setSwitcherTo(false);
            
        } 
        if (e.target.dataset.direction === 'from'){
            setAddressFrom(e.target.innerText)
            setSwitcherFrom(false);
            
        } 
    }

    const submitOrder = () => {
        props.setCoord({
            to:addressTo,
            from:addressFrom
        })
        setOrderStatus(true);
        props.setNewOrderStatus(false);
    }
    const submitNewOrder = () => {
        props.setNewOrderStatus(true);
        setOrderStatus(false);
    }
    
    if(!orderStatus){
        return(
            <div className = 'order' onClick={onInputClicked}>
                <div className = 'order__menu-wrap'>
                    <div className = 'order__menu-direction'>
                        <label htmlFor="from">
                            <input data-input='from' autoComplete="off" value={addressFrom}  onChange={onInputChange} className = "addressInput" type="text" placeholder = "Откуда" id ="from"/>
                        </label>
                        {
                            switcherFrom === true &&
                            addresses.map((address,index) => 
                                <div className='drop-menu__item' data-direction='from' key={index} onClick={choosenAddress}>
                                    {address}
                                </div>
                            )
                        
                        }
                    
                    
                    </div>
                    <div className = 'order__menu-direction'>
                        <label htmlFor="where">
                            <input data-input='to' autoComplete="off" value={addressTo} onChange={onInputChange}   className = "addressInput" type="text" placeholder = "Куда" id = "where"/>
                        </label>
                    
                        {
                            switcherTo === true &&
                            addresses.map((address,index) => 
                                <div className='drop-menu__item' data-direction='to' key={index} onClick={choosenAddress}>
                                    {address}
                                </div>
                            )
                        }
                    
                    </div>
                    <input onClick={submitOrder} type="button" value="Вызвать такси" className = "order__button"/>
                </div>
            </div>
        )
    } else if(orderStatus){
        return (
            <div className = 'order'>
                <h2 className="order__header">Заказ размещён</h2>
                <p className="order__text">
                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                </p>
                <input onClick={submitNewOrder}  type="button" value="Сделать еще один заказ" className = "order__button"/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return({
        addressesList:getAddressesList(state),
        cardsData:getCardsData(state),
        userToken:getUserToken(state),
    })
}
const mapDispatchToProps = (dispatch) => {
  
    return ({
        getAddresses: () => {
            dispatch(fetchAddressesList())
        },
        setCoord:(direction) => {
            dispatch(fetchOrderAddresses(direction))
        },
        setNewOrderStatus:(bool)=>{
            dispatch(setNewOrder({newOrder:bool}))
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(OrderComponent);

