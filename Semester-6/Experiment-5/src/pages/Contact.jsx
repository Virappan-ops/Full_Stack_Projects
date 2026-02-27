import { Box, Container, Typography, TextField, Button, Stack, Paper } from "@mui/material";
import HoverRating from "../components/rating";

const Contact = () => {
  return (
    <Box sx={{ bgcolor: "#f1f4f8", height: "90vh", display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 3 }}>
            Contact Me
          </Typography>

          <Stack spacing={2}>
            <TextField label="Name" variant="outlined" size="small" fullWidth />
            <TextField label="Email" variant="outlined" size="small" fullWidth />
            <TextField label="Message" variant="outlined" multiline rows={2} fullWidth />
            <Button variant="contained" fullWidth sx={{ bgcolor: "#007bff", fontWeight: "bold" }}>
              Send
            </Button>
          </Stack>

          <Box sx={{ mt: 3, textAlign: "center", pt: 2, borderTop: "1px solid #ddd" }}>
            <HoverRating />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;