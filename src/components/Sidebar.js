import React from 'react';
import logo from './Image/logo.png'

function Sidebar({ setCurrentComponent }) {
    const handleDashboardClick = () => {
        setCurrentComponent('DashboardComponent');
    };

    const handleRateClick = () => {
        setCurrentComponent('RateComponent');
    };

    const handleProductsClick = () => {
        setCurrentComponent('ProductsComponent');
    };

    const handleReportClick = () => {
        setCurrentComponent('ReportComponent');
    };

    const handleCustomersClick = () => {
        setCurrentComponent('CustomersComponent');
    };

    const handleLogoutClick = () => {
        setCurrentComponent('LogoutComponent');
    };

    return (
        <div className='bg-secondary sidebar p-2'>
            <div className='m-2'>
            <img src={logo} alt="Logo" style={{ width: '100%', height: '50px' }} />
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2' onClick={handleDashboardClick}>
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span style={{ cursor: 'pointer' }}>Dashboard</span>
                </a>
                <a className='list-group-item py-2' onClick={handleRateClick}>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span style={{ cursor: 'pointer' }}>Rate</span>
                </a>
                <a className='list-group-item py-2' onClick={handleProductsClick}>
                    <i className='bi bi-table fs-5 me-3'></i>
                    <span style={{ cursor: 'pointer' }}>Products</span>
                </a>
                <a className='list-group-item py-2' onClick={handleReportClick}>
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>
                    <span style={{ cursor: 'pointer' }}>Report</span>
                </a>
                <a className='list-group-item py-2' onClick={handleCustomersClick}>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span style={{ cursor: 'pointer' }}>Customers</span>
                </a>
                <a className='list-group-item py-2' onClick={handleLogoutClick}>
                    <i className='bi bi-power fs-5 me-3'></i>
                    <span style={{ cursor: 'pointer' }}>Logout</span>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
