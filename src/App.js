import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { Global } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = {
    bgColor: darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    textColor: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    elementBg: darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    moonStroke: darkMode ? "#fff" : "hsl(209, 23%, 22%)",
  };

  function handleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Global />
        <BrowserRouter>
          <Header handleDarkMode={handleDarkMode} />
          <Pages />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
