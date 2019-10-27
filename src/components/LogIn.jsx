import React, { useState, useEffect } from 'react';
import '../styles/Login.css';

const Login = ({setPageProp}) => {


    // state = {
    //     name : '',
    //     password : ''
    // }

    // handleInput = (e) => {
    //     this.setState = { [e.target.name] : e.target.value }
    // }

    var [name,setName] = React.useState('');
    var [password,setPassword] = React.useState('');


    // var [password,setData] = React.useState('');
    // var [name,setData] = React.useState('');

    // const handleInputName = (e) => {
    //     // setName(name = e.target.value);
    //     setData([e.target.name] = e.target.value)
    // }
    // console.log(setPageProp('map'));


    

    const handleInputName = (e) => {
        setName(name = e.target.value);
    }
    const handleInputPassword = (e) => {
        setPassword(password = e.target.value);
    }
    const handleOpenRegistration = e => {
        e.preventDefault();
        setPageProp('reg');
    }
    const submitForm = e => {
        e.preventDefault();
        // console.log('fdsret');
        // console.log(name);
        // console.log(password);
        setPageProp('map');
    }

    return(
        <div className = 'login'>
            <div className = 'login__caption-wrap'>
                <h2 className = 'login__caption '>Войти</h2>
            </div>

            {/* <LOgin2 setPtop={SetPtop} /> */}
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
                <input className = 'login__form-submit' type="submit" value = 'Войти'/>
            </form>
            
        </div>   
    )
}
export default Login;