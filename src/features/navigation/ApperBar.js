import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container,
  Button, Tooltip, InputBase, CssBaseline, useScrollTrigger, Fab, Fade
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CottageIcon from '@mui/icons-material/Cottage';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setSearchTerm } from "./searchSlice";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const pages = ['לכל הספרים', 'הוספת ספר'];
const settings = ['פרופיל', 'התחברות', 'יציאה'];

const ApperBar = (props) => {
  const navigate = useNavigate(); // Hook to navigate

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [search, setSearch] = useState('');
  const isInitialRender = React.useRef(true);

  const dispatch = useDispatch();

  const handleChangingSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearch(newSearchTerm); // Update the local search state
    dispatch(setSearchTerm(newSearchTerm)); // Dispatch the search term to Redux store
  };
  
  useEffect(() => {
    dispatch(setSearchTerm(search)); // Dispatch the search term to Redux store
  }, [dispatch, search]);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAllBooksClick = () => {
    navigate('/allBooks'); // Navigate to the "AllBooks" page
  };
  const handleConnectClick = () => {
    navigate('/register'); // Navigate to the "AllBooks" page
  };
  // const handleHomeClick = () => {
  //   navigate('/'); // Navigate to the "AllBooks" page
  // };
  const ShoppingCartClick = () => {
    navigate('/shopingCart'); // Navigate to the "AllBooks" page
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 0,
      top: 12,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#164a59', direction: 'rtl' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box id="back-to-top-anchor" sx={{ my: 2 }}></Box>
            <CottageIcon sx={{ fontSize: "40px", color: 'white' }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon sx={{ fontSize: "40px", marginRight: "20px", color: 'white' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={handleConnectClick}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleAllBooksClick} // Handle click on "כל הספרים"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Search sx={{ direction: 'ltr' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="חיפוש לפי שם ספר/סופר"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearch(e.target.value)} />
            </Search>

            <IconButton aria-label="cart" onClick={ShoppingCartClick}>
              <StyledBadge badgeContent={4} color="secondary" sx={{ marginRight: "20px" }} >
                <ShoppingCartIcon sx={{ fontSize: "40px", color: "white" }} />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box my={2}></Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default ApperBar;
