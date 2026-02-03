import { Box, Typography, Container, Chip, Stack } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ bgcolor: '#0a192f', color: 'white', py: 10, textAlign: 'center' }}>
      <Container>
        <Typography variant="h2" fontWeight="800" gutterBottom>
          Hi, I'm a <span style={{ color: '#00d2ff' }}>Full-Stack Developer</span>
        </Typography>
        <Typography variant="h6" color="grey.400" sx={{ mb: 4 }}>
          Specializing in React, MERN Stack, and AI Solutions.
        </Typography>
        
        <Stack direction="row" spacing={1} justifyContent="center">
          <Chip label="React" sx={{ color: 'white', borderColor: '#00d2ff' }} variant="outlined" />
          <Chip label="Node.js" sx={{ color: 'white', borderColor: '#00d2ff' }} variant="outlined" />
          <Chip label="Azure AI" sx={{ color: 'white', borderColor: '#00d2ff' }} variant="outlined" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;