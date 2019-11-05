import React,{useState} from 'react';
import '../styles/Registration.css';
import PropTypes from 'prop-types';

// class Registration extends React.Component{
const Registration = ({setBlock}) => {

    var[name,setName] = useState('');
    var[surename,setSurename] = useState('');
    var[password,setPassword] = useState('');
    var[email,setEmail] = useState('');

    const handleOpenLogin = (e) => {
        e.preventDefault();
        setBlock('login')
    }

    const handleInputPassword = (e) => {
        setPassword(password = e.target.value);
    }
    const handleInputName = (e) => {
        setName(name = e.target.value);
    }
    const handleInputSurename = (e) => {
        setSurename(surename = e.target.value);
    }
    const handleInputemail = (e) => {
        setEmail(email = e.target.value);
    }

    
        return (
            <div className = 'reg'>
                <div className = 'reg__caption-wrap'>
                    <h2 className = 'reg__caption'>Регистрация</h2>
                </div>
                <div className = 'reg__question'>
                    <span className = 'reg__question-text'>Уже зарегистрирован?</span>
                    <a href="#" className = 'reg__question-link' onClick = {handleOpenLogin}>Войти</a>
                </div>
                <form action="" className = 'reg__form' >
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
                        <input type="text" className = 'reg__form-input' id='surename' value = {surename} onChange = {handleInputSurename}/>
                    </div>
                    <div className = 'reg__form-wrap reg__form-wrap--password'> 
                        <label htmlFor="password">Пароль</label>
                        <input type="password" className = 'reg__form-input' id = 'password' value = {password} onChange = {handleInputPassword} />
                    </div>
                    <input type="submit" value = 'Зарегистрироваться' className = 'reg__form-submit'/>
                </form>
            </div>
        )
}
Registration.propTypes = {
    setBlock: PropTypes.func
}

export default Registration;