"use client";
import { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Home,
  User,
  Lightbulb,
  Briefcase,
  MessageSquare,
  Sun,
  ChevronUp,
  ChevronDown,
  Grid,
  Award,
  Trophy,
  MapPin,
  UserPlus,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: <Home size={16} /> },
  { name: "About", href: "#about", icon: <User size={16} /> },
  { name: "Skills", href: "#skills", icon: <Lightbulb size={16} /> },
  { name: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
];

const dropdownItems = [
  { name: "Projects", icon: <Grid size={16} /> },
  { name: "Certifications", icon: <Award size={16} /> },
  { name: "Achievements", icon: <Trophy size={16} /> },
  { name: "Location", icon: <MapPin size={16} /> },
  { name: "Connect", icon: <UserPlus size={16} /> },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleToggleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(5, 10, 18, 0.92)",
        backdropFilter: "blur(30px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 0 60px rgba(0,242,255,0.08)",
        top: 24,
        mx: "auto",
        left: 0,
        right: 0,
        width: "calc(100% - 32px)",
        maxWidth: "1400px",
        borderRadius: "36px",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 4 },
          py: 1.5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              bgcolor: "rgba(255,255,255,0.06)",
              color: "#6ef1ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              boxShadow: "0 0 20px rgba(0,242,255,0.1)",
            }}
          >
            O
          </Box>
          <Typography variant="button" sx={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.18em" }}>
            <Box component="span" sx={{ fontWeight: 900, color: "#c8ffff", mr: 1}}>
              Obed ABIRAGIYE
            </Box>
            | Portfolio
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ flexWrap: "wrap", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              p: "4px 8px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.08)",
              bgcolor: "rgba(255,255,255,0.03)",
            }}
          >
            {navItems.map((item, idx) => (
              <Button
                key={item.name}
                href={item.href}
                startIcon={item.icon}
                sx={{
                  minWidth: 0,
                  px: 2,
                  py: 1,
                  color: idx === 0 ? "#8ef0ff" : "rgba(255,255,255,0.72)",
                  bgcolor: idx === 0 ? "rgba(0,242,255,0.1)" : "transparent",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "11px",
                  fontWeight: 900,
                  border: idx === 0 ? "1px solid rgba(0,242,255,0.2)" : "none",
                  boxShadow: idx === 0 ? "0 0 20px rgba(0,242,255,0.12)" : "none",
                  "&:hover": {
                    bgcolor: idx === 0 ? "rgba(0,242,255,0.14)" : "rgba(255,255,255,0.08)",
                    color: "#fff",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <IconButton
            aria-controls={isMenuOpen ? "more-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isMenuOpen ? "true" : undefined}
            onClick={handleToggleMenu}
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              bgcolor: "rgba(255,255,255,0.05)",
              color: "#fff",
            }}
          >
            {isMenuOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </IconButton>

          <Menu
            id="more-menu"
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                bgcolor: "rgba(10,12,18,0.95)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                backdropFilter: "blur(20px)",
              },
            }}
          >
            {dropdownItems.map((item) => (
              <MenuItem
                key={item.name}
                onClick={handleCloseMenu}
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  gap: 1,
                  py: 1,
                  px: 2,
                  "&:hover": {
                    bgcolor: "rgba(0,242,255,0.08)",
                  },
                }}
              >
                <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
                </Box>
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<MessageSquare size={16} />}
            sx={{
              borderColor: "rgba(255,255,255,0.14)",
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              py: 1,
              px: 3,
              fontSize: "11px",
              fontWeight: 900,
              borderRadius: "999px",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.18)",
              },
            }}
          >
            Let&apos;s talk
          </Button>
          <IconButton
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              bgcolor: "rgba(255,255,255,0.05)",
              color: "#fff",
            }}
          >
            <Sun size={18} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
