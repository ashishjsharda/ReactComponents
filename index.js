import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

function Car()
{
  return <h1> I am in function CAR </h1>
}
render(<Car />, document.getElementById('root'));
