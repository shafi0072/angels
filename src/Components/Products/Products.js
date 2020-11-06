import React from 'react';
import img1 from '../../Image/Products/referral_link_sharing.213433cwk.jpg';
import img2 from '../../Image/Products/referral_link_sharing.2cwk.jpg';
import img3 from '../../Image/Products/referral_link_sharing.3123cwk.jpg';
import img4 from '../../Image/Products/referral_link_sharing.313cwk.jpg';
import img5 from '../../Image/Products/referral_link_sharing.3233cwk.jpg';
import img6 from '../../Image/Products/referral_link_sharing.3653cwk.jpg';
import img7 from '../../Image/Products/referral_link_sharing.383cwk.jpg';
import img8 from '../../Image/Products/referral_link_sharing.4cwk.jpg';
import ProductsDetails from './ProductsDetails';
const Products = () => {
    const fakeData = [
        {
            id:1,
            name:'Products',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'10',
            img:img1
        },
        {
            id:2,
            name:'Products',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'20',
            img:img2
        },
        {
            id:3,
            name:'Products',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'30',
            img:img3
        },
        {
            id:4,
            name:'Products',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'40',
            img:img4
        },
        {
            id:5,
            name:'Products',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'50',
            img:img5
        },
        {
            id:6,
            name:'',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'60',
            img:img6
        },
        {
            id:7,
            name:'Products',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'70',
            img:img7
        },
        {
            id:8,
            name:'Products',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab.',
            price:'80',
            img:img8,
        }
    ]
    return (
        <div className='container'>
        <h1 className='text-center mt-5'>Summber Collections</h1>
            <div className="row mt-5">
                {
                    fakeData.map(data => <ProductsDetails data={data} />)
                }
            </div>
        </div>
    );
};

export default Products;