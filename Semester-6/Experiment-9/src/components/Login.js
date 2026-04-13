import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, TextField, Box, Fade } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }
      });

      if (res.status === 200) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        const userRole = (username === "vishav") ? "ADMIN" : "USER";
        sessionStorage.setItem("role", userRole);

        if (userRole === "ADMIN") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/user";
        }
      }
    } catch (err) {
      setError("Invalid Credentials! Please try again.");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#f5f5f7" }}>
      <Fade in={true} timeout={800}>
        <Card sx={{ maxWidth: 400, width: '100%', p: 3, borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: "-0.5px", mb: 1 }} align="center">
              RBAC Secure Login
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 3 }}>
              Enter your credentials to access the vault.
            </Typography>

            {/* Purana Error Alert logic */}
            {error && <div className="alert alert-danger" style={{ borderRadius: '12px', fontSize: '14px' }}>{error}</div>}
            
            <TextField 
              fullWidth label="Username" margin="normal" variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <TextField 
              fullWidth label="Password" type="password" margin="normal" variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              onChange={(e) => setPassword(e.target.value)} 
            />
            
            <Button 
              fullWidth variant="contained" 
              sx={{ mt: 3, py: 1.5, borderRadius: "12px", bgcolor: "#0071e3", textTransform: 'none', fontWeight: 600 }} 
              onClick={login}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
}

export default Login;