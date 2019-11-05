import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import Background from './components/Background';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ', ()=>{
    // const wrapper = shallow(<App/>);
    // expect(wrapper.find('isLoggedIn')).toEqual(false);
    // expect(wrapper.contains(<Background />)).toEqual(true)
   const MockComponentBackground = ()=>{
       return (
        <Background />
       )
     
   }
    const {} = render (<Background />);
})
