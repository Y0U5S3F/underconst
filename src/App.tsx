import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Typography,
  Container,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import BackgroundImg from "./assets/GlossesBackground.png";
import { Heart, Leaf, Sprout, Mail } from "lucide-react";
import Navbar from "./Navbar"; // adjust the path if needed
import "./App.css";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default function UnderConstruction() {
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const isMobile = useIsMobile();
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = BackgroundImg;
    img.onload = () => setBgLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_w0zrk7h",
        "template_yq6ckk5",
        { email: email },
        "XmAS5v5Nrvbldwayl"
      );
      console.log("Email sent:", result);
      setSnackbarMsg("Thanks! You'll be notified.");
      setSnackbarOpen(true);
      setEmail("");
    } catch (error) {
      console.error("EmailJS send error:", error);
      setSnackbarMsg("Something went wrong. Try again.");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* HERO SECTION */}
      {!bgLoaded ? (
        <Box
          sx={{
            width: '100vw',
            height: '85dvh',
            minHeight: 650,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#fff',
          }}
        >
          <CircularProgress
            sx={{
              color: "var(--color-accent)",
            }}
          />
        </Box>
      ) : (
        <Box>
          <Navbar />
          <Box
            sx={{
              width: '100vw',
              height: '85dvh',
              minHeight: 650,
              backgroundColor: "rgba(232, 197, 184, 0.2)", // behind the image
              backgroundImage: `url(${BackgroundImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'local',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Centered Hero Content */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(245,245,245,0.95)",
                  padding: 4,
                  borderRadius: 2,
                  textAlign: "center",
                  width: isMobile ? "90%" : 650,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Playfair Display', serif", // full name for clarity
                    fontSize: {
                      xs: "2.75rem", // smaller screens: elegant, not overwhelming
                      sm: "3.25rem",
                      md: "4rem",    // large screens: presence without being bulky
                    },
                    fontWeight: 600, // slightly softer than "bold" (700)
                    color: "var(--color-accent)", // elegant neutral
                    letterSpacing: "-0.02em", // more refinement
                    lineHeight: 1.15, // better vertical rhythm
                    textAlign: "center",
                    textTransform: "none", // avoid uppercase for a premium look
                    textShadow: "0.25px 0.25px 0.5px rgba(0,0,0,0.05)", // subtle depth
                  }}
                >
                  Join our mailing list
                </Typography>

                <Container maxWidth="md">
                  <Typography
                    variant="body2"
                    color="var(--color-secondary-text-beige)"
                    sx={{ fontSize: "16px" }}
                  >
                    Be the first to know about new products, exclusive offers, and
                    beauty tips.
                  </Typography>
                </Container>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    type="email"
                    required
                    placeholder="Enter your email"
                    variant="outlined"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail size={18} color="#33271a" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      backgroundColor: "#ffffff",
                      input: { color: "#33271a" },
                      transition: "transform 0.1s ease",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0.5,
                        "& fieldset": {
                          borderColor: "#d098a2",
                        },
                        "&:hover fieldset": {
                          borderColor: "#d098a2",
                        },
                        "&.Mui-focused": {
                          transform: "scale(1.0075)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#d098a2",
                        },
                      },
                      "& label": {
                        color: "#33271a",
                      },
                      "& label.Mui-focused": {
                        color: "#d098a2",
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: "#d098a2",
                      color: "#ffffff",
                      fontSize: "16px",
                      borderRadius: 0.5,
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": {
                        transform: "scale(1.0075)",
                        boxShadow: "none",
                        backgroundColor: "#c07f8f",
                      },
                    }}
                  >
                    Notify Me
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {/* FOOTER */}
      {bgLoaded && (
        <Box component="footer" sx={{ bgcolor: "#ffffff", color: "#33271a" }}>
          <Box sx={{ py: 4, borderTop: "1px solid var(--color-primary)" }}>
            <Container>
              <Grid container spacing={4} justifyContent="center" textAlign="center">
                <Grid size={{ xs: 4, sm: 4 }}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                      className="icon-circle"
                      sx={{
                        svg: { width: { xs: 20, md: 32 }, height: { xs: 20, md: 32 } },
                      }}
                    >
                      <Heart color="#33271a" />
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                      Cruelty Free
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}>
                      Never tested on animals
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 4, sm: 4 }}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                      className="icon-circle"
                      sx={{
                        svg: { width: { xs: 18, md: 28 }, height: { xs: 18, md: 28 } },
                      }}
                    >
                      <Sprout color="#33271a" />
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                      Gluten Free
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}>
                      Safe for sensitive skin
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 4, sm: 4 }}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                      className="icon-circle"
                      sx={{
                        svg: { width: { xs: 18, md: 28 }, height: { xs: 18, md: 28 } },
                      }}
                    >
                      <Leaf color="#33271a" />
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                      Vegan
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}>
                      Plant-based ingredients only
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box sx={{ pb: 4 }}>
            <Container>
              <Typography
                variant="body2"
                textAlign="center"
                color="#555"
                sx={{
                  opacity: 0.8,
                  fontSize: {
                    xs: "0.65rem",
                    sm: "0.75rem",
                    md: "0.85rem",
                  },
                  lineHeight: 1.4,
                }}
              >
                Bags of Beauty has been established in Dubai with top-of-the-line
                products since 2020.<br />
                Our products come with a long-lasting quality guarantee.<br />
                Contact us to learn more about this brand, and to make sure you don't
                miss out on our special discounts. <br />
                TM ©2023 BAGS OF BEAUTY TRADING (S.E.), All Rights Reserved.
              </Typography>
            </Container>
          </Box>
        </Box>
      )}

      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={4000}
        message={snackbarMsg}
      />
    </Box>
  );
}
