import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#121212' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#00d2ff' }}>
          DEV_VAULT
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button sx={{ backgroundColor: '#00d2ff', color: '#000', '&:hover': { backgroundColor: '#00b8e6' } }}>
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;