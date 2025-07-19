import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X"; // Twitter icon in MUI v5+
import Logo from "./assets/bagsofbeauty.jpg"; // Replace with your logo path

const Navbar = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 80,
                px: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid var(--color-primary)"
            }}
        >
            {/* Left: Logo */}
            <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{
                    width: 70,
                    height: "auto",
                }}
            />
            {/* Right: Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                    aria-label="Instagram"
                    component="a"
                    href="https://www.instagram.com/bagsofbeauty.ae/"
                    target="_blank"
                    rel="noopener"
                    sx={{
                        color: "#d9a890",
                        transition: "color 0.3s ease",
                        "&:hover": {
                            color: "#d098a2", // pinkish color on hover
                        },
                    }}
                >
                    <InstagramIcon />
                </IconButton>

                <IconButton
                    aria-label="Twitter/X"
                    component="a"
                    href="https://www.bagsofbeauty.ae/"
                    target="_blank"
                    rel="noopener"
                    sx={{
                        color: "#d9a890",
                        transition: "color 0.3s ease",
                        "&:hover": {
                            color: "#d098a2", // same pinkish hover color
                        },
                    }}
                >
                    <XIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Navbar;
