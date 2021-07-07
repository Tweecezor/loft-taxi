import React,{useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.css';
import {Link} from 'react-router-dom';

import { Form, Field } from "react-final-form";

import {LogginAction,isLogged} from '../Actions/actions';
import { connect } from 'react-redux';

const Login = props => {


    const handleSubmit = values => {
        props.userLogin(values);
      };
    const inputPassword = ({input,meta,label}) => {

        return(
            <div className =  {meta.error && meta.visited & !meta.active ? 'withError login__form-wrap' : 'login__form-wrap'}>
                <label className = 'login__form-label' htmlFor = "name">{label}</label>
                <input className = 'login__form-input' name="password" type="password" {...input} ></input>
                {meta.error && meta.visited && !meta.active &&
                    <div className="login__form-error">{meta.error}</div>    
                }
            </div>
        )
    }
    const inputEmail = ({input,meta,label}) => {
        return(
            <div className =  {meta.error && meta.visited & !meta.active ? 'withError login__form-wrap' : 'login__form-wrap'}>
                <label  className = 'login__form-label' htmlFor = "name">{label}</label>
                <input  className = 'login__form-input' name="email" type="text" {...input} ></input>
                {meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
            </div>
        )
    }

   
    return(
        <>
            <div className = 'login'>
                <div className = 'login__caption-wrap'>
                    <h2 className = 'login__caption '>Войти</h2>
                </div>
                <div className = 'login__question'>
                    <span className = 'login__question-text'>Новый пользователь? </span>
                    <Link onClick={props.resetError} className='login__reg-link' to={'/registration'}>Зарегистрирутесь</Link>
                </div>
                <Form
                    onSubmit={handleSubmit}
                    validate={values => {
                        const errors = {};
                        if (!values.email){
                            errors.email = "Заполните поле";
                            };
                        if (!values.password) errors.password = "Заполните поле";

                        return errors;
                    }}
                    render={({ handleSubmit }) => (
                    <form className = 'login__form' onSubmit={handleSubmit}>
                        <Field name="email" label="Имя*" className = 'login__form-label' component={inputEmail} />
                        <Field name="password" label="Пароль*" className = 'login__form-label' component={inputPassword} />
                        <button type="submit" className = 'login__form-submit'>Войти</button>
                    
                    </form>
                    )}
                />
            </div>  
            <div className={props.error === true ?'tooltipError tooltipErrorAnimation' : 'tooltipError'}>
                <h1>Неверный логин или пароль</h1>
            </div>
        </>
    )
}

Login.propTypes = {
    setBlock: PropTypes.func,
    setPage: PropTypes.func
};

const mapStateToProps = (state) => {
    return({
        error:state.LoginReducer.error
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        resetError: () => {
            dispatch(isLogged({error:false}))
        },
        userLogin : (data)=> {
            dispatch(LogginAction(data));
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
