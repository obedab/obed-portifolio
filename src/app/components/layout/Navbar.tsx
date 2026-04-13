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
  Home as HomeIcon,
  Person as PersonIcon,
  Lightbulb as LightbulbIcon,
  Work as WorkIcon,
  Send as SendIcon,
  WbSunny as WbSunnyIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  GridView as GridViewIcon,
  EmojiEvents as EmojiEventsIcon,
  Star as StarsIcon,
  LocationOn as LocationOnIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";

const navItems = [
  { name: "Home", href: "#home", icon: <HomeIcon fontSize="small" /> },
  { name: "About", href: "#about", icon: <PersonIcon fontSize="small" /> },
  { name: "Skills", href: "#skills", icon: <LightbulbIcon fontSize="small" /> },
  { name: "Experience", href: "#experience", icon: <WorkIcon fontSize="small" /> },
];

const dropdownItems = [
  { name: "Projects", icon: <GridViewIcon fontSize="small" /> },
  { name: "Certifications", icon: <EmojiEventsIcon fontSize="small" /> },
  { name: "Achievements", icon: <StarsIcon fontSize="small" /> },
  { name: "Location", icon: <LocationOnIcon fontSize="small" /> },
  { name: "Connect", icon: <PersonAddIcon fontSize="small" /> },
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
        border: "none",
        boxShadow: "none",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 6 },
          py: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: "fit-content" }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "2px solid rgba(110, 241, 255, 0.3)",
              bgcolor: "rgba(0, 242, 255, 0.08)",
              color: "#6ef1ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "20px",
              boxShadow: "0 0 15px rgba(0,242,255,0.15)",
            }}
          >
            J
          </Box>
          <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 600, whiteSpace: "nowrap" }}>
            <Box component="span" sx={{ color: "#6ef1ff", fontWeight: 800 }}>
              Jerophin D R
            </Box>
            {" | Portfolio"}
          </Typography>
        </Box>

        {/* Nav Items + Dropdown */}
        <Stack direction="row" alignItems="center" spacing={0} sx={{ flex: 1, justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              gap: 0.75,
              p: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
              bgcolor: "rgba(255,255,255,0.05)",
              maxWidth: "760px",
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                startIcon={item.icon}
                sx={{
                  px: 2.5,
                  py: 1.2,
                  color: item.href === "#home" ? "#6ef1ff" : "rgba(255,255,255,0.28)",
                  bgcolor: item.href === "#home" ? "rgba(0,242,255,0.12)" : "transparent",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontSize: "13px",
                  fontWeight: 700,
                  border: item.href === "#home" ? "1px solid rgba(0,242,255,0.3)" : "none",
                  boxShadow: item.href === "#home" ? "0 0 12px rgba(0,242,255,0.2)" : "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "rgba(139, 92, 246, 0.2)",
                    borderColor: "rgba(139, 92, 246, 0.35)",
                    color: "#a78bfa",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <IconButton
            onClick={handleToggleMenu}
            sx={{
              ml: 1,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
              bgcolor: "rgba(255,255,255,0.05)",
              color: "#fff",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "rgba(139, 92, 246, 0.2)",
              },
            }}
          >
            {isMenuOpen ? <ExpandMoreIcon sx={{ fontSize: 24 }} /> : <ExpandLessIcon sx={{ fontSize: 24 }} />}
          </IconButton>

          <Menu
            id="more-menu"
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            PaperProps={{
              sx: {
                bgcolor: "rgba(10,12,18,0.96)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
                backdropFilter: "blur(22px)",
                minWidth: "220px",
                mt: 1,
                borderRadius: "20px",
                p: "6px 0",
              },
            }}
          >
            {dropdownItems.map((item, idx) => (
              <MenuItem
                key={item.name}
                onClick={handleCloseMenu}
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "13px",
                  fontWeight: 600,
                  gap: 1.5,
                  py: 1.5,
                  px: 3,
                  borderBottom: idx !== dropdownItems.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "rgba(139, 92, 246, 0.25)",
                    color: "#a78bfa",
                  },
                }}
              >
                <Box sx={{ display: "inline-flex", color: "#a78bfa" }}>
                  {item.icon}
                </Box>
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: "fit-content" }}>
          <Button
            variant="outlined"
            startIcon={<SendIcon sx={{ fontSize: 18 }} />}
            sx={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.9)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              py: 1,
              px: 2.5,
              fontSize: "12px",
              fontWeight: 700,
              borderRadius: "999px",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.4)",
                color: "#a78bfa",
              },
            }}
          >
            Let&apos;s talk
          </Button>
          <IconButton
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
              bgcolor: "rgba(255,255,255,0.05)",
              color: "#fff",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "rgba(139, 92, 246, 0.2)",
              },
            }}
          >
            <WbSunnyIcon sx={{ fontSize: 22 }} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}