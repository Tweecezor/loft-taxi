import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow,mount} from 'enzyme';
import Profile from './components/Profile';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';


it('Profile Snapshot', () => {
    const tree = renderer.create(<Profile/>).toJSON();
    expect(tree).toMatchSnapshot();
})