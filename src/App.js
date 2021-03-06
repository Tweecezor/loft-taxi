import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/LogIn';
import RegistrationComponent from './components/Registration';
import Map from './components/Map';
import { getIsLoggedIn } from './reducers'

function App (props) {
   
        var {isLoggedIn} = props;
        console.log(isLoggedIn);

        if(isLoggedIn) {
            return (
                <div className = 'root-wrapper'>
                    <Header  />
                    <Redirect to ={'/map'} />
                    <Switch>
                        <Route path="/map" component={Map} exact />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </div>
            )
        }
        else if (!isLoggedIn) {
            return (
                <>
                    <Background>

                    </Background>
                    
                </>
            )
        }
        
}

const mapStateToProps = (state) => {
    return({
        isLoggedIn:getIsLoggedIn(state)
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
