import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { userContext } from '../../../App';
import { Button } from '@material-ui/core';
const Navbar = () => {
    const [user, setUser] = useContext(userContext);
    const handleSearchSHow = () => {
        const newInfo = {...user};
        newInfo.SearchClick = true;
        setUser(newInfo);
    }
    return (<div style={{borderBottom:'1px solid lightgray'}}>
        <nav class="navbar navbar-expand-lg navbar-light  pr-5 pl-5 container">
            <a class="navbar-brand" href="#"><h3 style={{fontFamily: "'Anton', sans-serif"}}>Angels&Demons</h3></a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul style={{position:'relative', top:'10px'}} class="navbar-nav ml-5">
                <li class="nav-item">
              <form action="">
             {
                user.SearchClick && <input type="text" name='search' className="form-control mb-2" placeholder='search your products'/>
             } 
              <Button onClick={handleSearchSHow} className='btn'>
              <SearchIcon/>
            </Button>
            
              </form>
              
                    
                
            </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><h6 className='text-dark'>Home</h6>
                            
                        </a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <h6 className='text-dark'>Category</h6>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Male</a>
                            <a class="dropdown-item" href="#">Female</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><h6 className='text-dark'>About Us</h6></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><h6 className='text-dark'>Contract Us</h6></a>
                    </li>
                </ul>
                    <ul style={{position:'relative', top:'0px'}} className="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link><small>Login</small></Link>
                        </li>
                        <li class="nav-item ml-2">
                            <small>Cart/$0.00</small>
                        </li>
                        <li class="nav-item ml-2">
                            <ShoppingCartIcon/> <small>0</small>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        );
};

export default Navbar;