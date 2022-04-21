// // import React, { useEffect, useState } from 'react'
// // import './index.css'
// // import { Link } from 'react-router-dom'
// // import logo from '../../img/food-logo-59E5A73AFD-seeklogo.com.png'


// // const Nav = () => {



// //     const [NavDropdown, setNavDropdown] = useState(false)
// //     const handelNav = () => {
// //         setNavDropdown((old) => !old)
// //     }
// //     return (
// //         <header className='bg-dark'>
// //             <nav className="navbar navbar-light bg-dark">
// //                 <Link className="navbar-brand" to="/">
// //                     <img src={logo} width="100" alt="food" />
// //                 </Link>
// //             </nav>
// //             <nav>
// //                 <ul className='ul-nav'>
// //                     <li><Link to='about'>about</Link></li>
// //                     <li><Link to='topice'>topice</Link></li>
// //                 </ul>
// //             </nav>



// //         </header>
// //     )
// // }

// // export default Nav


// import React from 'react';
// import {Link} from 'react-router-dom'
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import content from '../content/content'

// const useStyles = makeStyles((theme) => ({
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(3),
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
//     sectionDesktop: {
//         display: 'none',
//         [theme.breakpoints.up('md')]: {
//             display: 'flex',
//         },
//     },
//     sectionMobile: {
//         display: 'flex',
//         [theme.breakpoints.up('md')]: {
//             display: 'none',
//         },
//     },
//     link: {
//         textDecoration: 'none',
//         color: 'inherit'
//     }
// }));

// const Nav = () => {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const menuId = 'primary-search-account-menu';
//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}><Link className={classes.link} to='/about'>Cart</Link></MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//         </Menu>
//     );

//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <MenuItem>
//                 <IconButton aria-label="show 4 new mails" color="inherit">
//                     <Badge badgeContent={4} color="secondary">
//                         <MailIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Messages</p>
//             </MenuItem>
//             <MenuItem>
//                 <IconButton aria-label="show 11 new notifications" color="inherit">
//                     <Badge badgeContent={11} color="secondary">
//                         <NotificationsIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <AccountCircle />
//                 </IconButton>
//                 <p>Profile</p>
//             </MenuItem>
//         </Menu>
//     );

//     return (
//         <div className={classes.grow}>
//             <AppBar position="fixed">
//                 <Toolbar>
//                     <IconButton
//                         edge="start"
//                         className={classes.menuButton}
//                         color="inherit"
//                         aria-label="open drawer"
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography className={classes.title} variant="h6" noWrap>
//                         <Link to='/' className={classes.link}>Foodes</Link>
//                     </Typography>
//                     <div className={classes.search}>
//                         <div className={classes.searchIcon}>
//                             <SearchIcon />
//                         </div>
//                         <InputBase
//                             placeholder="Search…"
//                             classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                             }}
//                             inputProps={{ 'aria-label': 'search' }}
//                         />
//                     </div>
//                     <div className={classes.grow} />
//                     <div className={classes.sectionDesktop}>
//                         <IconButton aria-label="show 4 new mails" color="inherit">
//                             <Badge badgeContent={4} color="secondary">
//                                 <MailIcon />
//                             </Badge>
//                         </IconButton>
//                         <IconButton aria-label="show 17 new notifications" color="inherit">
//                             <Badge badgeContent={17} color="secondary">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                         <IconButton
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             onClick={handleProfileMenuOpen}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                     </div>
//                     <div className={classes.sectionMobile}>
//                         <IconButton
//                             aria-label="show more"
//                             aria-controls={mobileMenuId}
//                             aria-haspopup="true"
//                             onClick={handleMobileMenuOpen}
//                             color="inherit"
//                         >
//                             <MoreIcon />
//                         </IconButton>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             {renderMobileMenu}
//             {renderMenu}
//         </div>
//     );
// }
// export default Nav





// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { Drawer, AppBar, Toolbar, CssBaseline, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//             transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginRight: drawerWidth,
//     },
//     title: {
//         flexGrow: 1,
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-start',
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginRight: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginRight: 0,
//     },
// }));



import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, CssBaseline, Tab, Tabs, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function Nav() {
    const history = useNavigate()
    const handelCartRoute = () => {
        history('/about')
    }
    const handelTopicRoute = () => {
        history('/topice')
    }
    const handelLoginRoute = () => {
        history('/login')
    }
    const handelHomeRoute = () => {
        history('/')
    }
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [width, setWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    console.log(width);


const [tabVaule, setTabVaule] = React.useState(1)




    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Foods
                    </Typography>

                    {width < 555 ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                className={clsx(open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </>
                    ) : (
                        <Tabs textColor='inherit' value={tabVaule} onChange={(e, value) =>  setTabVaule(value)} indicatorColor='secondary'>
                            <Tab label='Home'  onClick={handelHomeRoute } />
                            <Tab label='Topic' onClick={handelTopicRoute } />
                            <Tab label='Login' onClick={handelLoginRoute} />
                            <Tab label='Cart' onClick={handelCartRoute} />
                        </Tabs>
                    )}

                </Toolbar>
            </AppBar>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >

                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={handelCartRoute}>
                        <ListItemIcon><AddShoppingCartIcon /></ListItemIcon>
                        <ListItemText primary='Cart' />
                    </ListItem>

                    <ListItem button onClick={handelHomeRoute}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>

                    <ListItem button onClick={handelTopicRoute}>
                        <ListItemIcon><StorefrontIcon /></ListItemIcon>
                        <ListItemText primary='topic' />
                    </ListItem>

                    <ListItem button onClick={handelLoginRoute}>
                        <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                        <ListItemText primary='Login' />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}