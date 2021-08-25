import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';
import './Todo.css';
const List = (props) => {
    return (
       <ul className="list-item">
           {
               props.todos.map((todo,index)=> (
                   <li className="li-item" key={index}>{todo.message}  <button className="del-btn" onClick={()=>{
                       props.dispatch(deleteTodo(todo.id))
                   }}>Delete</button></li>
               ))
           }
       </ul>
    )
}

const mapStateToProps = (state)=>({
    todos: state.todos.data
});
export default connect(mapStateToProps)(List);