import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import './home.css';  // Ensure proper styling
import { Container, Typography, Box } from '@mui/material'; // Only one import for Box
import { Grid2 as Grid } from '@mui/material';
import 'font-awesome/css/font-awesome.min.css';



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
            <h1>Building your Startup? Be in the Smartest Startups League</h1>
            <h3>Build & Scale with the world's best remote talent</h3>
            <button className="quote-button">
              Get Free Quote <span className="arrow">→</span>
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
            <button className="quote-button">
              Get Free Quote <span className="arrow">→</span>
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
            <button className="quote-button">
              Get Free Quote <span className="arrow">→</span>
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
<br></br><br></br>



<div className="recommended-section">
  <h1>HOW IT WORKS</h1><br></br><br></br>
</div>
<div className="d-flex justify-content-start">
  <div className="card">
    <img
      className="card-img-top"
      src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_01.png"
      alt="Step 4"
    />
    <p className="card-text-style">POST PROJECT</p>
    <Box className="MuiBox-root"></Box>
    <br /><br />
    <div className="card-body">
      <p className="card-text">
        Use Truelancer to chat, share files & collaborate with your freelancer. Release the payment once satisfied.
      </p>
    </div>
  </div>

  <div className="card">
    <img
      className="card-img-top"
      src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp"
      alt="Step 4"
    />
    <p className="card-text-style">FIND & HIRE</p>
    <Box className="MuiBox-root"></Box>
    <br /><br />
    <div className="card-body">
      <p className="card-text">
        Use Truelancer to chat, share files & collaborate with your freelancer. Release the payment once satisfied.
      </p>
    </div>
  </div>

  <div className="card">
    <img
      className="card-img-top"
      src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_04.png"
      alt="Step 4"
    />
    <p className="card-text-style">AWARD & PAY</p>
    <Box className="MuiBox-root"></Box>
    <br /><br />
    <div className="card-body">
      <p className="card-text">
        Use Truelancer to chat, share files & collaborate with your freelancer. Release the payment once satisfied.
      </p>
    </div>
  </div>

  <div className="card">
    <img
      className="card-img-top"
      src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_03.png"
      alt="Step 4"
    />
    <p className="card-text-style">WORK & APPROVE</p>
    <Box className="MuiBox-root"></Box>
    <br /><br />
    <div className="card-body">
      <p className="card-text">
        Use Truelancer to chat, share files & collaborate with your freelancer. Release the payment once satisfied.
      </p>
    </div>
  </div>
</div>

    <Container maxWidth="xxl" className="custom-container">
      <Grid container spacing={4} alignItems="left" justifyContent="left">
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
          <Typography variant="h1" color="#ffffff">
            Work With 
          </Typography>
          <Typography variant="h1" color="#7DBADB">
          Diverse Talent
          </Typography>
          <Typography variant="h2" color="#ffffff">
            Where Unique Skills Meet Human Intelligence
          </Typography><br></br><br></br>
          <Typography variant="h3" color="#ffffff">
          <i class="bi bi-globe">  </i>Access skilled talent on Truelancer
          </Typography><br></br>
          <Typography variant="h3" color="#ffffff">
          <i class="bi bi-filter-circle">  </i>Find the perfect talent exactly when you need it
          </Typography><br></br>
          <Typography variant="h3" color="#ffffff">
          <i class="bi bi-search">  </i>Precision talent pairing; Redefining project success
          </Typography><br></br>
          <button className="hire-button">
          Hire FreeLancer
          </button>
        </Grid>
        
        


{/* Right Section (Stats Section) */}
  <Grid item xl={7} md={6}>
  {/* New container for the right section */}
  <Container maxWidth="xxl" className="stats-container">
    <Grid container spacing={4} direction="column">
      {/* Freelancers Stat */}
      <Grid item sx={{ textAlign: 'left' }}>
        <Typography variant="h1" className="custom-stat-value">
          2M+
        </Typography>
        <Typography variant="h1" className="custom-stat-label">
          Freelancers
        </Typography>
      </Grid>

      {/* Countries Stat */}
      <Grid item sx={{ textAlign: 'left' }}>
        <Typography variant="h1" className="custom-stat-value">
          120+
        </Typography>
        <Typography variant="h1" className="custom-stat-label">
          Countries
        </Typography>
      </Grid>

      {/* Skills Stat */}
      <Grid item sx={{ textAlign: 'left' }}>
        <Typography variant="h1" className="custom-stat-value">
          3500+
        </Typography>
        <Typography variant="h1" className="custom-stat-label">
          Skills
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Grid>
</Grid>
</Container>

<Container maxWidth="xxl" className="work-container">
  <Grid container spacing={4} alignItems="center" justifyContent="center">
    {/* Left Section: Safe Pay */}
    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
      <i className="bi bi-shield-check large-icon"></i>
      <Typography variant="h1" color="#ffffff">
        Safe Pay
      </Typography>
      <Typography variant="p1" color="#ffffff">
        Secure Transactions, Safeguarding Every Project.
      </Typography>
    </Grid>

  {/* Row for Coordinators and Satisfaction Section */}
  <Grid container spacing={4} alignItems="center" justifyContent="center">
    {/* Coordinators Section */}
    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
      <i className="bi bi-headphones large-icon"></i>
      <Typography variant="h1" color="#ffffff">
        Coordinators
      </Typography>
      <Typography variant="p1" color="#ffffff">
        Seamless guidance for project success, talent alignment.
      </Typography>
    </Grid>

    {/* Satisfaction Section */}
    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
      <i className="bi bi-star large-icon"></i>
      <Typography variant="h1" color="#ffffff">
        100% Satisfaction
      </Typography>
      <Typography variant="p1" color="#ffffff">
        Seamless guidance for project success, talent alignment.
      </Typography>
    </Grid>
  </Grid>
  </Grid>
</Container>


<br></br><br></br>
 <br/><br/>
</div>
    
  );
};

export default Home;
