import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow,mount} from 'enzyme';
import Background from './components/Background';
import Header from './components/Header';
import {render} from '@testing-library/react';
import myContext from '../src/context' ;
import renderer from 'react-test-renderer';

const {Provider} = myContext;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Background Snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
})








// const MyContext = React.createContext({});

// it('renders ', ()=>{

//     // const wrapper = mount(<App />,{context:{isLoggedIn:true}});


//     // console.log(wrapper.debug());
//     // console.log(wrapper.find(Provider).setProps({isLoggedIn:true}));
//     // console.log(wrapper.debug());
//     // expect(wrapper.childAt(0).toEqual(<Background />);
//     // expect().
//     // const wrapper = shallow(<App />, {
//     //     wrappingComponent: MyContext.Provider,
//     //     wrappingComponentProps: { value: { isLoggedIn: true } }
//     //   });
//     // console.log(wrapper.debug());

// //    const MockComponentBackground = ()=>{
// //        return (
// //         <Background />
// //        )
     
// //    }
//     // const {getByTestId} = render (<Header />);
// })
