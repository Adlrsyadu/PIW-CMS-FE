import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    Breadcrumbs,
    Link,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    Dashboard as DashboardIcon,
    Article as ArticleIcon,
    Map as MapIcon,
    Logout as LogoutIcon,
    Person as PersonIcon,
} from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";
import { FoodBank } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";

const drawerWidth = 240;

const MainLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setOpen] = useState(!isMobile);
    const [anchorEl, setAnchorEl] = useState(null);

    // Handle user menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        handleMenuClose();
        try {
            await fetch("http://localhost:5555/user/signout", {
                method: "GET",
                credentials: "include",
            });
        } catch (error) {
            console.error("Error during signout:", error);
        }
        logout();
        navigate("/signin");
    };

    // Generate breadcrumbs
    const generateBreadcrumbs = () => {
        const pathnames = location.pathname.split("/").filter((x) => x);

        // Map of path to display name
        const nameMap = {
            dashboard: "Dashboard",
            blogs: "Blogs",
            tours: "Tours",
            add: "Add New",
        };

        return (
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isId = value.length > 8 && !nameMap[value]; // Likely an ID

                    return last ? (
                        <Typography color="text.primary" key={to}>
                            {isId ? "Details" : nameMap[value] || value}
                        </Typography>
                    ) : (
                        <Link
                            underline="hover"
                            color="inherit"
                            key={to}
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate(to)}
                        >
                            {nameMap[value] || value}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        );
    };

    const drawer = (
        <>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: [1],
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <DashboardIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="primary.main">
                        CMS Admin
                    </Typography>
                </Box>
                <IconButton onClick={() => setOpen(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListItemButton onClick={() => navigate("/dashboard")}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <ListItemButton onClick={() => navigate("/blogs")}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blogs" />
                </ListItemButton>

                <ListItemButton onClick={() => navigate("/tours")}>
                    <ListItemIcon>
                        <MapIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tours" />
                </ListItemButton>

                <ListItemButton onClick={() => navigate("/food")}>
                    <ListItemIcon>
                        <FoodBank />
                    </ListItemIcon>
                    <ListItemText primary="Kuliner" />
                </ListItemButton>

                <ListItemButton onClick={() => navigate("/location")}>
                    <ListItemIcon>
                        <LocationOn />
                    </ListItemIcon>
                    <ListItemText primary="Location" />
                </ListItemButton>
            </List>
        </>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    transition: (theme) =>
                        theme.transitions.create(["width", "margin"], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                    ...(open && {
                        marginLeft: drawerWidth,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        transition: (theme) =>
                            theme.transitions.create(["width", "margin"], {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.enteringScreen,
                            }),
                    }),
                }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(!open)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CMS Dashboard
                    </Typography>

                    {/* User Menu */}
                    <IconButton
                        onClick={handleMenuOpen}
                        size="small"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.main" }}>
                            {user?.name?.charAt(0) || "A"}
                        </Avatar>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem disabled>
                            <Typography variant="body2">{user?.email}</Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                navigate("/profile");
                            }}
                        >
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Drawer
                variant={isMobile ? "temporary" : "persistent"}
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                {drawer}
            </Drawer>

            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                    p: 3,
                    pt: 10,
                }}
            >
                {location.pathname !== "/dashboard" && generateBreadcrumbs()}
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;
