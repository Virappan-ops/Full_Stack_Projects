import { useMemo } from "react";
import { Box, Container, Typography, Grid, Paper, LinearProgress } from "@mui/material";

const Skills = () => {
  const rawSkills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Gemini API Integration", level: 80, category: "AI Solutions" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Material UI", level: 85, category: "Frontend" },
    { name: "Express.js", level: 80, category: "Backend" }
  ];

  const skillStats = useMemo(() => {
    const frontendCount = rawSkills.filter(s => s.category === "Frontend").length;
    const backendCount = rawSkills.filter(s => s.category === "Backend" || s.category === "Database").length;
    const aiCount = rawSkills.filter(s => s.category === "AI Solutions").length;
    
    return { frontendCount, backendCount, aiCount };
  }, [rawSkills]);

  return (
    <Box sx={{ bgcolor: "#ffffff", py: 8, minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Typography variant="h2" fontWeight="800" textAlign="center" color="primary" gutterBottom>
          Technical Arsenal
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
          A breakdown of my core competencies across the stack.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3, bgcolor: '#f1f4f8' }}>
              <Typography variant="h6" fontWeight="bold">Frontend</Typography>
              <Typography variant="h4" color="primary">{skillStats.frontendCount}</Typography>
              <Typography variant="body2" color="text.secondary">Core Techs</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3, bgcolor: '#f1f4f8' }}>
              <Typography variant="h6" fontWeight="bold">Backend & DB</Typography>
              <Typography variant="h4" color="primary">{skillStats.backendCount}</Typography>
              <Typography variant="body2" color="text.secondary">Core Techs</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3, bgcolor: '#f1f4f8' }}>
              <Typography variant="h6" fontWeight="bold">AI Solutions</Typography>
              <Typography variant="h4" color="primary">{skillStats.aiCount}</Typography>
              <Typography variant="body2" color="text.secondary">Core Techs</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          {rawSkills.map((skill, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" fontWeight="bold">{skill.name}</Typography>
                <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={skill.level} 
                sx={{ height: 8, borderRadius: 5, backgroundColor: '#e0e0e0', '& .MuiLinearProgress-bar': { backgroundColor: '#007bff' } }}
              />
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default Skills;