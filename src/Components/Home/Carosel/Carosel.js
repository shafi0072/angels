import React from 'react';
import img1 from '../../../Image/department_main_juniors-removebg-preview.png';
import img2 from '../../../Image/department_womensjuniors-2x-removebg-preview.png';
import img3 from '../../../Image/department_womensladies-2x-removebg-preview.png';
import './Carosel.css';
const Carosel = () => {
    return (<div>
        <div  id="carouselExampleIndicators" class="carousel slide CaroselBackground" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner container">
                <div class="carousel-item active">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                           <div className="">
                           <h1 className='text-light'><strong>SUMMER <br/> COLLECTION</strong></h1>
                            <p className='text-light'>COOL GIRLS STYLE UP TO <strong className="bg-light p-1 text-dark">40% OFF</strong></p>
                            <button className="btn btn-primary">SHOP NOW</button>
                           </div>
                        </div>
                        <div className="col-md-6">
                            <img style={{height:'500px'}} src={img1} alt=""/>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                            <div className="">
                           <h1 className='text-light'><strong>SUMMER <br/> COLLECTION</strong></h1>
                            <p className='text-light'>COOL GIRLS STYLE UP TO <strong className="bg-light p-1 text-dark">40% OFF</strong></p>
                            <button className="btn btn-primary">SHOP NOW</button>
                           </div>
                            </div>
                            <div className="col-md-6">
                                <img style={{height:'500px'}} src={img2} alt=""/>
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center">
                                <div className="">
                           <h1 className='text-light'><strong>SUMMER <br/> COLLECTION</strong></h1>
                            <p className='text-light'>COOL GIRLS STYLE UP TO <strong className="bg-light p-1 text-dark">40% OFF</strong></p>
                            <button className="btn btn-primary">SHOP NOW</button>
                           </div>
                                </div>
                                <div className="col-md-6">
                                    <img style={{height:'500px'}} src={img3} alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                );
};

export default Carosel;