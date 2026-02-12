import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        py: 2,
        textAlign: "center",
        mt: 5,
      }}
    >
      <Typography color="grey.400" fontSize="14px">
        © 2026 Virappan | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
