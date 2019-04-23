import React from 'react';
import './App.css';
import { NumButton } from "./components/ButtonComponents/NumberButton";
import { Input } from './components/Input'


import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {

  return (
    <div className="wholeCalc">
      <div className="calc-wrapper">
        <Input>0</Input>
        <div className="row">
          <ActionButton>clear</ActionButton>
          <NumberButton>/</NumberButton>
        </div>
        <div className="row">
          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>
          <NumberButton>x</NumberButton>
        </div>
        <div className="row">
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>
          <NumberButton>-</NumberButton>
        </div>
        <div className="row">
          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>
          <NumberButton>+</NumberButton>
        </div>
        <div className="row">
          <NumberButton>.</NumberButton>
          <NumberButton>0</NumberButton>
          <NumberButton>=</NumberButton>
        </div>
        
      </div>
    </div>
  );
};

export default App;
