import React, { useState } from "react";
import axios from "axios";
import { Typography, Button, Box, Container, Paper, AppBar, Toolbar, Avatar, Chip, Fade, Grid } from "@mui/material";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("username");
  const password = sessionStorage.getItem("password");
  
  const [data, setData] = useState("");

  if (role !== "ADMIN") {
    alert("Access Denied: You are not an Admin!");
    window.location.href = "/";
  }

  const fetchAdminData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: { username, password }
      });
      setData(res.data.message);
    } catch (err) {
      setData("Error fetching Admin data.");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", background: "radial-gradient(circle at 50% 0%, #ffffff 0%, #f5f5f7 100%)" }}>
      
      {/* Bada Navbar */}
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 }, minHeight: '80px' }}>
          <Typography variant="h6" sx={{ color: "#1d1d1f", fontWeight: 800, letterSpacing: '-0.5px' }}>DEV_VAULT</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
             <Chip label="Superuser" size="small" sx={{ bgcolor: '#ff3b30', color: '#fff', fontWeight: 700, px: 1 }} />
             <Avatar sx={{ width: 40, height: 40, bgcolor: "#1d1d1f" }}>{username ? username[0].toUpperCase() : 'A'}</Avatar>
             {/* Red Pill Logout */}
             <Button 
                variant="contained" 
                onClick={logout} 
                sx={{ bgcolor: "#ff3b30", color: "#fff", borderRadius: '50px', textTransform: 'none', fontWeight: 600, px: 3, '&:hover': {bgcolor: '#e6352b'} }}
             >
                Logout
             </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ pt: { xs: 6, md: 10 }, pb: 8 }}>
        <Fade in={true} timeout={800}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: "-0.04em", mb: 2, color: "#1d1d1f", fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Admin Console.
              </Typography>
              <Typography variant="h6" sx={{ color: "#86868b", fontWeight: 400 }}>
                Elevated privileges granted for <b style={{color: '#1d1d1f'}}>{username}</b>.
              </Typography>
            </Box>

            {/* Centered Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
              <Grid item xs={12} sm={5}>
                <Paper sx={{ p: 4, borderRadius: "28px", bgcolor: "#1d1d1f", color: "white", textAlign: "center", boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}>
                  <Typography variant="subtitle1" sx={{ opacity: 0.7, mb: 1 }}>Clearance Level</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>Maximum</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Paper sx={{ p: 4, borderRadius: "28px", bgcolor: "#fff", textAlign: "center", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <Typography variant="subtitle1" sx={{ color: "#86868b", mb: 1 }}>System Status</Typography>
                  <Typography variant="h4" sx={{ color: "#34c759", fontWeight: 700 }}>Secured</Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Main Action Card */}
            <Paper sx={{ p: { xs: 4, md: 6 }, width: '100%', borderRadius: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", border: "1px solid rgba(255,255,255,0.5)", textAlign: "center", bgcolor: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)" }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1d1d1f' }}>Master Data Control</Typography>
              <Typography variant="body1" sx={{ color: "#86868b", mb: 5, maxWidth: "500px", mx: "auto" }}>
                Fetch sensitive system reports reserved only for administrators.
              </Typography>
              
              <Button 
                variant="contained" 
                disableElevation 
                onClick={fetchAdminData} 
                sx={{ borderRadius: "50px", px: 6, py: 1.8, bgcolor: '#ff3b30', color: '#fff', fontSize: '1rem', fontWeight: 600, textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { bgcolor: '#e6352b', transform: 'scale(1.02)' } }}
              >
                Fetch Admin Data
              </Button>

              {data && (
                <Box sx={{ mt: 5, p: 3, borderRadius: "20px", bgcolor: "#f5f5f7", border: "1px solid #e5e5ea", width: '100%' }}>
                  <Typography variant="h6" sx={{ color: "#1d1d1f", fontWeight: 500 }}>{data}</Typography>
                </Box>
              )}
            </Paper>

          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default AdminDashboard;