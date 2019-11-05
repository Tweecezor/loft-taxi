import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.css';

import myContext from '../context' ;

const {Provider,Consumer} = myContext;

const Login = props => {

    var {setPage,setBlock} = props;

    var [name,setName] = React.useState('');

    var [password,setPassword] = React.useState('');
   
    const handleInputName = (e) => {
        setName(name = e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(password = e.target.value);
    }

    const handleOpenRegistration = e => {
        e.preventDefault();
        setBlock('reg');
    }

    const submitForm = e => {
        e.preventDefault();
        // console.log('fdsret');
        // console.log(name);
        // console.log(password);
        setPage('map');
    }


    return(
    <Consumer>
       {
        ({setIsLoggedIn,login})=> {
            // const loginTheSystem = () => {
            //     setIsLoggedIn(true);
            // }
          
            return (
                <div className = 'login'>
                    <div className = 'login__caption-wrap'>
                        <h2 className = 'login__caption '>Войти</h2>
                    </div>
                    <div className = 'login__question'>
                        <span className = 'login__question-text'>Новый пользователь?</span>
                        <a href="#" className = 'login__question-link' onClick = {handleOpenRegistration}>Зарегистрирутесь</a>
                    </div>
                    <form action="" className = 'login__form' onSubmit = {submitForm}>
                        <div className = 'login__form-wrap'>
                            <label className = 'login__form-label' htmlFor = "name">Имя*</label>
                            <input className = 'login__form-input' type = "text" name = 'name' id = 'name' onChange = {handleInputName} />
                        </div>
                        <div className = 'login__form-wrap'>
                            <label className = 'login__form-label' htmlFor = "password">Пароль*</label>
                            <input className = 'login__form-input' type = "password" name = 'password' id = 'password' onChange = {handleInputPassword} />
                        </div>
                        <input className = 'login__form-submit' type="submit" value = 'Войти' onClick = {()=> login(name,password)}/>
                    </form>
                </div>   
            )
        }
        
       }
    </Consumer>
    )
}

Login.propTypes = {
    setBlock: PropTypes.func,
    setPage: PropTypes.func
};

export default Login;