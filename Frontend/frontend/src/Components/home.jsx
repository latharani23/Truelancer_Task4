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
<Container maxWidth="xxl" className="enterprises-container">
  <Grid container spacing={4} alignItems="flex-start" className="flex-container">
    
    {/* Text and Descriptions Section */}
    <Grid item xs={12} md={6} className="text-container">
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12}>
          <h3>Truelancer Enterprise</h3>
          <h2>That's How</h2>
          <h2>Top Companies</h2>
          <h2>Hire on Demand</h2>
        </Grid>

        <Grid item xs={12}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
    <img
      src="https://www.truelancer.com/_next/static/media/enterpriseHiring.35159150.png"
      alt="Hire with Impact"
      style={{ width: '10%', height: 'auto', display: 'block' }}
    />
    <div>
      <h4 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#333', margin: 0 }}>
        Hire with Impact
      </h4>
      <h6 style={{ fontSize: '3rem', color: '#555', marginTop: '0.5rem' }}>
        Seamless onboarding, swift results – find the right talent for your business in just 3 to 7 days.
      </h6>
    </div>
  </div>
</Grid>

<Grid item xs={12}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
    <img
      src="https://www.truelancer.com/_next/static/media/enterpriseTeam.ad1f96d5.png"
      alt="Scale with Precision"
      style={{ width: '10%', height: 'auto', display: 'block' }}
    />
    <div>
      <h4 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#333', margin: 0 }}>
        Scale with Precision
      </h4>
      <h6 style={{ fontSize: '3rem', color: '#555', marginTop: '0.5rem' }}>
        Grow like wildfire, hire as you go match skills, meet needs, no fuss.
      </h6>
    </div>
  </div>
</Grid>


  <Grid item xs={12}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
    <img
      src="https://www.truelancer.com/_next/static/media/enterpriseConfidence.9da246df.png"
      alt="Confident Choices, Diverse Teams"
      style={{ width: '10%', height: 'auto', display: 'block' }}
    />
    <div>
      <h4 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#333', margin: 0 }}>
        Confident Choices, Diverse Teams
      </h4>
      <h6 style={{ fontSize: '3rem', color: '#555', marginTop: '0.5rem' }}>
        Craft a team that truly fits your business. Choose C2H for adaptability and permanent talent.
      </h6>
    </div>
  </div><br></br>
  <button className="explore-button">
          Explore More
  </button>
</Grid>
      </Grid>
    </Grid>

    {/* Image Section */}
    <Grid item xs={12} md={6} className="image-container">
      <img
        src="https://www.truelancer.com/_next/static/media/enterpriseMain.6c033222.png"
        alt="Main Enterprise Image"
        className="main-image"
      />
    
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


    {/* 8th section */}
  <div className="cards skills-container">
  <div className="row">
    <div className="col-md-4">
      <div className="bg-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HwGm40l0u6iKFVfacPvW83QITOHMTc17Mw&s"
          style={{ width: "90%" }}
          alt="skills 1"
        />
        <div className="content">
          <i className="bi bi-gear"></i>
          <h3>Skilled Developers</h3>
        </div>
        <div className="overlay">
          <p>Detail about Skill 1</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-image">
        <img
          src="https://img.freepik.com/premium-photo/two-women-entrepreneurs-working-together-office_93675-134968.jpg"
          style={{ width: "90%" }}
          alt="Skill 2"
        />
        <div className="content">
          <i className="bi bi-pencil"></i>
          <h3>Designers & Creatives</h3>
        </div>
        <div className="overlay">
          <p>Detail about Skill 2</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSKHArAUCXVZm1kxqudXkG1O5mxHX404_qQ&s"
          style={{ width: "90%" }}
          alt="Skill 3"
        />
        <div className="content">
          <i className="bi bi-pen"></i>
          <h3>Bloggers & Writers</h3>
        </div>
        <div className="overlay">
          <p>Detail about Skill 3</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div className="bg-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-6n1VLemlmGxMssUtZQOuIX_kcAYGoPf0g&s"
          style={{ width: "90%" }}
          alt="Skill 4"
        />
        <div className="content">
          <i className="bi bi-search"></i>
          <h3>SEO Experts</h3>
        </div>
        <div className="overlay">
          <p>Detail about Skill 4</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYwsf9Bj6uIrB11pFHpR0D6XxQ2qifyqeuw&s"
          style={{ width: "90%" }}
          alt="Skill 5"
        />
        <div className="content">
          <i className="bi bi-graph-up"></i>
          <h3>Sales & Marketing</h3>
        </div>
        <div className="overlay">
          <p>Detail about Skill 5</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aP0dWs9hb2Bemp0wCQkCKuKycIVU1mk6TQ&s"
          style={{ width: "90%" }}
          alt="Skill 6"
        />
        <div className="content">
          <i className="bi bi-phone"></i>
          <h3>Mobile Apps</h3>
        </div>
        <div className="overlay">
          <p>Detail about Skill 6</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* 9th section */}
<div className="prime-services-container">
            <div className="service-division">
                <img src="https://assets.truelancer.com/assets/home_v/images/prmIcn_01.png" alt="PRIME SERVICE" />
                <h3>PRIME SERVICE</h3>
                <p>Get prime talent sourcing and dedicated support throughout the way.</p>
                <img src="https://assets.truelancer.com/assets/home_v/images/prmIcn_02.webp" alt="PRIME TALENT" />
                <h3>PRIME TALENT</h3>
                <p>Access to handpicked, top-rated freelancers from our curated pool.</p>
                <img src="https://assets.truelancer.com/assets/home_v/images/prmIcn_03.png" alt="PRIME MANAGERS" />
                <h3>PRIME MANAGERS</h3>
                <p>Access to our inhouse Prime Managers who manage your Project.</p>
              </div>

  <div className="additional-image-division" >
  <img 
    src="https://aem.dropbox.com/cms/content/dam/dropbox/blog/files/2017/05/paper-laptop-4.jpg"
    alt="NEW IMAGE" 
    style={{ 
      width: "100%", 
      maxWidth: "1300px",
      height: "100vh", 
      maxHeight: "200vh", 
    }} 
  />
  <div 
    style={{ 
      position: "absolute", 
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%, -50%)", 
      color:"#ffffff",
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      textAlign: "center" 
    }}
  >
<h3>GET THE TEAM
WHICH MANAGE YOUR TASKS...</h3>
<p>With Truelancer Prime we personally sort through our talent pool and pre-screen the best options according to your requirements. We also manage your Project on your behalf thus provising you best results with least hassle.</p>
    <button className="learn-button">
      Learn More
    </button>
  </div>
</div>
</div>


{/* 10 section*/}

    <div class="showcaseTeam">
        <div id="carouselTeam" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                        <div class="card-body text-center">
                            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture-400x400.jpg" class="avatar" alt="Team Member 1"/>
                            <h5 class="card-title">Team Member 1</h5>
                            <p class="card-text">Role: Developer</p>
                        </div>
                    </div>
                <div class="carousel-item">
                        <div class="card-body text-center">
                            <img src="https://img.freepik.com/free-psd/elegant-man-with-crossed-arms_1154-563.jpg?semt=ais_hybrid" class="avatar" alt="Team Member 2"/>
                            <h5 class="card-title">Team Member 2</h5>
                            <p class="card-text">Role: Designer</p>
                        </div>
                    </div>
                <div class="carousel-item">
\                        <div class="card-body text-center">
                            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI-400x400.jpg" class="avatar" alt="Team Member 3"/>
                            <h5 class="card-title">Team Member 3</h5>
                            <p class="card-text">Role: Project Manager</p>
                        </div>
                    </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselTeam" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselTeam" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

{/*footer section*/}
<footer class="footer">
  <div class="footer-links">
    <div class="footer-column">
      <h4>Useful links</h4>
      <ul>
        <li>Get Verified</li>
        <li>Truelancer Prime</li>
        <li>Membership Upgrade</li>
        <li>Productivity Tools</li>
        <li>Mobile Apps</li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Company</h4>
      <ul>
        <li>About us</li>
        <li>Contact us</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>Press</li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Information</h4>
      <ul>
        <li>Fee and Charges</li>
        <li>Cancellation</li>
        <li>Terms & Condition</li>
        <li>Privacy Policy</li>
        <li>FAQ & Useful Links</li>
        <li>Membership policy</li>
      </ul>
    </div>

    <div class="footer-column">
      <h2>Content Writers</h2>
      <ul>
        <li>Academic Writers</li>
        <li>Blog Writers</li>
        <li>Technical Writers</li>
        <li>Copywriters</li>
        <li>SEO Writers</li>
      </ul>
    </div>

    <div class="footer-column">
      <h2>Freelancers</h2>
      <ul>
        <li>Freelancers in India</li>
        <li>Freelancers in USA</li>
        <li>Freelancers in UK</li>
        <li>Freelancers in Philippines</li>
        <li>Freelancers in Pakistan</li>
        <li>Freelancers in Bangladesh</li>
      </ul>
    </div>

    <div class="footer-column">
      <h2>Freelance Jobs</h2>
      <ul>
        <li>Freelance Writing Jobs</li>
        <li>Graphic Design Jobs</li>
        <li>Data Entry Jobs</li>
        <li>Virtual Assistant Jobs</li>
        <li>Customer Service Jobs</li>
      </ul>
    </div>

    <div class="footer-column">
      <h2>Online Jobs</h2>
      <ul>
        <li>Work From Home Jobs</li>
        <li>Part Time Jobs</li>
        <li>Interior Design Jobs</li>
        <li>Voice Over Jobs</li>
        <li>Translator Jobs</li>
        <li>Accounting Jobs</li>
      </ul>
    </div>

    <div class="footer-column">
      <h2>Designers</h2>
      <ul>
        <li>Logo Designer</li>
        <li>Web Designer</li>
        <li>Web Developer</li>
        <li>SEO Consultant</li>
        <li>Android Developer</li>
        <li>IOS Developer</li>
      </ul>
    </div>

    <div class="footer-column">
      <h2>Developers</h2>
      <ul>
        <li>Front End Developer</li>
        <li>Backend Developer</li>
        <li>PHP Developer</li>
        <li>Wordpress Developer</li>
        <li>Java Developer</li>
        <li>API Developer</li>
      </ul>
    </div>

    <div class="footer-column">
      <h2>Translations</h2>
      <ul>
        <li>English to Spanish Translation</li>
        <li>German to English Translation</li>
        <li>English to Hindi Translation</li>
        <li>English to Tamil Translation</li>
        <li>English to French Translation</li>
        <li>Spanish to English Translation</li>
      </ul>
    </div>
  </div>
  <div class="footer-logos">
    <img src="https://static.truelancer.com/truelancer-logo-dark-background_small.png" alt="Truelancer Logo" class="footer-logo" />
    <div class="app-logos">
      <img src="https://static.truelancer.com/assets/assets/home_v/images/google-play-store.png" alt="Play Store" class="app-logo" />
      <img src="https://static.truelancer.com/assets/assets/home_v/images/apple-app-store.png" alt="Apple Store" class="app-logo" />
    </div>
  </div>

  <p class="copyright-text">© 2024 Your Company Name. All rights reserved.</p>
</footer>
</div>
    
  );
};

export default Home;
