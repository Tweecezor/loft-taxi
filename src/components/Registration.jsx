import React,{useState} from 'react';
import '../styles/Registration.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {sendRegistrationRequest} from '../Actions/actions'
import { Form, Field } from "react-final-form";

// class Registration extends React.Component{
const RegistrationComponent = (props) => {

    // var[name,setName] = useState('');
    // var[surname,setSurname] = useState('');
    // var[password,setPassword] = useState('');
    // var[email,setEmail] = useState('');


    // const handleInputPassword = (e) => {
    //     setPassword(password = e.target.value);
    // }
    // const handleInputName = (e) => {
    //     setName(name = e.target.value);
    // }
    // const handleInputSurename = (e) => {
    //     setSurname(surname = e.target.value);
    // }
    // const handleInputemail = (e) => {
    //     setEmail(email = e.target.value);
    // }

    // const showAll = (e)=>{
    //     e.preventDefault();
    //     // props.registration(email,name,surename,password);
    //     props.regOnServer(email,password,name,surname);
    // }

    const handleSubmit = values => {
        props.regOnServer(values);
    };
    const inputEmail = ({input,meta,label}) => {
        // console.log(meta.error);
        return(
            <div className = 'reg__form-wrap reg__form-wrap--email'> 
                <label   htmlFor = "email">{label}</label>
                <input  className = 'reg__form-input' id="email" name="email" type="text" {...input} ></input>
                {meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
            </div>
        )
    }
    const inputNameAndSurname = ({input,meta,label}) => {
     
        return (
            <div className = 'reg__form-wrap reg__form-wrap--name'>
                <label>{label}</label>
                <input type="text" className = 'reg__form-input' {...input} />
                {meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
            </div>
            
        )
    }
    const inputPassword = ({input,meta,label}) => {
        return(
            <div className = 'reg__form-wrap reg__form-wrap--password'> 
                <label htmlFor="password">{label}</label>
                <input type="password" className = 'reg__form-input' id = 'password' {...input} />
                {meta.error && meta.visited && !meta.active &&
                    <div className = "login__form-error" >{meta.error}</div>  
                }
            </div>
            
        )
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
                {/* <form action="" className = 'reg__form' onSubmit = {showAll}>
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
                </form> */}
                <Form
                onSubmit={handleSubmit}
                validate={values => {
                    const errors = {};
                    if (!values.email){
                        errors.email = "Заполните поле";
                        };
                    if (!values.email) errors.password = "Заполните поле";

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
            </div>
        )
}
RegistrationComponent.propTypes = {
    setBlock: PropTypes.func
}
const mapStateToProps = (state) => {
    return({})
}

const mapDispatchToProps = (dispatch) => {
    return ({
        // registration : (email,name,surename,password)=> {
        //     dispatch(userRegistration(email,name,surename,password));
        // },
        regOnServer : ({email,password,name,surname})=> {
            dispatch(sendRegistrationRequest({email,password,name,surname}))
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationComponent);