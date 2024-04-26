import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'


function Nav({Toggle, session}) {

  const toggleDropdown = () => {
    console.log('Dropdown toggled');
  };


  const isLoggedIn = false; // Replace with your logic to check if the user is logged in

  const renderUserDropdown = () => {
    if (isLoggedIn) {
      return (
        <div className="user-avatar" onClick={toggleDropdown}>
          <img src={session.user.profile_image_url || 'url_for_static_filename'} alt="User profile" />
          <div className="dropdown-content" id="userDropdown">
            <p>{session.user.email}</p>
            <a href="url_for_logout">Logout</a>
          </div>
        </div>
      );
    } else {
      return (
        <a className="ud-btn btn-white add-joining" href="url_for_login">Sign In</a>
      );
    }
  };
      return (        
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">            
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle} style={{ color: 'black' }}></i>            
            <button className="navbar-toggler d-lg-none" type="button" style={{ color: 'black' }} data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <i className='bi bi-justify'></i></button>            
                    <div className="collapse navbar-collapse" id="collapsibleNavId">                
                      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">                    
                        <li className="nav-item dropdown">                        
                            {renderUserDropdown()}                  
                        </li>                
                      </ul>            
                    </div>        
        </nav>  )}
export default Nav