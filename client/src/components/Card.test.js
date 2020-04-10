import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';

import { render, getByTestId, fireEvent} from "@testing-library/react";

test("if Card renders props",()=>{
    const props ={
        name: 'katy',
        country: 'france',
        searches: '3'
    }
    //Arrange
    const {getByText} =render (<Card {...props}/>)
    const name = getByText('katy')
    const country = getByText('france')

    //action. None

    //Assertion
    expect(name).toBeInTheDocument('katy')
    expect(country).toBeInTheDocument('france')
    
})