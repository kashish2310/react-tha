import React from 'react'
import { connect } from 'react-redux';
import { todo } from '../../actions';
import './Todo.css';

const Todo = (props) => {
    return (
        <form className="container" onSubmit={(event)=> {
            event.preventDefault();
            let input= event.target.userInput.value;
            props.dispatch(Todo(input));
            event.target.userInput.value="";
        }}>
            <input type="text" name="userInput" className="input"/>
            <button className="btn-sub">Submit</button>
        </form>
    );
};

export default connect() (Todo);