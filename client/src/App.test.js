import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import Card from "./components/Card";
import { render } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ("displays navbar",()=>{
  const {getByTestId} = render (<Navbar/>);
  getByTestId(/nav/i)
})

test ("displays nav text",()=>{
  const nav = render (<Navbar/>);
  nav.getByText ("List of Searched Players");
})

test("displays players api",()=>{
  const {getByTestId} = render (<Card/>);
  getByTestId(/axios/i);
})