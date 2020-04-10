import React from 'react';
import ReactDom from 'react-dom';
import NavBar from "./Navbar";
import {render, fireEvent} from "@testing-library/react";

test ("if toggle dark mode works",async()=>{
    const container = render (<NavBar/>)
    const button = container.getByTest (/toggle dark mode/i)
    fireEvent.click(button)
    expect (document.body.className).toBe("dark-mode");
})