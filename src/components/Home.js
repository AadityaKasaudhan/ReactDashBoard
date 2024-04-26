import React from 'react';

import './style.css';
import DashboardComponent from './DashboardComponent';
import RateComponent from './RateComponent';
import ProductsComponent from './ProductsComponent';
import ReportComponent from './ReportComponent';
import CustomersComponent from './CustomersComponent';
import LogoutComponent from './LogoutComponent';



function Home({ currentComponent, Toggle }) {
    return (
        <div className='px-3'>
           
            {/* Your home page content */}
            {currentComponent === 'DashboardComponent' && <DashboardComponent />}
            {currentComponent === 'RateComponent' && <RateComponent />}
            {currentComponent === 'ProductsComponent' && <ProductsComponent />}
            {currentComponent === 'ReportComponent' && <ReportComponent />}
            {currentComponent === 'CustomersComponent' && <CustomersComponent />}
            {currentComponent === 'LogoutComponent' && <LogoutComponent />}
            
        </div>
    );
}

export default Home;
