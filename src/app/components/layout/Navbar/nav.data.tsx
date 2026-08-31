import {
  Home as HomeIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Work as WorkIcon,
  GridView as GridViewIcon,
  EmojiEvents as EmojiEventsIcon,
  Star as StarIcon,
  LocationOn as LocationOnIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";

import { NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#home",
    icon: <HomeIcon />,
  },
  {
    name: "About",
    href: "#about",
    icon: <InfoIcon />,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: <LightbulbIcon />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <WorkIcon />,
  },
];

export const dropdownItems: NavItem[] = [
  {
    name: "Projects",
    href: "#projects",
    icon: <GridViewIcon />,
  },
  {
    name: "Certifications",
    href: "#certifications",
    icon: <EmojiEventsIcon />,
  },
  {
    name: "Achievements",
    href: "#achievements",
    icon: <StarIcon />,
  },
  {
    name: "Location",
    href: "#location",
    icon: <LocationOnIcon />,
  },
  {
    name: "Connect",
    href: "#connect",
    icon: <PersonAddIcon />,
  },
];