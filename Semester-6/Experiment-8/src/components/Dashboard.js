import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, Typography, Paper, Grid, AppBar, Toolbar, Avatar, Chip, Container, Fade } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem("token");

  // Authentication Check
  useEffect(() => {
    if (!token) window.location.href = "/";
  }, [token]);

  // Fetch Data Logic
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8080/protected", {
        headers: { Authorization: "Bearer " + token }
      });
      setData(res.data);
    } catch (err) {
      setData("Error: Unauthorized Access");
    } finally {
      setLoading(false);
    }
  };

  // Logout Logic
  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", background: "radial-gradient(circle at 50% 0%, #ffffff 0%, #f5f5f7 100%)" }}>
      
      {/* Premium Navbar */}
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          <Typography variant="h6" sx={{ color: "#1d1d1f", fontWeight: 800, letterSpacing: '-0.5px' }}>DEV_VAULT</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
             <Chip label="Premium Pro" size="small" sx={{ bgcolor: '#1d1d1f', color: '#fff', fontWeight: 600, px: 1 }} />
             <Avatar sx={{ width: 36, height: 36, bgcolor: "#0071e3", fontSize: '1rem', fontWeight: 600 }}>U</Avatar>
             <Button variant="text" onClick={logout} sx={{ color: "#0071e3", textTransform: 'none', fontWeight: 600 }}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Container (Centered) */}
      <Container maxWidth="md" sx={{ pt: { xs: 6, md: 10 }, pb: 8 }}>
        <Fade in={true} timeout={800}>
          <Box>
            
            {/* Centered Headers */}
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: "-0.04em", mb: 2, color: "#1d1d1f", fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Welcome back.
              </Typography>
              <Typography variant="h6" sx={{ color: "#86868b", fontWeight: 400 }}>
                Here is what's happening with your secure vault today.
              </Typography>
            </Box>

            {/* Top Stats Cards (Balanced Layout) */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 4, borderRadius: "28px", bgcolor: "#0071e3", color: "white", textAlign: "center", boxShadow: "0 15px 35px rgba(0, 113, 227, 0.2)" }}>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9, mb: 1 }}>Security Level</Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: '-1px' }}>AES-256</Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 4, borderRadius: "28px", bgcolor: "#fff", textAlign: "center", boxShadow: "0 15px 35px rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.02)" }}>
                  <Typography variant="subtitle1" sx={{ color: "#86868b", mb: 1 }}>Session Status</Typography>
                  <Typography variant="h3" sx={{ color: "#34c759", fontWeight: 700, letterSpacing: '-1px' }}>Active</Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Main Action Card (Centered Content) */}
            <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", border: "1px solid rgba(255,255,255,0.5)", textAlign: "center", bgcolor: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)" }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1d1d1f' }}>Secure Server Bridge</Typography>
              <Typography variant="body1" sx={{ color: "#86868b", mb: 5, maxWidth: "500px", mx: "auto" }}>
                Request a secure handshake with the backend using your encrypted JSON Web Token.
              </Typography>
              
              <Button 
                variant="contained" 
                disableElevation 
                onClick={getData} 
                disabled={loading}
                sx={{ 
                  borderRadius: "50px", // Pill shape for premium look
                  px: 6, 
                  py: 1.8, 
                  bgcolor: '#1d1d1f', 
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: '#424245', transform: 'scale(1.02)' } 
                }}
              >
                {loading ? "Decrypting Data..." : "Fetch Secure Data"}
              </Button>

              {/* Data Display Box */}
              {data && (
                <Fade in={true}>
                  <Box sx={{ mt: 5, p: 3, borderRadius: "20px", bgcolor: "#f5f5f7", border: "1px solid #e5e5ea", display: 'inline-block', minWidth: '80%' }}>
                    <Typography variant="overline" sx={{ color: "#86868b", fontWeight: 600, letterSpacing: '1px' }}>Backend Response</Typography>
                    <Typography variant="h6" sx={{ color: "#1d1d1f", mt: 1, fontWeight: 500 }}>{data}</Typography>
                  </Box>
                </Fade>
              )}
            </Paper>

          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Dashboard;