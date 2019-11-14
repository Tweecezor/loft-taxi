import React,{useState} from 'react';
import '../styles/Registration.css';
import PropTypes from 'prop-types';
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {userRegistration,sendRegistrationRequest} from '../Actions/actions'

// class Registration extends React.Component{
const RegistrationComponent = (props) => {

    var[name,setName] = useState('');
    var[surname,setSurname] = useState('');
    var[password,setPassword] = useState('');
    var[email,setEmail] = useState('');


    const handleInputPassword = (e) => {
        setPassword(password = e.target.value);
    }
    const handleInputName = (e) => {
        setName(name = e.target.value);
    }
    const handleInputSurename = (e) => {
        setSurname(surname = e.target.value);
    }
    const handleInputemail = (e) => {
        setEmail(email = e.target.value);
    }

    const showAll = (e)=>{
        e.preventDefault();
        // props.registration(email,name,surename,password);
        props.regOnServer(email,password,name,surname);
    }

        return (
            <div className = 'reg'>
                <div className = 'reg__caption-wrap'>
                    <h2 className = 'reg__caption'>Регистрация</h2>
                </div>
                <div className = 'reg__question'>
                    <span className = 'reg__question-text'>Уже зарегистрирован?</span>
                    <Link to = {'/login'}>Войти</Link>
                </div>
                <form action="" className = 'reg__form' onSubmit = {showAll}>
                    <div className = 'reg__form-wrap reg__form-wrap--email'> 
                        <label htmlFor="email">Адресс электронной почты</label>
                        <input type="email" className = 'reg__form-input' id = 'email' value = {email} onChange = {handleInputemail} />
                    </div>
                    <div className = 'reg__form-wrap reg__form-wrap--name'>
                        <label htmlFor="name">Имя</label>
                        <input type="text" className = 'reg__form-input' id = 'name' value = {name} onChange = {handleInputName} />
                    </div>
                    <div className = 'reg__form-wrap reg__form-wrap--surename'>
                        <label htmlFor="surename">Фамилия</label>
                        <input type="text" className = 'reg__form-input' id='surename' value = {surname} onChange = {handleInputSurename}/>
                    </div>
                    <div className = 'reg__form-wrap reg__form-wrap--password'> 
                        <label htmlFor="password">Пароль</label>
                        <input type="password" className = 'reg__form-input' id = 'password' value = {password} onChange = {handleInputPassword} />
                    </div>
                    <input type="submit" value = 'Зарегистрироваться' className = 'reg__form-submit' />
                </form>
            </div>
        )
}
RegistrationComponent.propTypes = {
    setBlock: PropTypes.func
}
const mapStateToProps = (state) => {
    console.log(state.RegistrationReducer);
    return({})
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return ({
        // registration : (email,name,surename,password)=> {
        //     dispatch(userRegistration(email,name,surename,password));
        // },
        regOnServer : (email,password,name,surname)=> {
            dispatch(sendRegistrationRequest({email,password,name,surname}))
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationComponent);