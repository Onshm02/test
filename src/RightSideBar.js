import React from "react";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Videos from "./Videos.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "42ch",
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  search: {
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, .20)',
    margin: '6px',
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
  divider: {
    marginLeft: '0px'
  }
}));

export default function RightSideBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(props.openVideoList);
  const [showVideo, setShowVideo] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    props.CloseVideoList();
  };

  const handleVideo = () => {
    console.log('hello')
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
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
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div>
          <div style={{display: "inline" }}>
            <span
              style={{ float: "left", marginTop: "12px", marginLeft: "10px" }}
            >
              Video Recordings
            </span>
            <Button
              variant="contained"
              style={{ float: "right", height: "40px", marginTop: "3px" }}
              color="primary"
              //onClick={onAdd}
            >
              <AddIcon className={classes.extendedIcon} />
              Add New
            </Button>
          </div>
        </div>
        <Divider />
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        <Divider />
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Golden 1 Center - Locker Room Passage"
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    Sacramento, California
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    December 18, 2020
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction
            onClick={handleVideo}
              style={{ minWidth: "30px", cursor: "pointer", color: "#c8102e" }}
            >
              <PlayCircleOutlineIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.divider} variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Little Caesars Arena - Corridor 1"
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    Detroit, Michigan
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    December 18, 2020
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction
              style={{ minWidth: "30px", cursor: "pointer", color: "#c8102e" }}
              onClick={handleVideo}
              >
              <PlayCircleOutlineIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.divider} variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Little Caesars Arena - Corridor 2"
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    Sacramento, California
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    December 18, 2020
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction
              onClick={handleVideo}
              style={{ minWidth: "30px", cursor: "pointer", color: "#c8102e" }}
            >
              <PlayCircleOutlineIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.divider} variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Little Caesars Arena - Corridor 3"
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    Sacramento, California
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    December 18, 2020
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction
              onClick={handleVideo}
              style={{ minWidth: "30px", cursor: "pointer", color: "#c8102e" }}
            >
              <PlayCircleOutlineIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.divider} variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Madison Square Garden - Main Corridor"
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    Portland, Oregon
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: "left" }}
                  >
                    December 19, 2020
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction
            onClick={handleVideo}
              style={{ minWidth: "30px", cursor: "pointer", color: "#c8102e" }}
            >
              <PlayCircleOutlineIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.divider} variant="inset" component="li" />
        </List>
      </Drawer>
      {
        showVideo ? <Videos showVideo={showVideo} closeVideo={handleVideoClose}/> : null
      }
    </div>
  );
}
