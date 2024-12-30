import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import './home.css';  // Ensure proper styling
import { Container, Typography, Box } from '@mui/material'; // Only one import for Box
import { Grid2 as Grid } from '@mui/material';
import 'font-awesome/css/font-awesome.min.css';
import { Card, CardContent } from '@mui/material';



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

{/*5thsection*/}
<Container maxWidth="xxl"className="enterprices-container">
            <Grid container spacing={4} alignItems="flex-start">
                {/* Left Section: Truelancer Enterprise Content */}
                <Grid item xs={12} md={6} className="left-container">
                    <div className="truelancer-enterprise">
                        <h3>Truelancer Enterprise</h3>
                        <h2>That's How</h2>

                        <h2>Top Companies </h2>
                        <h2>Hire on Demand </h2><br></br>
                        <Grid container spacing={0} alignItems="flex-start">
                                <img 
                                    src="https://www.truelancer.com/_next/static/media/enterpriseHiring.35159150.png" 
                                    alt="Enterprise Hiring" 
                                    className="feature-image" 
                                /> <h4>Hire with Impact</h4>

                            <Grid item xs={2} md={8}>
                                <p>
                                    Seamless onboarding, swift results – find the right talent for your business in just 3 to 7 days.
                                </p>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={0} alignItems="flex-start">
                          
                          <img 
                              src="https://www.truelancer.com/_next/static/media/enterpriseTeam.ad1f96d5.png"
                              alt="Enterprise Confidence" 
                              className="feature-image" 
                          />  <h4>Confident Choices, Diverse Teams</h4>

                      <Grid item xs={5} md={8}>
                          <p>
                              Grow like wildfire, hire as you go match skills, meet needs, no fuss.
                          </p>
                      </Grid>
                  </Grid>
                        

                        <Grid container spacing={0} alignItems="flex-start">
                          
                                <img 
                                    src="https://www.truelancer.com/_next/static/media/enterpriseConfidence.9da246df.png" 
                                    alt="Enterprise Confidence" 
                                    className="feature-image" 
                                />  <h4>Confident Choices, Diverse Teams</h4>

                            <Grid item xs={5} md={8}>

                                <p>
                                    Craft a team that truly fits your business. Choose C2H for adaptability and permanent talent.
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

{/*right container*/}
                    
    <Grid item xl={12} md={4}>
    <Container maxWidth="xxl" className="right-container">
        <Grid item xl={12} sx={{ textAlign: 'left', marginTop: '1px' }}>
            <img
                src="https://www.truelancer.com/_next/static/media/enterpriseMain.6c033222.png"
                alt="Client Strip" 
                style={{ maxWidth: '500%', height: '100%' }} 
            />
            <img
                src="https://www.truelancer.com/_next/static/media/client-strip-xs.62c65e03.png"
                alt=""
                style={{ 
                    maxWidth: '260%', // Increase width
                    height: 'auto', // Maintain aspect ratio
                    marginTop: '40px', // Push the image down
                    display: 'block', // Ensure it's a block element
                    marginLeft: 'auto', // Center the image horizontally
                    marginBottom: '8%',
                    marginRight: 'auto' // Center the image horizontally
                }} 
            />
        </Grid>
    </Container>
</Grid>
     </Grid>
   </Container>

{/* 6th section*/} 
<div class="project-container">
    <div class="image-container">
        <img src="https://www.truelancer.com/_next/static/media/projectCoordinators.2cb520e0.png" alt="Project Coordinators"/>
    </div>
    <div class="text-container">
        <h1>Project Success Partners</h1>
        <p>Meet dedicated project coordinators ensuring flawless workflow, matching freelancers and clients for successful project outcomes.</p>
        <div class="paragraph-container">
          <p>Connects you to best matched freelancers for project success and satisfaction.</p>
          <p>Smooth project workflow, ensuring a stress-free and efficient experience for clients.</p>
          <p>On-time project delivery assurance, ensuring success for every client.</p>
         </div>
        </div>
        
</div>
 

{/* 7th section*/}
<Container maxWidth="xxl" className="smart-hire-container" style={{ marginTop: '40px' }}>
    <Typography variant="h4" align="center" gutterBottom>
        Smart Hires Powered by AI
    </Typography>
    
    <div className="text-image-container">
        <Typography variant="h2" color="textSecondary" className="text-content">
            Elevating hires with advanced AI algorithms for smarter freelancer selection.
        </Typography>
        <img
            src="https://www.truelancer.com/_next/static/media/aIMatchingImage.8ee29605.jpg"
            alt="AI Matching"
            className="custom-image-style"
        />
    </div>


    <Grid container spacing={4} style={{ marginTop: '1%', borderRadius: '50px' }}>
      {/* AI Matching Section */}
      <Grid item xs={12} md={5}>
        <Card elevation={3} style={{ width: '68rem', backgroundColor: '#7dbadb', borderRadius: '30px' }}>
          <CardContent style={{ textAlign: 'left' }}>
            <h5 style={{ fontSize: '4rem', color: '#483D8B', fontWeight: 'bold' }}>
              Your Personalised AI Recruiter
            </h5>
            
            <p style={{ fontSize: '3rem', color: '#000' }}>
              Streamline hiring with your Personalised AI Recruiter's tailored recommendations.
            </p>
          </CardContent>
        </Card>
      </Grid>

      {/* AI Powered Talent Scoring Section */}
      <Grid item xs={12} md={5}>
        <Card elevation={3} style={{ width: '68rem', backgroundColor: '#7dbadb', borderRadius: '30px' }}>
          <CardContent style={{ textAlign: 'left' }}>
            <h5 style={{ fontSize: '4rem', color: '#483D8B', fontWeight: 'bold' }}>
              AI Powered Talent Scoring
            </h5>
            <p style={{ fontSize: '3rem', color: '#000' }}>
              Get the best with GPT-driven recommendations and AI Scoring for expert shortlistings.
            </p>
          </CardContent>
        </Card>c
      </Grid>
    </Grid>
    </Container>




<br></br><br></br>
 <br/><br/>
</div>
    
  );
};

export default Home;
