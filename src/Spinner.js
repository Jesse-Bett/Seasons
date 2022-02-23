// File to show full page loading icon when the location is still loading.

import React from 'react';

const Spinner = ()=>{
    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'> 
              Loading, please wait.
                </div> 
        </div>
    );
};

export default Spinner;