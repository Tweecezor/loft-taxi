import React,{useState,useEffect} from 'react';
import '../styles/Profile.css';
import { connect } from 'react-redux';
import { sendProfileDataRequest,getProfileDataRequest,fetchCardDataRequest,changeCardNumber,changeCardData,changeCardOwner,changeCardCVC } from '../Actions/actions'
import {getCardsData,getUserToken} from '../reducers';

var styles = {
    background:'white',
    width:'800px',
    padding: '30px 35px'

}

const Profile = (props) => {

    var flag = 1;


    useEffect(()=>{
        console.log('in use effect');
       props.getCardData(props.userToken);
    },[flag]);

    //var
    // var [cardNumber,setCardNumber] = React.useState(props.cardsData.cardNumber);
    // var [cardData,setCardData] = React.useState(props.cardsData.cardData);
    // var [cardOwner,setCardOwner] = React.useState(props.cardsData.cardOwner);
    // var [cardCVC,setCardCVC] = React.useState(props.cardsData.cardCVC);
    var cardNumber = props.cardsData.cardNumber;
    var cardData = props.cardsData.cardData;
    var cardOwner = props.cardsData.cardOwner;
    var cardCVC = props.cardsData.cardCVC;

    const handleInputCardNumber = (e) => {
        props.setCardNumber(e.target.value);
    }
    const handleInputCardData = (e) => {
        props.setCardData(e.target.value);
    }
    const handleInputCardOwner = (e) => {
        props.setCardOwner(e.target.value);
    }
    const handleInputCardCVC = (e) => {
        props.setCardCVC( e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(props.cardsData);
        console.log('safdsgdht');
        props.addCardsData({
            cardNumber:props.cardsData.cardNumber,
            expiryDate:props.cardsData.cardData,
            cardName:props.cardsData.cardOwner,
            cvc:props.cardsData.cardCVC
        },props.userToken)
        //console.log('{ "cardNumber": "2000 0000 0000 0000", "expiryDate": "01/22", "cardName": "TEST", "cvc": "910", "token": "AUTH_TOKEN" }')

    }



    return (
        <div className = 'background'> 
            <div className = 'profile' style = {styles}>
                <div className = 'profile__header-wrap'>
                    <h2>Профиль</h2>
                    <h4>Способ оплаты</h4>
                </div>
                <form action="" className='profile__form' onSubmit = {onSubmitForm}>
                    <div className = 'profile__info-wrapper'>
                        <div className = 'profile__info'>
                            <div className = 'profile__info-wrap'>
                                <label className = 'profile__info-label' htmlFor = "name">Номер карты*</label>
                                <input className = 'profile__info-input' value = {cardNumber} type = "text" name = 'cardNumber' id = 'cardNumb' placeholder = '0000 0000 0000 0000' onChange = {handleInputCardNumber}/>
                            </div>
                            <div className = 'profile__info-wrap'>
                                <label className = 'profile__info-label' htmlFor = "name">Срок карты</label>
                                <input className = 'profile__info-input' value = {cardData}  type = "text" name = 'cardData' id = 'cardData' onChange = {handleInputCardData}/>
                            </div>
                        </div>
                        <div className = 'profile__info'>
                            <div className = 'profile__info-wrap'>
                                <label className = 'profile__info-label' htmlFor = "name">Имя владельца*</label>
                                <input className = 'profile__info-input' value = {cardOwner}  type = "text" name = 'email' id = 'name' placeholder = 'Petr Petrov' onChange = {handleInputCardOwner}/>
                            </div>
                            <div className = 'profile__info-wrap'>
                                <label className = 'profile__info-label' htmlFor = "name">CVC*</label>
                                <input className = 'profile__info-input' value = {cardCVC}  type = "text" name = 'cvc' id = 'cvc' onChange = {handleInputCardCVC}/>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value = 'Сохранить' className = 'profile__form-submit'/>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return({
        cardsData:getCardsData(state),
        userToken:getUserToken(state),
        isLoading:state.ProfileReducer.isLoading
    })
}
const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch)
    return ({
        addCardsData : (cardsData,token)=> {
            console.log('worked');
            dispatch(sendProfileDataRequest({...cardsData,token}));
        },
        getCardData : (userToken)=>{
            // debugger;
            dispatch(fetchCardDataRequest({userToken}))
        },
        setCardNumber : (cardNumber)=>{
            dispatch(changeCardNumber({cardNumber}))
        },
        setCardData : (cardData)=>{
            dispatch(changeCardData({cardData}))
        },
        setCardOwner : (cardOwner)=>{
            dispatch(changeCardOwner({cardOwner}))
        },
        setCardCVC : (cardCVC)=>{
            dispatch(changeCardCVC({cardCVC}))
        }

    })
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);