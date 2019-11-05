import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow,mount} from 'enzyme';
import Registration from './components/Registration';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';


it('Registration Snapshot', () => {
    const tree = renderer.create(<Registration/>).toJSON();
    expect(tree).toMatchSnapshot();
})