import React from 'react';
import { Link } from 'react-router-dom';
function LandingPage() {
    return ( <>
<div className='container-fluid   text-center m-5' id='landing_page'>
    <div className='row h-75'>
        <div className='col-11 my-auto'>
            <h1 className='text'>Please Click here! </h1>
            <Link to='/home'>
            <button className='btn btn-dark'>
                Home
            </button>
            </Link>

        </div>
    </div>
</div>
  
    </> );
}

export default LandingPage;