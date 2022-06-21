import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { CoinPage } from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import CryptoContext from "./CryptoContext";
// import { ThemeProvider, createTheme } from "@mui/material";
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <CryptoContext>
          <Header />
        </CryptoContext>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
