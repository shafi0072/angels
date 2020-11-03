import React from 'react';

const Navbar = () => {
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
            <form class="form-inline my-2 my-lg-0">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                <ul style={{position:'relative', top:'10px'}} class="navbar-nav">
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
               
                </div>
            </nav>
        </div>
        );
};

export default Navbar;