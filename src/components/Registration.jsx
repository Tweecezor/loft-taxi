import React from 'react';
import '../styles/Registration.css';


class Registration extends React.Component{

    state = {
        email: '' ,
        name : '' ,
        surename : '' ,
        password : ''
    };
    // submitRegistration = ()=>{
    //     console.log('sgrdet');
    // }
    handleInput = (e) => {
        this.setState({[e.target.id]:e.target.value});
    }

    render() {
        return (
            <div className = 'reg'>
                <div className = 'reg__caption-wrap'>
                    <h2 className = 'reg__caption'>Регистрация</h2>
                </div>
                <div className = 'reg__question'>
                    <span className = 'reg__question-text'>Уже зарегистрирован?</span>
                    <a href="#" className = 'reg__question-link'>Войти</a>
                </div>
                <form action="" className = 'reg__form' >
                    <div className = 'reg__form-wrap reg__form-wrap--email'> 
                        <label htmlFor="email">Адресс электронной почты</label>
                        <input type="email" className = 'reg__form-input' id = 'email' value = {this.state.email} onChange = {this.handleInput} />
                    </div>
                    <div className = 'reg__form-wrap reg__form-wrap--name'>
                        <label htmlFor="name">Имя</label>
                        <input type="text" className = 'reg__form-input' id = 'name' value = {this.state.name} onChange = {this.handleInput} />
                    </div>
                    <div className = 'reg__form-wrap reg__form-wrap--surename'>
                        <label htmlFor="surename">Фамилия</label>
                        <input type="text" className = 'reg__form-input' id='surename' value = {this.state.surename} onChange = {this.handleInput}/>
                    </div>
                    <div className = 'reg__form-wrap reg__form-wrap--password'> 
                        <label htmlFor="password">Пароль</label>
                        <input type="password" className = 'reg__form-input' id = 'password' value = {this.state.password} onChange = {this.handleInput} />
                    </div>
                    <input type="submit" value = 'Зарегистрироваться' className = 'reg__form-submit'/>
                </form>
            </div>
        )
    }
}
export default Registration;