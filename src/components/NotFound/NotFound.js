import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className='d-flex justify-content-center align-items-center text-danger' style={{height:'90vh'}}>
            <div>
                <h1>404!</h1>
                <h2>Page not found</h2>
                <Link to='/'>
                <button className='btn btn-danger mt-3'>Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;