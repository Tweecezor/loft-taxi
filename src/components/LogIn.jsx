import React from 'react';
import '../styles/Login.css';

class Login extends React.Component {
    state = {
        name : '',
        password : ''
    }
    handleInput = (e) => {
        this.setState = { [e.target.name] : e.target.value }
    }

    render(){
        return (
            <div className = 'login'>
                <div className = 'login__caption-wrap'>
                    <h2 className = 'login__caption '>Войти</h2>
                </div>
                <div className = 'login__question'>
                    <span className = 'login__question-text'>Новый пользователь?</span>
                    <a href="#" className = 'login__question-link'>Зарегистрирутесь</a>
                </div>
                <form action="" className = 'login__form'>
                    <div className = 'login__form-wrap'>
                        <label className = 'login__form-label' htmlFor = "name">Имя*</label>
                        <input className = 'login__form-input' type = "text" id = 'name'/>
                    </div>
                    <div className = 'login__form-wrap'>
                        <label className = 'login__form-label' htmlFor = "password">Пароль*</label>
                        <input className = 'login__form-input' type = "password" id = 'password'/>
                    </div>
                    <input className = 'login__form-submit' type="submit" value = 'Войти'/>
                </form>
                
            </div>
        )
    }
}
export default Login;