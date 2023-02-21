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
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactPlayer from "react-player";
import VisibilityIcon from "@material-ui/icons/Visibility";

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
    justifyContent: "space-between"
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
    position: "relative",
    border: "1px solid rgba(0, 0, 0, .20)",
    margin: "6px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  divider: {
    marginLeft: "0px"
  },
  heading: {
    fontSize: "1rem",
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  customAccordionSummary: {
    display: "block",
    textAlign: "left"
  },
  listHeading: {
    cursor: "pointer",
    float: "right",
    color: "#3f51b5",
    fontWeight: 600
  },
  videoHeader: {
    float: "left",
    color: "gray",
    fontSize: "medium",
    fontWeight: 600
  },
  AccordionDetails: {
    display: "block"
  },
  viewTags: {
    float: "right",
    marginBottom: "7px"
  }
}));

export default function RightSideBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(props.openVideoList);
  const [showVideo, setShowVideo] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    props.CloseVideoList();
  };

  const handleVideo = () => {
    console.log("hello");
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
          <div className={classes.videoHeader}>Video Recordings</div>
          <div className={classes.listHeading} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <span>Back to List</span>
            ) : (
              <span>Back to List</span>
            )}
          </div>
        </div>
        <Divider />
        <div></div>
        <Divider />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Divider />
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                expanded !== "panel1" ? (
                  <PlayCircleOutlineIcon style={{ color: "#c8102e" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              classes={{ content: classes.customAccordionSummary }}
            >
              <Typography className={classes.heading}>
                Golden 1 Center - Locker Room Passage
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Sacramento, California
              </Typography>
              <Typography className={classes.secondaryHeading}>
                December 18, 2020
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetails}>
              <ReactPlayer
                width="inherit"
                height="inherit"
                controls="true"
                url="http://nba.cdn.turner.com/nba/big/video/2018/01/20/fbc893cc-1ef5-4ba1-a52a-35bde790f725.nba_1872993_768x432_1500.mp4?NBA-Geo-Auth=CONTENT-NETWORK"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.viewTags}
              >
                <VisibilityIcon className={classes.extendedIcon} />
                View Tags
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={
                expanded !== "panel2" ? (
                  <PlayCircleOutlineIcon style={{ color: "#c8102e" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              classes={{ content: classes.customAccordionSummary }}
            >
              <Typography className={classes.heading}>
                Little Caesars Arena - Corridor 1
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Detroit, Michigan
              </Typography>
              <Typography className={classes.secondaryHeading}>
                December 18, 2020
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetails}>
              <ReactPlayer
                width="inherit"
                height="inherit"
                controls="true"
                url="https://ssl.cdn.turner.com/nba/big/video/2019/01/13/034e14e9-5e40-47e4-af24-a08660d56267.nba_2414859_768x432_1500.mp4"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.viewTags}
              >
                <VisibilityIcon className={classes.extendedIcon} />
                View Tags
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={
                expanded !== "panel3" ? (
                  <PlayCircleOutlineIcon style={{ color: "#c8102e" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              classes={{ content: classes.customAccordionSummary }}
            >
              <Typography className={classes.heading}>
                Little Caesars Arena - Corridor 2
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Detroit, Michigan
              </Typography>
              <Typography className={classes.secondaryHeading}>
                December 18, 2020
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetails}>
              <ReactPlayer
                width="inherit"
                height="inherit"
                controls="true"
                url="https://ssl.cdn.turner.com/nba/big/video/2018/12/12/4cabf84c-510a-4e91-b356-41846ff0b4aa.nba_2377246_768x432_1500.mp4"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.viewTags}
              >
                <VisibilityIcon className={classes.extendedIcon} />
                View Tags
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={
                expanded !== "panel4" ? (
                  <PlayCircleOutlineIcon style={{ color: "#c8102e" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              classes={{ content: classes.customAccordionSummary }}
            >
              <Typography className={classes.heading}>
                Little Caesars Arena - Corridor 3
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Detroit, Michigan
              </Typography>
              <Typography className={classes.secondaryHeading}>
                December 18, 2020
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetails}>
              <ReactPlayer
                width="inherit"
                height="inherit"
                controls="true"
                url="http://nba.cdn.turner.com/nba/big/video/2018/01/11/3430bc76-0693-428e-8c31-3cd984b82d5e.nba_1853078_768x432_1500.mp4?NBA-Geo-Auth=CONTENT-NETWORK"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.viewTags}
              >
                <VisibilityIcon className={classes.extendedIcon} />
                View Tags
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={
                expanded !== "panel4" ? (
                  <PlayCircleOutlineIcon style={{ color: "#c8102e" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              classes={{ content: classes.customAccordionSummary }}
            >
              <Typography className={classes.heading}>
                Little Caesars Arena - Corridor 4
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Detroit, Michigan
              </Typography>
              <Typography className={classes.secondaryHeading}>
                December 19, 2020
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetails}>
              <ReactPlayer
                width="inherit"
                height="inherit"
                controls="true"
                url="http://nba.cdn.turner.com/nba/big/video/2018/01/11/3430bc76-0693-428e-8c31-3cd984b82d5e.nba_1853078_768x432_1500.mp4?NBA-Geo-Auth=CONTENT-NETWORK"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.viewTags}
              >
                <VisibilityIcon className={classes.extendedIcon} />
                View Tags
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      </Drawer>
    </div>
  );
}
