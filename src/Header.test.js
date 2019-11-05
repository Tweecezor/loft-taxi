import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow,mount} from 'enzyme';
import Header from './components/Header';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';


it('Header Snapshot', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
})