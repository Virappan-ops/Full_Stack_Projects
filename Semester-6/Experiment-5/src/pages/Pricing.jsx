import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, Container, Typography, Grid, Paper, Button, Chip } from "@mui/material";
import { AppContext } from "../context/AppContext";

const Pricing = () => {
  const { user, toggleProStatus } = useContext(AppContext);
  const favoriteCount = useSelector((state) => state.favorites.items.length);

  const basePackages = [
    { title: "Frontend UI", price: 300, desc: "React + Tailwind sleek UI." },
    { title: "Full-Stack Web App", price: 800, desc: "MERN Stack complete setup." },
    { title: "AI Integrated App", price: 1500, desc: "OpenAI/Gemini API connected." }
  ];

  const calculatedPackages = useMemo(() => {
    let discount = user.isPro ? 0.20 : 0; 
    if (favoriteCount >= 2) discount += 0.05; 

    return basePackages.map(pkg => ({
      ...pkg,
      finalPrice: pkg.price - (pkg.price * discount),
      discountPercent: discount * 100
    }));
  }, [user.isPro, favoriteCount]);

  return (
    <Box sx={{ bgcolor: "#ffffff", py: 10, minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Typography variant="h2" fontWeight="800" textAlign="center" color="primary" gutterBottom>
          Freelance Services
        </Typography>
        
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            You have favorited {favoriteCount} projects. {favoriteCount >= 2 && <span style={{color: "green"}}>You get an extra 5% engagement discount!</span>}
          </Typography>
          
          <Button variant="contained" color={user.isPro ? "success" : "secondary"} onClick={toggleProStatus} sx={{ borderRadius: "20px" }}>
            {user.isPro ? "Pro Client Enabled (20% Off)" : "Activate Pro Client Mode"}
          </Button>
        </Box>

        <Grid container spacing={4}>
          {calculatedPackages.map((pkg, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 4, border: user.isPro ? "2px solid #2e7d32" : "1px solid #ddd" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>{pkg.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{pkg.desc}</Typography>
                
                {pkg.discountPercent > 0 && (
                  <Typography variant="body2" sx={{ textDecoration: "line-through", color: "red" }}>
                    ${pkg.price}
                  </Typography>
                )}
                
                <Typography variant="h3" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
                  ${pkg.finalPrice}
                </Typography>
                
                {pkg.discountPercent > 0 && (
                  <Chip label={`Save ${pkg.discountPercent}%`} color="success" size="small" sx={{ mb: 3 }} />
                )}
                
                <Button fullWidth variant="outlined" sx={{ borderRadius: "20px", fontWeight: "bold" }}>
                  Select Plan
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;