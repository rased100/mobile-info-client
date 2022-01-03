// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';


// const Header = () => {
//     const { user, logOut } = useAuth();
//     return (
//         <div>

//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                 <Container>
//                     {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">
//                             <Link to='/home' className='px-2'>Home</Link>
//                             <Link to="/dashboard">DashBoard</Link>

//                             {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                             </NavDropdown> */}
//                         </Nav>
//                         <Nav>
//                             <Link to='/moreproduct' className='mx-2'> MorePhone</Link>
//                             <h6 className='text-white'>{user?.displayName}</h6>
//                             {user?.email ? <p className='text-white' onClick={logOut} >Log Out</p> : <Link to="/login">Log In</Link>}

//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//         </div>
//     );
// };

// export default Header;



// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { Button, useTheme } from "@mui/material";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import InputBase from "@mui/material/InputBase";
// import { alpha, styled } from "@mui/material/styles";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";
// import * as React from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const theme = useTheme();
//   const useStyle = makeStyles({
//     iconButton: {
//       [theme.breakpoints.up("sm")]: {
//         display: "none !important",
//       },
//     },

//     navItemContainer: {
//       [theme.breakpoints.down("sm")]: {
//         display: "none !important",
//       },
//     },

//     navItem: {
//       color: "white",
//       textDecoration: "none",
//     },

//     navLogo: {
//       [theme.breakpoints.up("sm")]: {
//         textAlign: "left",
//       },
//     },

//     searchbar: {
//       width: "500px",
//       margin: "0 auto",
//     },
//   });
//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     width: "100%",
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: "theme.spacing(3)",
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));

//   const { iconButton, navItemContainer, navItem, navLogo, searchbar } =
//     useStyle();

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//             className={iconButton}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//             className={navLogo}
//           >
//             Mobile Corner
//           </Typography>
//           <Search className={searchbar}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Box className={navItemContainer}>
//             <NavLink className={navItem} to="/home">
//               <Button sx={{ textTransform: "capitalize" }} color="inherit">
//                 Home
//               </Button>
//             </NavLink>
//             <NavLink className={navItem} to="/service">
//               <Button sx={{ textTransform: "capitalize" }} color="inherit">
//                 Service
//               </Button>
//             </NavLink>
//             <NavLink className={navItem} to="/contuctus">
//               <Button sx={{ textTransform: "capitalize" }} color="inherit">
//                 Contuct us
//               </Button>
//             </NavLink>
//             <NavLink className={navItem} to="/login">
//               <Button sx={{ textTransform: "capitalize" }} color="inherit">
//                 Login
//               </Button>
//             </NavLink>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Header;
