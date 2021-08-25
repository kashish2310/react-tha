import React from 'react';
import {connect} from 'react-redux';

const List=(props)=>{
    return(
        <ul className="list-item">{
        props.shows.map((show,index)=>(
            <li className="li-item" key={index}>
                {show.message}
            </li>
        ))
        }
        </ul>
    );
}

const mapStateToProps= (state)=>({
    shows: state.shows.data
});
export default connect(mapStateToProps) (List);