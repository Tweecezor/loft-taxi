import React,{useState} from 'react';


import {render} from '@testing-library/react';

import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import createStore from './store';

const store = createStore();



test("Render Layout", () => {
    render(
      <BrowserRouter initialEntries={["/"]}>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
  })
