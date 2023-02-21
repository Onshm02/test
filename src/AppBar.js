import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <img alt='' style={{height: '40px', paddingRight: '10px'}}
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAACECAYAAADBezgtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDJGQzFGM0UwQzMwMTFFQTg4QjdBMTBFOTJEODY3NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDJGQzFGM0YwQzMwMTFFQTg4QjdBMTBFOTJEODY3NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMkZDMUYzQzBDMzAxMUVBODhCN0ExMEU5MkQ4Njc0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMkZDMUYzRDBDMzAxMUVBODhCN0ExMEU5MkQ4Njc0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm+5nr0AABsQSURBVHja1F0JfFTV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'/>
          <Typography className={classes.title} variant="h6" noWrap>
          Contact Tracing Application 
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}
