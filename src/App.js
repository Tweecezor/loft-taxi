import React,{useState} from 'react';

import './App.css';
import Header from './components/Header';

import Map from './components/Map';

import Profile from './components/Profile';
import Background from './components/Background';

import myContext from '../src/context' ;


var currentBlock = 'login';
const {Provider,Consumer} = myContext;






const PAGES = {
    map : () => (    
        <Map />
        ) ,
    profile : () => (
        <section className = 'background'>
            <Profile />
        </section>
    ),
    // welcome : (setPage) => (
       
    //         <Background setPageProp = {setPage} />
      
    // )
}

function App() {

    const login = (email, password) => {
        if (email === 'test' && password === '123') {
            setIsLoggedIn(true)
            // setPage('profile')
        }
    }
    const logout = () => {
        setIsLoggedIn(false)
        // setPage('login')
    }
   
    const [isLoggedIn,setIsLoggedIn] = React.useState(false);
    const [page,setPage] = React.useState('map');
    return (
        <Provider value = { {isLoggedIn,setIsLoggedIn,login,logout}  }>
            {isLoggedIn &&(
                 <div className = 'root-wrapper'>
                    <Header setPageProp = {setPage} />
                    {PAGES[page](setPage)}
                </div>
            )}
            {!isLoggedIn && (
                <Background setPageProp = {setPage} />
            )}
          
           
           
        </Provider>
    );


}

export default App;






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
