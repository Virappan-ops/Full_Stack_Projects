import { Grid, Container, Typography, Box } from '@mui/material';
import Navbar from './Navbar';
import Hero from './Hero';
import ProjectCard from './ProjectCard';

const Home = () => {
  return (
    <Box sx={{ bgcolor: '#0a192f', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" color="white" fontWeight="bold" sx={{ mb: 4 }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard title="IONIX AI" desc="An AI-powered productivity assistant built with MERN." />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard title="E-Store PWA" desc="Full-stack storefront with offline capabilities." />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard title="Azure Bot" desc="AI chatbot trained for cloud service queries." />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;