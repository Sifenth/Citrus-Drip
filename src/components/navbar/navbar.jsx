import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../Assets/images/citruslogo.png'
import cart_icon from '../Assets/images/shopping-cart.png'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand" style={{backgroundColor :"#0B0C10"}}>
  <div class="container-fluid">
    <a style={{fontSize : "2.4em"}} class="navbar-brand navlink " href="http://localhost:3000/Home"><img src={logo} alt="logo" id='logoimage'/>Citrus Drip</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
      {/* <span class="navbar-toggler-icon"></span> */}
    {/* </button> */}
    
    <div class=" d-inline-flex p-2 fflex-row-reverse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item p-2">
          <a class="nav-link active navlink" aria-current="page" href="#"><Link style={{textDecoration : "none", color : "#ffff"}} to='/Home'>Home</Link></a>
        </li>
        <li class="nav-item p-2">
          <a class="nav-link navlink" href="">New Arrivals</a>
        </li>
        <li class="nav-item p-2">
          <a class="nav-link navlink" href="#">Drips</a>
        </li>
        
        <form className="d-flex p-2 " role="search">
        <input className="form-control me-2 searchbox" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        <li className="nav-item p-2">
          <a classMame="nav-link" href='#'>
          <div className="nav-card-count">0</div>
          <Link to='/Cart'><img src={cart_icon} alt="cartIcon" id='cartimage'/> </Link>
            
            </a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default Navbar;



{/* */}
{/* <ul className='nav-menu'>*/}


            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>