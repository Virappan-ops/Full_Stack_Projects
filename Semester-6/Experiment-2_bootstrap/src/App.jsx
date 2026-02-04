import './App.css'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap'
import { useRef } from 'react'
import HoverRating from './components/rating'
import ImageAvatars from './components/avatar'
import RecipeReviewCard from './components/ReviewCard.jsx'

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#projects">All Projects</NavDropdown.Item>
                <NavDropdown.Item href="#project1">Project 1</NavDropdown.Item>
                <NavDropdown.Item href="#project2">Project 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="bg-primary text-white py-5 position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(135deg, #007bff 0%, #6610f2 100%)', opacity: 0.9 }}></div>
        <Container className="position-relative">
          <Row className="align-items-center justify-content-center min-vh-100">
            <Col md={5} className="text-center text-md-start">
              <h1 className="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
              <p className="lead mb-4">Full-Stack Developer specializing in React, Node.js, and AI Solutions. Let's build something amazing together!</p>
            </Col>
            <Col md={7} className="text-center">
              <p className="mb-3 fw-bold">Click on image to continue</p>
              <img 
                src="https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ef888b561df3af53ddd2fb8fa8f5cfff6d911acf98a7042af4730d9c2f145fb44e9b2b3f7b3f1754c2ca5dc62ebb281c5" 
                alt="Developer Portrait" 
                className="img-fluid rounded-circle shadow-lg" 
                style={{ maxWidth: '600px', border: '5px solid white', cursor: 'pointer' }}
                onClick={scrollToAbout}
              />
            </Col>
          </Row>
        </Container>
        <div className="position-absolute bottom-0 end-0 p-4 opacity-25">
          <i className="bi bi-code-slash display-1"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>About Me</h2>
              <p>I am a passionate full-stack developer with experience in building web applications using modern technologies.</p>
              <ImageAvatars />
            </Col>
            <Col md={6}>
              <RecipeReviewCard />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">My Projects</h2>
          <Row>
            <Col md={4} id="project1">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>IONIX AI</Card.Title>
                  <Card.Text>An AI-powered productivity assistant built with MERN stack.</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} id="project2">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>E-Store PWA</Card.Title>
                  <Card.Text>Full-stack storefront with offline capabilities.</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Azure Bot</Card.Title>
                  <Card.Text>AI chatbot trained for cloud service queries.</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark text-white">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h2>Contact Me</h2>
              <p>Get in touch for collaborations or inquiries.</p>
              <HoverRating />
              <p>Rate my work!</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-light py-3">
        <Container className="text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </Container>
      </footer>
    </>
  )
}

export default App
