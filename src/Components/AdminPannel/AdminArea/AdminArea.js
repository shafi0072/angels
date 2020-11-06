import React from 'react';
import './AdminArea.css'
const AdminArea = () => {
    return (
        <div>
        <div className="row">
        <div className="col-md-2 backingSideBar">
            <h2 className='text-center'>Admin Pannel</h2>
            <br/>
            <div className="text-right text-light">
                <h6>Orders</h6>
                <h6>Products Post</h6>
                <h6>Admins</h6>
                <h6>Add Admin</h6>
                <h6>Reviews</h6>
                <h6>Admin Message</h6>
            </div>
        </div>          
        <div className="col-md-10"></div>
        </div>
        </div>
    );
};

export default AdminArea;