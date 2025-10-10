import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: "auto",
        textAlign: "right",
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontStyle: "bold" }}
      >
        v 0.01
      </Typography>
    </Box>
  );
};

export default Footer;
