import React from 'react';

import '../styles/Input.scss';

const Input = (props) => {
    return (
        <div className='input'>
            <input 
                className='input__search'
                type='search'
                value={props.value} 
                onChange={props.onChange} 
            />
        </div>
    )
};


export default Input;