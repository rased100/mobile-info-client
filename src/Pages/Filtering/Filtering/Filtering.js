import React from 'react';
import {
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Iphones from '../Phones/Iphones/Iphones';
import Samsungs from '../Phones/Samsung/Samsungs';

const Filtering = () => {
    function Layout() {
        return (
            <div>
                <h1>Select your favorite brand</h1>
                <nav>
                    <Link to="iphone">iphone</Link> |{" "}
                    <Link to="invoices">Invoices</Link> |{" "}
                    <Link to="dashboard">Dashboard</Link>
                </nav>
                <div className="content">
                    <Outlet />
                    <Iphones />
                    <Samsungs />
                </div>
            </div>
        );
    }

    function Invoices() {
        return <h1>Invoices</h1>;
    }

    function Dashboard() {
        return <h1>Dashboard</h1>;
    }
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="iphone" element={<Iphones />} />
                <Route path="samsung" element={<Samsungs />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default Filtering;