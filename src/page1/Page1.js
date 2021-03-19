import React from 'react';
import RegForm  from './RegForm'
//import Logo from './public/Project.jpeg'

const Page1 =() => {
    return (
        <div >
            <div className = "ui container" style = {{ marginTop:'10px' }}> <RegForm/> </div>

            <img src="/Project.jpeg" alt="Logo" style ={{ position: 'absolute', right:'10px', top:'5px',height: '32%' }} />
        </div>
    );
};

export default Page1;