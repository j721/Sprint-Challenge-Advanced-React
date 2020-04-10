import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';

import { render, getByTestId, fireEvent} from "@testing-library/react";

test("if Card renders props", async ()=>{
    const props ={
        name: 'katy',
        country: 'france',
        searches: '3'
    }
    //Arrange
    const container =render (<Card {...props}/>)
    const name = container.getByText('katy')
    const country = cotainer.getByText('france')

    //action. None

    //Assertion
    expect(name.innerHTML).toBe('katy')
    expect(country.innerHTML).toBe('france')
    expect(searches.innerHTML).toBe('3')
})