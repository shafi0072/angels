import React from 'react';

const ProductsDetails = ({data}) => {
    
    return (
        <div  className="col-md-3 mb-5">
            <div style={{backgroundColor:'#f9f8f8'}} className='p-3'>
                <img src={data.img} alt=""/>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <h2>${data.price}</h2>
                <button className="btn btn-primary">Shop Now</button>
            </div>
        </div>
        
    );
};

export default ProductsDetails;