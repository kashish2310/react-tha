import React, { useState} from 'react';
import './style.css'
function Button() {

    const [cnt,setCnt]= useState(0);

    return(
        <div>
            <button className="btn" onClick={()=>setCnt(cnt+1)}>{cnt}
            </button>
            
        </div>
    );
}

export default Button;