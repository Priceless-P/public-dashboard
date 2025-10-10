import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#bc0505",
    },
    secondary: {
      main: "#f5f5f5",
    },
    background: {
      default: "#ffffff",
      paper: "#fafafa",
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily:
      '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif',
    h5: {
      fontWeight: 600,
      color: "#8B0000",
    },
  },
  spacing: 4,
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "blockTitle" },
          style: ({ theme }) => ({
            fontWeight: "bold",
            color: "white",
            fontSize: "0.75rem",
            [theme.breakpoints.up("lg")]: {
              fontSize: "0.65rem",
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "0.65rem",
            },
          }),
        },
        {
          props: { variant: "blockCaption" },
          style: {
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.6rem",
          },
        },
        {
          props: { variant: "blockTime" },
          style: ({ theme }) => ({
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.6rem",
            [theme.breakpoints.up("sm")]: {
              fontSize: "0.55rem",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "0.53rem",
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "0.53rem",
            },
          }),
        },
        {
          props: { variant: "blockMiner" },
          style: ({ theme }) => ({
            fontWeight: 500,
            color: "white",
            fontSize: "0.6rem",
            [theme.breakpoints.up("sm")]: {
              fontSize: "0.7rem",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "0.6rem",
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "0.55rem",
            },
          }),
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 20px",
        },
      },
    },
    MuiSlider: {
      variants: [
        {
          props: { variant: "chart" },
          style: ({ theme }) => ({
            height: 8,
            padding: "12px 0",
            "& .MuiSlider-thumb": {
              height: 24,
              width: 24,
              backgroundColor: "#fff",
              border: "3px solid",
              borderColor: `${theme.palette.text.secondary}`,
              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3) !important",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              "&::before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
            },
            "& .MuiSlider-track": {
              height: 6,
              borderRadius: 3,
              background: `linear-gradient(90deg, rgba(57, 60, 63, 0.4) 0%, ${theme.palette.text.secondary} 60%) !important`,
              border: "none",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
            },
            "& .MuiSlider-rail": {
              height: 6,
              borderRadius: 3,
              opacity: 0.3,
              backgroundColor: "#e0e0e0",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
            },
            "& .MuiSlider-mark": {
              backgroundColor: "transparent",
              height: 2,
              width: 2,
              "&.MuiSlider-markActive": {
                backgroundColor: "transparent",
              },
            },
            "& .MuiSlider-markLabel": {
              fontSize: "0.75rem",
              fontWeight: 600,
              color: theme.palette.text.secondary,
              transform: "translateY(12px)",
              padding: "4px 8px",
              "&.MuiSlider-markLabelActive": {
                color: `${theme.palette.text.secondary}`,
              },
            },
          }),
        },
      ],
    },
  },
  // Custom styles
  custom: {
    block: {
      iconSize: {
        xs: "0.6rem",
        sm: "0.6rem",
        lg: "0.55rem",
        xl: "0.55rem",
      },
      avatarSize: {
        xs: 12,
        sm: 14,
        lg: 12,
        xl: 10,
      },
      dividerColor: "rgba(255,255,255,0.2)",
      pendingAnimation: {
        animation: "blink 1.5s infinite",
        "@keyframes blink": {
          "20%": { opacity: 0.5 },
          "50%": { opacity: 0.3 },
          "80%": { opacity: 0.7 },
        },
      },
    },
    charts: {
      chartCard: {
        gridColumn: {
          xs: "span 15",
          sm: "span 15",
          md: "span 15",
          lg: "span 15",
        },
        padding: 2,
        mt: 5,
        boxShadow: 4,
        height: 550,
      },
      liveIndicator: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "success.main",
        animation: "pulse 2s infinite",
        "@keyframes pulse": {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.4 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
});

export default theme;
