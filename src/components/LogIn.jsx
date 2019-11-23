import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.css';
import {Link} from 'react-router-dom';

import {LogginAction} from '../Actions/actions';
import { connect } from 'react-redux';

const Login = props => {

    var [email,setEmail] = React.useState('');

    var [password,setPassword] = React.useState('');
   
    const handleInputEmail = (e) => {
        setEmail(email = e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(password = e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        props.userLogin(email,password);
       
    }

    // const onClickLoginButton = (e) => {
    //     e.preventDefault();
    //     // console.log(LogginAction());
    //     // debugger;
        
    // }


    return(
        <div className = 'login'>
            <div className = 'login__caption-wrap'>
                <h2 className = 'login__caption '>Войти</h2>
            </div>
            <div className = 'login__question'>
                <span className = 'login__question-text'>Новый пользователь?</span>
                <Link to={'/registration'}>Зарегистрирутесь</Link>
            </div>
            <form action="" className = 'login__form' onSubmit = {submitForm}>
                <div className = 'login__form-wrap'>
                    <label className = 'login__form-label' htmlFor = "name">Имя*</label>
                    <input className = 'login__form-input' type = "text" name = 'email' id = 'name' onChange = {handleInputEmail} />
                </div>
                <div className = 'login__form-wrap'>
                    <label className = 'login__form-label' htmlFor = "password">Пароль*</label>
                    <input className = 'login__form-input' type = "password" name = 'password' id = 'password' onChange = {handleInputPassword} />
                </div>
                <input className = 'login__form-submit' type="submit" value = 'Войти' />
            </form>
        </div>  
    )
}

Login.propTypes = {
    setBlock: PropTypes.func,
    setPage: PropTypes.func
};

const mapStateToProps = (state) => {
    return({
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        userLogin : (email,password)=> {
            dispatch(LogginAction({email,password}));
        },
        // getCardData : ()=>{
        //     dispatch(getCardDataRequest({}))
        // }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
// export default Login;