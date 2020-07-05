import React,{useState,useEffect} from 'react';
import '../styles/Profile.css';
import { connect } from 'react-redux';
import { sendProfileDataRequest,fetchCardDataRequest,changeCardNumber,changeCardData,changeCardOwner,changeCardCVC } from '../Actions/actions'
import {getCardsData,getUserToken} from '../reducers';
import { Link } from 'react-router-dom';
import { Form, Field } from "react-final-form";

var styles = {
    background:'white',
    width:'800px',
    padding: '50px 35px'
}

const Profile = (props) => {

    var flag = 1;

    const [changeData,setChangeData] = useState(false);

    useEffect(()=>{
       props.getCardData(props.userToken);
    },[flag]);

    var placeholders = {
        cardNumber:'0000 0000 0000 0000',
        expiryDate:'31/22',
        cardName:'Petr Petrov',
        cvc:'123'
       
    }
    const handleSubmit = (values,e) => {
        props.addCardsData(values,props.userToken);
        console.log(e);
        setChangeData(true);
       
    };

    const isDigit = (value) => {
        if ( (parseInt(value) <=9 && parseInt(value) >= 0) || value === ' ') {
            return true;
        }
        else 
            return false;

    }

    const validCardNumber = (cardNumber) => {
        
        if( cardNumber ) {
            var lastInputedValue = cardNumber.slice(cardNumber.length-1,cardNumber.length)
            if( isDigit(lastInputedValue)) {
                if ( cardNumber.length>19) {
                    return cardNumber.slice(0, 19);
                  }
                  if( cardNumber.length % 5 === 0 ) {
                      return cardNumber.slice(0, cardNumber.length-1);
                  }
                  if(cardNumber.length === 4 || cardNumber.length === 9 || cardNumber.length === 14 ) {
                      return cardNumber + " ";
                  }
                  return cardNumber;
            }
            return cardNumber.slice(0,cardNumber.length-1)
        }
    }
    const validCardCVC = (cardCVC) => {

        if( cardCVC ) {
            if ( cardCVC.length>3) {
              return cardCVC.slice(0, 3);
            }
            return cardCVC;
        }
    }
    const validCardExpiryDate = (cardExpiryDate) => {

        if( cardExpiryDate ) {
            if ( cardExpiryDate.length>5) {
                return cardExpiryDate.slice(0, 5);
            }

            if ( cardExpiryDate.length===2) {
              return cardExpiryDate + "/"
            }
            if ( cardExpiryDate.length===3) {
                return cardExpiryDate.slice(0, 2);
              }
            return cardExpiryDate;
        }
    }

    const inputCardData = ({input,meta,label}) => {
        return (
            <div className = {meta.error && meta.visited & !meta.active ? 'withError' : ''}>
                <label className = 'profile__info-label' >{label}</label>
                <input {...input} className = 'profile__info-input'  type = "text" placeholder={placeholders[`${input.name}`]}/>
                {
                    meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
                
            </div>
        )
    }

    return (
        <div className = 'background background--profile'> 
            <div className = 'profile' style = {styles}>
                <div className = 'profile__header-wrap'>
                    <h2>Профиль</h2>
                    <h4>Способ оплаты</h4>
                </div>
                {!changeData && 
                <>
                        <Form
                        onSubmit={handleSubmit}
                        validate={values => {
                            const errors = {}; 

                            if (!values.cardNumber){
                                errors.cardNumber = "Заполните поле";
                                };
                            if (!values.expiryDate) errors.expiryDate = "Заполните поле";

                            if (!values.cardName) errors.cardName = "Заполните поле";

                            if (!values.cvc) errors.cvc = "Заполните поле";
                                
                            return errors;
                        }}
                        initialValues = {{
                            cardNumber:props.cardsData.cardNumber,
                            expiryDate:props.cardsData.cardData,
                            cardName:props.cardsData.cardOwner,
                            cvc:props.cardsData.cardCVC
                        }}
                        render={({ handleSubmit }) => (
                        <form className = 'profile__form' onSubmit={handleSubmit}>
                            <div className = 'profile__info-wrapper'>
                                <div className = 'profile__info'>
                                    <Field name="cardNumber" placeholder="lalala" label="Номер карты*" component={inputCardData} format={validCardNumber}/>
                                    <Field name="expiryDate" label="Срок карты*" component={inputCardData} format={validCardExpiryDate} />
                                    <img width="32px" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 131.39 86.9'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bopacity:0;%7D.b%7Bfill:%23fff;%7D.c%7Bfill:%23ff5f00;%7D.d%7Bfill:%23eb001b;%7D.e%7Bfill:%23f79e1b;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 1%3C/title%3E%3Cg class='a'%3E%3Crect class='b' width='131.39' height='86.9'/%3E%3C/g%3E%3Crect class='c' x='48.37' y='15.14' width='34.66' height='56.61'/%3E%3Cpath class='d' d='M51.94,43.45a35.94,35.94,0,0,1,13.75-28.3,36,36,0,1,0,0,56.61A35.94,35.94,0,0,1,51.94,43.45Z'/%3E%3Cpath class='e' d='M120.5,65.76V64.6H121v-.24h-1.19v.24h.47v1.16Zm2.31,0v-1.4h-.36l-.42,1-.42-1h-.36v1.4h.26V64.7l.39.91h.27l.39-.91v1.06Z'/%3E%3Cpath class='e' d='M123.94,43.45a36,36,0,0,1-58.25,28.3,36,36,0,0,0,0-56.61,36,36,0,0,1,58.25,28.3Z'/%3E%3C/svg%3E" className="card-img" alt=""/>

                                </div>
                                <div className = 'profile__info'>
                                    <Field name="cardName" placeholder="lalala" label="Имя владельца карты*" component={inputCardData} />
                                    <Field name="cvc" label="СVC*" component={inputCardData} format={validCardCVC}/>
                                </div>
                            </div>
                            <input type="submit" value = 'Сохранить' className = 'profile__form-submit'/>

                        </form>
                        )}
                        />
                    </>
                }
                {changeData &&
                    <>
                        <div className="profile__change-text">
                            Платёжные данные обновлены. Теперь вы можете заказывать такси.
                        </div>
                        <div className="profile__change-submit-wrapper" >   
                            <Link to={`/map`} className = 'profile__change-submit'>Перейти на карту</Link>
                        </div>
                       
                    </>
                }
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

    return ({
        addCardsData : (cardsData,token)=> {
            dispatch(sendProfileDataRequest({...cardsData,token}));
        },
        getCardData : (userToken)=>{
    
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