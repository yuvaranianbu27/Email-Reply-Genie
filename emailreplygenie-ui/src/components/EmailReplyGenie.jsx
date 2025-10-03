import { useState } from "react";
import { styled } from "@mui/material/styles";
import genie from "../images/genie.png";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

const CustomButton = styled(Button)({
  backgroundColor: "#bb23acff",
  color: "#fff",
  padding: "8px 24px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#d54cc7ff",
  },
});

export default function EmailReplyGenie() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          py: 4,
        }}
      >
        <img src={genie} alt="Robot" style={{ width: 80, height: 80 }} />

        <Typography variant="h3" component="h1" color="primary">
          EMAIL REPLY GENIE
        </Typography>
      </Box>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Your Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          onFocus={() => setGeneratedReply("")}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
            onFocus={() => setGeneratedReply("")}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <CustomButton
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          fullWidth
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Generate Reply"
          )}
        </CustomButton>

        {error && (
          <Typography textAlign="center" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {/* Generated Reply Section */}
        {generatedReply && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Generated Reply
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              inputProps={{ readOnly: true }}
            />
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}