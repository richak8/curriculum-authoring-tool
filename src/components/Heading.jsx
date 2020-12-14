import React from 'react';

const Heading = () => (
    <div className='wrapper'>
         <div className='actionsWrapper'>
            <div className='heading'>Actions</div>
            <div className='content'>
                <div>Move,Ident,</div>
                <div>Outdent, Delete</div>
            </div>
        </div>
        <div>
            <div className='heading'>Standard</div>
            <div className='content'>The text of the standard</div>
        </div>
    </div>
);

export default Heading;