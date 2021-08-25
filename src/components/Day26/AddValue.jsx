import React from 'react';

import {connect} from 'react-redux';
import {printVal} from './actions';
import { printVal2 } from './actions';
const AddValue=(props)=>{
    return (
        <form className="container" onSubmit={(event)=>{
            event.preventDefault();
            let inp1= event.target.emailInput.value;
            let inp2=event.target.nameInput.value;
            props.dispatch(printVal(inp1));
            props.dispatch(printVal2(inp2));
            event.target.emailInput.value="";
            event.target.nameInput.value="";
        }}>
        <input type="email" name="emailInput" className="emailInput"/>
        <input type="text" name="nameInput" className="nameInput"/>
        <button className="btn-sub">Submit</button>
        </form>
    );
};

export default connect() (AddValue);