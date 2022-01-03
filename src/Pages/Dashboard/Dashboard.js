import React from 'react';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MyOrder from '../OrdeNow/MyOrder';

const Dashboard = () => {
    return (
        <div>
            <h2>This is Dashboard</h2>
            <MyOrder></MyOrder>
            <ManageAllOrders></ManageAllOrders>
            <ManageProducts></ManageProducts>
        </div>
    );
};

export default Dashboard;