import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoggeInuserContext } from '../../App';
import headerLogo from '../../images/Logo.png';


import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggeInuserContext);
    const [currentState, setCurrentState] = useState('');
    let location = useLocation();

    useEffect(()=>{
        setCurrentState(location.pathname)
    },[])

    let customClass = false;
    if(currentState === '/login'){  
        customClass = true;
    }
    if(currentState === '/destination'){  
        customClass = true;
    }


    return (
        <header>
            <nav className={customClass ? "blackColor navbar navbar-expand-md border-bottom" : "navbar navbar-expand-md"}>
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img className={customClass ? "header-logo-dark"  : "header-logo-white"} src={headerLogo} alt="travel guru"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link to='/' className={customClass ? "nav-link text-dark": "nav-link text-white"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/news' className={customClass ? "nav-link text-dark": "nav-link text-white"}>News</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blog' className={customClass ? "nav-link text-dark": "nav-link text-white"}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className={customClass ? "nav-link text-dark": "nav-link text-white"}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    loggedInUser.email ? 
                                        <button onClick={()=> setLoggedInUser({})} className="button">Log out</button>
                                    :
                                    <Link to='/login'>
                                        <button className="button">Login</button>
                                    </Link>
                                }
                            </li>
                            <li className="nav-item">
                                <strong className='nav-link'>{loggedInUser.displayName}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;