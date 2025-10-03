import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import EmailReplyGenerator from "./Components/EmailReplyGenie";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EmailReplyGenerator />
    </ThemeProvider>
  );
}

export default App;