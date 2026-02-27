import { Box, Typography, Container, Avatar } from "@mui/material";

const Hero = ({ scrollDown }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #001f3f 0%, #007bff 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h2" fontWeight="800" sx={{ mb: 2 }}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8, mb: 6 }}>
          Full-Stack Developer specializing in React, Node.js, and AI Solutions.
        </Typography>

        <Box 
          onClick={scrollDown}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            cursor: 'pointer',
            transition: '0.4s',
            '&:hover': { transform: 'scale(1.05)' }
          }}
        >
          <Avatar
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
            sx={{ 
              width: 350, // Pehle se bada size
              height: 350, 
              border: '10px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 50px rgba(0,0,0,0.4)',
              mb: 3
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1, color: "#00d2ff" }}>
            ⬇️ Click on image to continue
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;