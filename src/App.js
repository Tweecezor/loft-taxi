import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

function App (props) {

    var {isLoggedIn} = props;
    console.log(isLoggedIn);

    if(isLoggedIn) {
        return (
            <div className = 'root-wrapper'>
                <Header  />
                <Redirect to ={'/map'} />
            </div>
        )
    }
    else if (!isLoggedIn) {
        return (
            <Background/>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        isLoggedIn:state.LoginReducer.isLoggedIn
    })
}
const mapDispatchToProps = (dispatch) => {
   return ({})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);






// пример как работает код выше
// class newclass extends React.Component {

//     state = {
//         count : 1 
//     }
//     handleClick = ()=>{
//         this.setState({count: this.state.count++})
//     }

//     render(){
//         return(
//             <CompMy onClick={this.handleClick}/>        )
//     }
// }
