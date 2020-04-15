import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import {useLocalStorage} from '../hooks/useLocalStorage';

import { render, getByTestId, fireEvent} from "@testing-library/react";

test("if Card renders users props",()=>{
    const users ={
        name: 'Andressa',
        country: 'Brazil',
    }
    //Arrange
    const {getByText} =render (<Card {...users}/>)
    const name = getByText('Andressa')
    const country = getByText('Brazil')

    //action. None

    //Assertion
    expect(name).toBeInTheDocument('Andressa')
    expect(country).toBeInTheDocument('Brazil')
    
})