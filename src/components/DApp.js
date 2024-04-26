import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Nav from './Nav';

function App() {
    const [toggle, setToggle] = useState(true);
    const [currentComponent, setCurrentComponent] = useState('DashboardComponent');

    const Toggle = () => {
        setToggle(!toggle);
    };

    const handleComponentChange = (component) => {
        setCurrentComponent(component);
    };

    return (
        <div className='container-fluid  min-vh-100'>
            <div className='row'>
                {toggle && (
                    <div className='col-4 col-md-2 bg-secondary vh-100 position-fixed'>
                        <Sidebar setCurrentComponent={handleComponentChange} />

                    </div>
                )} 
                
                {toggle && <div className='col-4 col-md-2 '></div>}
                <div className='col bg-white'>
                <Nav Toggle={Toggle} style={{color:'black'}}/>
                    <Home currentComponent={currentComponent} Toggle={Toggle} />
                </div>
            </div>
        </div>
    );
}

export default App;
