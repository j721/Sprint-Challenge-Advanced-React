import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';

import { render, getByTestId, fireEvent} from "@testing-library/react";

test("if Card renders props",()=>{
    const props ={
        name: 'Andressa',
        country: 'Brazil',
    }
    //Arrange
    const {getByText} =render (<Card {...props}/>)
    const name = getByText('Andressa')
    const country = getByText('Brazil')

    //action. None

    //Assertion
    expect(name).toBeInTheDocument('Andressa')
    expect(country).toBeInTheDocument('Brazil')
    
})