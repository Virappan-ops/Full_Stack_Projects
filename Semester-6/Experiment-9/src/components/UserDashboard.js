import React, { useState } from "react";
import axios from "axios";
import { Typography, Button, Box, Container, Stack, Paper, AppBar, Toolbar, Avatar, Chip, Fade } from "@mui/material";

function UserDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("username");
  const password = sessionStorage.getItem("password");
  
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!role) window.location.href = "/";

  const fetchUserData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }
      });
      setMessage(res.data.message);
      setErrorMsg("");
    } catch (err) {
      setErrorMsg("Error fetching data.");
    }
  };

  const fetchAdminData = async () => {
    try {
      await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: { username, password }
      });
    } catch (err) {
      setMessage("");
      setErrorMsg("Access Denied! You do not have ADMIN privileges.");
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
             <Chip label="User Tier" size="small" sx={{ bgcolor: '#e5e5ea', color: '#1d1d1f', fontWeight: 600, px: 1 }} />
             <Avatar sx={{ width: 40, height: 40, bgcolor: "#34c759" }}>{username ? username[0].toUpperCase() : 'U'}</Avatar>
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
                Hello, {username}.
              </Typography>
              <Typography variant="h6" sx={{ color: "#86868b", fontWeight: 400 }}>
                Manage your profile and explore your access levels.
              </Typography>
            </Box>

            <Paper sx={{ p: { xs: 4, md: 6 }, width: '100%', borderRadius: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", border: "1px solid rgba(255,255,255,0.5)", textAlign: "center", bgcolor: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)" }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#1d1d1f' }}>Access Control Hub</Typography>
              
              {/* Perfectly Centered Buttons Stack */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" sx={{ width: '100%', mb: 4 }}>
                <Button 
                  variant="contained" 
                  disableElevation 
                  onClick={fetchUserData} 
                  sx={{ borderRadius: "50px", px: 4, py: 1.5, bgcolor: '#34c759', color: '#fff', fontWeight: 600, textTransform: 'none', minWidth: '180px' }}
                >
                  Get My Profile
                </Button>
                <Button 
                  variant="contained" 
                  disableElevation 
                  onClick={fetchAdminData} 
                  sx={{ borderRadius: "50px", px: 4, py: 1.5, bgcolor: '#000', color: '#fff', fontWeight: 600, textTransform: 'none', minWidth: '180px' }}
                >
                  Try Admin Access
                </Button>
              </Stack>

              {message && (
                <Box sx={{ p: 3, mt: 2, borderRadius: "20px", bgcolor: "#f2fcf5", border: "1px solid #d1f0db", display: 'inline-block', width: '100%' }}>
                  <Typography variant="h6" sx={{ color: "#1d1d1f" }}>{message}</Typography>
                </Box>
              )}

              {errorMsg && (
                <Box sx={{ p: 3, mt: 2, borderRadius: "20px", bgcolor: "#fff2f2", border: "1px solid #ffdbdb", display: 'inline-block', width: '100%' }}>
                  <Typography variant="h6" sx={{ color: "#ff3b30", fontWeight: 600 }}>{errorMsg}</Typography>
                </Box>
              )}
            </Paper>

          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default UserDashboard;