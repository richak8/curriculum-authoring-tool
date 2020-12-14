import React from 'react';
import Add from '../images/add.svg';

const Button = ({label, onClick}) => 
    <button onClick={onClick} className='button'>
        <img src={Add} alt="add" className='img'/>
        {label}
    </button>

export default Button;