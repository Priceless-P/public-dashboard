import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Dashboard from "./pages/Dashboard";
import { CssBaseline } from "@mui/material";
import Header from "./components/layout/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
