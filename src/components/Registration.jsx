import React,{useState} from 'react';
import '../styles/Registration.css';
import PropTypes from 'prop-types';
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {sendRegistrationRequest,setRegResponse} from '../Actions/actions'
import { Form, Field } from "react-final-form";


const RegistrationComponent = (props) => {




    const handleSubmit = values => {
        props.regOnServer(values);
     
        
    };
    const inputEmail = ({input,meta,label}) => {
        return(
            <div className =  {meta.error && meta.visited & !meta.active ? 'withError reg__form-wrap reg__form-wrap--email' : 'reg__form-wrap reg__form-wrap--email'}>
                <label className="reg__form-label"   htmlFor = "email">{label}</label>
                <input  className = 'reg__form-input' id="email" name="email" type="text" {...input} ></input>
                {meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
            </div>
        )
    }
    const inputNameAndSurname = ({input,meta,label}) => {
     
        return (
            <div className =  {meta.error && meta.visited & !meta.active ? `withError reg__form-wrap reg__form-wrap--${input.name}` : `reg__form-wrap reg__form-wrap--${input.name}`}>
                <label className="reg__form-label">{label}</label>
                <input type="text" className = 'reg__form-input' {...input} />
                {meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
            </div>
            
        )
    }
    const inputPassword = ({input,meta,label}) => {
        return(
            <div className =  {meta.error && meta.visited & !meta.active ? 'withError reg__form-wrap reg__form-wrap--email' : 'reg__form-wrap reg__form-wrap--email'}>
                <label className="reg__form-label" htmlFor="password">{label}</label>
                <input type="password" className = 'reg__form-input' id = 'password' {...input} />
                {meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
            </div>
            
        )
    }

    if(!props.regStatus){
        return (
            <div className = 'reg'>
                <div className = 'reg__caption-wrap'>
                    <h2  className = 'reg__caption'>Регистрация</h2>
                </div>
                <div className = 'reg__question'>
                    <span className = 'reg__question-text'>Уже зарегистрирован? </span>
                    <Link onClick={()=>{props.resetErrorStatus()}} className='reg__login-link' to = {'/login'}>Войти</Link>
                </div>
                <Form
                    onSubmit={handleSubmit}
                    validate={values => {
                        const errors = {};
                        if (!values.email){
                            errors.email = "Заполните поле";
                            };
                        if (!values.name) errors.name = "Заполните поле";
                        if (!values.surname) errors.surname = "Заполните поле";
                        if (!values.password) errors.password = "Заполните поле";

                        return errors;
                    }}
                    render={({ handleSubmit }) => (
                        <form className = 'login__form' onSubmit={handleSubmit}>
                            <Field name="email" label="Адресс электронной почты*" className = 'reg__form-input' component={inputEmail} />
                            <div style={{width:'100%',display:'flex'}}>    
                                <Field name="name" label="Имя*" className = 'reg__form-input' component={inputNameAndSurname} />
                                <Field name="surname" label="Фамилия*" className = 'reg__form-input' component={inputNameAndSurname} />
                            </div>
                            <Field name="password" label="Пароль*" className = 'login__form-label' component={inputPassword} />
                            <button type="submit" className = 'reg__form-submit'>Зарегистрироваться</button>
                        </form>
                    )}
                />
                <div className={props.error === true ?'tooltipError tooltipErrorAnimation' : 'tooltipError'}>
                    <h1>Пользователь уже существует</h1>
                </div>
            </div>
        )} else
        return(  
            <div className = 'reg reg--success'>
                <h2  className = 'reg__caption reg__success'>Регистарция прошла успешно</h2>
                <Link onClick={()=>{props.resetRegStatus()}} className='reg__form-submit' to = {'/login'}>Войти в систему</Link>
            </div>
        )
        
}
RegistrationComponent.propTypes = {
    setBlock: PropTypes.func
}
const mapStateToProps = (state) => {
    return({
        regStatus:state.RegistrationReducer.success,
        error:state.RegistrationReducer.error
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        resetRegStatus: ()=>{
            dispatch(setRegResponse({success:false}))
        },
        resetErrorStatus: ()=>{
            dispatch(setRegResponse({error:false}))
        },
        regOnServer : ({email,password,name,surname})=> {
            dispatch(sendRegistrationRequest({email,password,name,surname}))
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationComponent);