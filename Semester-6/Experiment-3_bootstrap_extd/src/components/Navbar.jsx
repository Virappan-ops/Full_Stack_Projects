import { AppBar, Toolbar, Typography, Button, Stack, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#ffffff", color: "#333", boxShadow: 1 }}>
      <Container>
        <Toolbar sx={{ justifyContent: "space-between", px: 0 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "#007bff", textDecoration: "none" }}
            component={Link}
            to="/"
          >
            DEV_VAULT
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button component={Link} to="/" color="inherit" sx={{ fontWeight: 600 }}>Home</Button>
            <Button component={Link} to="/projects" color="inherit" sx={{ fontWeight: 600 }}>Projects</Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: "#007bff",
                borderRadius: "20px",
                textTransform: "none",
                px: 3
              }}
            >
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;