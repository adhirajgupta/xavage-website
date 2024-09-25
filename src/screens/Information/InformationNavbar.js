import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Outlet,useNavigate } from 'react-router-dom';
import xavage_logo from './xavage-24-logo.png';

const pages = ['Cause', 'Events', 'Sponsors'];

function InformationNavbar() {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget); // Make sure this sets a valid DOM element
    };

    const handleCloseNavMenu = (page) => {
        console.log(page.nativeEvent.target.innerText)
        navigate(page.nativeEvent.target.innerText.toLowerCase())
        setAnchorElNav(null); // Closes the menu correctly
    };


    return (
        <>
            <AppBar position="static" elevation={0} style={{ backgroundColor: '#121212' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        {/* LOGO */}
                        <img src={xavage_logo} alt="xavage-logo-2024" height={'50px'} width={'auto'}/>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '.MuiPaper-root': { backgroundColor: '#121212' } // Target only the dropdown background
                                }}
                            >

                                {pages.map((page, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center', letterSpacing: '.15rem' }}>{page}</Typography>
                                    </MenuItem>
                                ))}

                            </Menu>
                        </Box>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        {/* LOGO */}
                        <img src={xavage_logo} alt="xavage-logo-2024" height={'50px'} width={'auto'}/>
                        </Typography>

                        {/* Aligning menu to the right */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block',mr:2 }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* Rounded login button */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    borderRadius: '50px', // Make the button rounded
                                    padding: '6px 24px', // Increase padding for a rounded effect
                                    '&:hover': {
                                    },
                                }}
                            >
                                Register Now 
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
}

export default InformationNavbar;
