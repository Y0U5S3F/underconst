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
} from "@mui/material";
import Grid from '@mui/material/Grid';
import BackgroundImg from "./assets/background.webp";
import { Heart, Leaf, Sprout } from "lucide-react";
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
      {/* HERO SECTION WITH BACKGROUND */}
      {!bgLoaded ? (
        // Show loading spinner centered on screen
        <Box
          sx={{
            width: '100vw',
            height: '85dvh',
            minHeight: 650,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#fff', // optional background while loading
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Box
          sx={{
            width: '100vw',
            height: '85dvh',
            minHeight: 650,
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'local',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              position: "fixed",
              top: -4,
              left: -4,
              zIndex: 10,
              backgroundColor: "#fff",
              px: 2,
              py: 2,
              borderRadius: 1,
              border: "2px solid var(--color-creamy-lighter)",
              boxShadow: "0 0px 0px rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                color: "var(--color-primary)",
              }}
            >
              Glossed<span style={{ color: "#D9A5B3" }}>Up</span>
            </Typography>
          </Box>

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
            <Typography
              variant="h2"
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: {
                  xs: "2.5rem",   // ~h4 on mobile
                  sm: "2.5rem", // slightly larger on small tablets
                  md: "3.5rem", // default h2 on desktop
                },
              }}
            >
              UNDER CONSTRUCTION !
            </Typography>

            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.65)",
                padding: 4,
                borderRadius: 0,
                textAlign: "center",
                width: isMobile ? "90%" : 500,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Container maxWidth="md">
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="var(--color-primary)"
                  gutterBottom
                >
                  Join our mailing list
                </Typography>
                <Typography
                  variant="body2"
                  color="var(--color-accent)"
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
                  slotProps={{
                    input: {
                      autoComplete: "off", // ✅ proper way now
                    },
                  }} required
                  placeholder="Enter your email"
                  variant="outlined"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  sx={{
                    backgroundColor: "#ffffff",
                    input: { color: "#33271a" },
                    transition: "transform 0.1s ease",

                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0.5,
                      "& fieldset": {
                        borderColor: "#d098a2", // Always pink
                      },
                      "&:hover fieldset": {
                        borderColor: "#d098a2", // Pink on hover
                      },
                      "&.Mui-focused": {
                        transform: "scale(1.005)", // Zoom animation
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#d098a2", // Still pink when focused
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
      )}

      {/* FOOTER SECTION WITHOUT BACKGROUND IMAGE */}
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

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={4000}
        message={snackbarMsg}
      />
    </Box>
  );
}
