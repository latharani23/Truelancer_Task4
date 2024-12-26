import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import './home.css';  // Ensure proper styling
import Box from '@mui/material/Box';


const Home = () => {
  const navigate = useNavigate();  // For navigating between pages

  const handleSignup = () => {
    console.log("Navigating to Signup...");
    navigate("/signup");
  };

  const handleLogin = () => {
    console.log("Navigating to Login...");
    navigate("/login");
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img 
            src="https://static.truelancer.com/truelancer-logo-dark-background_small.png" 
            alt="Truelancer Logo" 
            className="navbar-logo"
          />
        </a>
        <div className="navbar-icons">
        <button
            className="navbar-text signup-link"
            onClick={handleSignup}
            style={{ cursor: 'pointer', marginRight: '25px', color: '#ffffff' }}
          >Post Project
          </button>
          <span
            className="navbar-text signup-link"
            onClick={handleSignup}
            style={{ cursor: 'pointer', marginRight: '15px', color: '#ffffff' }}
          >Contests
          </span>
          <span
            className="navbar-text signup-link"
            onClick={handleSignup}
            style={{ cursor: 'pointer', marginRight: '15px', color: '#ffffff' }}
          >Services
          </span>
          <span
            className="navbar-text signup-link"
            onClick={handleSignup}
            style={{ cursor: 'pointer', marginRight: '15px', color: '#ffffff' }}
          >Find Jobs
          </span>
          <span
            className="navbar-text signup-link"
            onClick={handleSignup}
            style={{ cursor: 'pointer', marginRight: '15px', color: '#ffffff' }}
          >Find Freelancers
          </span>
          
          <span
            className="navbar-text signup-link"
            onClick={handleSignup}
            style={{ cursor: 'pointer', marginRight: '15px', color: '#ffffff' }}
          >
            Sign Up
          </span>
          <span
            className="navbar-text login-link"
            onClick={handleLogin}
            style={{ cursor: 'pointer', marginRight: '15px', color: '#ffffff' }}
          >
            Login
          </span>
        </div>
      </nav>

      {/* Info Bar */}
    <nav className="navbar custom-topbar">
         <div className="tss-98aqrw-offerLink">
            <p className="MuiTypography-root MuiTypography-body1">
            Receive ₹1000 in Your Truelancer Wallet When You Sign Up as a Client Today! 🚀🚀 
            <span>[ Valid till 31 Dec ]</span>
            </p>
        </div>
    </nav>
<div className="carousel-container">
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="carousel-content-container">
          <div className="carousel-text">
            <h1>Hire Top Talent across the Globe with Truelancer Prim</h1>
           <h3>Collaborate easily with your remote team of experts spread across the globe. Know more about Truelancer Prime</h3>
           <button class="quote-button">
          Get Free Quote <span class="arrow">→</span>
        </button>
          </div>
          <div className="carousel-image">
            <img className="d-block w-100" src="https://assets.truelancer.com/assets/home_v/images/team-connect.webp" alt="First slide" />
          
         
        </div>

        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-content-container">
          <div className="carousel-text">
            <h1>Building your Startup? Be in the Smartest Startups League</h1>
           <h3>Build & Scale with the world's best remote talent</h3>
           <button class="quote-button">
          Get Free Quote <span class="arrow">→</span>
        </button>
        </div>
          <div className="carousel-image">
            <img className="d-block w-100" src="https://assets.truelancer.com/assets/home_v/images/startup.webp" alt="Second slide" />
        
        </div>

        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-content-container">
          <div className="carousel-text">
            <h1>Hire Top rated Freelancers. Get More Work done and Spend Less</h1>
         <h3>Thousands of Small businesses & Entrepreneurs use Truelancer to get their Job done</h3>
        <button class="quote-button">
                Get Free Quote <span class="arrow">→</span>
        </button>
          </div>
          
        <div className="carousel-image">
            <img className="d-block w-100" src="https://assets.truelancer.com/assets/home_v/images/hire-illustration.webp" alt="Third slide" />
          
            
        </div>

        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>


<div className="recommended-section">
  <h1>HOW IT WORKS</h1><br></br><br></br><br></br>
</div>
<div className="d-flex justify-content-start">
  <div className="card">
    <img className="card-img-top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_01.png"/>
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
</Box>
    <div className="card-body">
      <p className="card-text">Post a Project to tell us about your project. We’ll quickly match you with awesome freelancers.</p>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp"/>
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    </Box>
    <div className="card-body">
      <p className="card-text">Browse proposals, profiles of freelancers & their reviews. Compare, Interview & finalise the candidate.</p>
    </div>
  </div>
    <div className="card" >
    <img className="card-img-top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_04.png"/>
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    </Box>
    <div className="card-body">
      <p className="card-text">Award Project to the finalised freelancer on Truelancer & enjoy 100% money back guarantee using Safe Deposit.</p>
    </div> 
  </div>


  
  <div className="card" >
    <img className="card-img-top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_04.png"/>
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    </Box>

    <div className="card-body">
      <p className="card-text">Use Truelancer to chat, share files & collaborate with your freelancer. Release the payment once satisfied.</p>
      
    </div>
  </div>
  </div>

  <br></br><br></br>
     <br />
      <br />
      <div></div>
 

    </div>
    
  );
};

export default Home;
