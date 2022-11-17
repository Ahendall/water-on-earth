// MUI Imports
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import WaterIcon from '@mui/icons-material/Water';
import CloudIcon from '@mui/icons-material/Cloud';
import DiamondIcon from '@mui/icons-material/Diamond';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PublicIcon from '@mui/icons-material/Public';

// React Imports
import { useState } from "react";
import { Link } from "react-router-dom";

// Local Imports
import "./App.css";

const data = [
    {
        name: "Home",
        icon: <HomeOutlined />,
        link: "/",
    },
    { name: "Unique Properties of Water", icon: <WaterIcon />, link: "/WaterProps" },
    { name: "The Water Cycle", icon: <CloudIcon />, link: "/WaterCycle" },
    { name: "The Carbon Cycle", icon: <DiamondIcon />, link: "/CarbonCycle" },
    { name: "Human Impact on Earth's spheres", icon: <Diversity3Icon />, link: "/HumanImpact" },
    { name: "The significance of global climate change", icon: <PublicIcon />, link: "/ClimateChange" },
];

function CustomDrawer() {
    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 400 }} onClick={() => setOpen(false)}>
            {data.map((item, index) => (
                <Link to={item.link} key={index}>
                    <ListItem>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                </Link>
            ))}
        </div>
    );
    return (
        <div className="App">
            <Button onClick={() => setOpen(true)}><MenuIcon /></Button>
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                {getList()}
            </Drawer>
        </div>
    );
}

export default CustomDrawer;