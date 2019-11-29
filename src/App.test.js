import React,{useState} from 'react';
import App from './App'

import {render} from '@testing-library/react';

import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createStore from './store';

const store = createStore();


// const {Provider} = myContext;

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// it('Background Snapshot', () => {
//     const tree = renderer.create(<App/>).toJSON();
//     expect(tree).toMatchSnapshot();
// })

test("Render Layout", () => {
    render(
      <BrowserRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
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
