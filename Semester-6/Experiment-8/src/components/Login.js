import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Box, Typography, Paper, Container, Fade } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8080/login", {
        username: username,
        password: password
      });

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Invalid Credentials! Try again.");
    }
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      background: "linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%)" 
    }}>
      <Container maxWidth="xs">
        <Fade in={true} timeout={1000}>
          <Paper elevation={0} sx={{ 
            p: 5, 
            borderRadius: "24px", 
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
            textAlign: "center"
          }}>
            <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: "-0.02em", mb: 1 }}>
              DEV_VAULT
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
              Sign in to your secure workspace.
            </Typography>

            {error && <Typography color="error" variant="caption" sx={{ display: 'block', mb: 2 }}>{error}</Typography>}

            <Box component="form" noValidate>
              <TextField
                fullWidth
                placeholder="Username"
                variant="outlined"
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', backgroundColor: '#fbfbfd' }}}
              />
              <TextField
                fullWidth
                type="password"
                placeholder="Password"
                variant="outlined"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', backgroundColor: '#fbfbfd' }}}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={login}
                sx={{ 
                  mt: 4, 
                  py: 1.5, 
                  borderRadius: "12px", 
                  backgroundColor: "#0071e3", 
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  '&:hover': { backgroundColor: '#0077ed' }
                }}
              >
                Sign In
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}

export default Login;