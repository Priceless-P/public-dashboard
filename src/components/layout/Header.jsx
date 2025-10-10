import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        width: "100%",
        maxWidth: "100%",
        pt: "4%",
        px: "4%",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.svg"
            alt="Logo"
            style={{
              height: isMobile ? "40px" : "80px",
              width: "auto",
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 3,
            py: 1,
            fontSize: isMobile ? "0.875rem" : "1rem",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          + Connect
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
