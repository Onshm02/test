import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
//import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import "./Home.css";

import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1px",
    width: "35%",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  Avatar: {
    width: "65px",
    height: "65px",
    margin: "5px",
    fontSize: "15px",
    color: "white",
    backgroundColor: "#1d428a"
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
  AvatarHead: {
    width: 'min-content'
  }
}));

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },

  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const onDragStart = (event, nodeType, name, image) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("name", name);
    event.dataTransfer.setData("image", image);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className={classes.root}>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Players</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              fontSize: "13px",
              justifyContent: "center"
            }}
          >
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Precious Achiuwa","https://cdn.nba.com/headshots/nba/latest/260x190/1630173.png")}
              draggable
            >
              <Avatar
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1630173.png"
                className={classes.Avatar}
              ></Avatar>
              Precious Achiuwa
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Jaylen Adams","https://cdn.nba.com/headshots/nba/latest/260x190/1629121.png")}
              draggable
            >
              <Avatar
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1629121.png"
                className={classes.Avatar}
              ></Avatar>
              Jaylen Adams
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Steven Adams","https://cdn.nba.com/headshots/nba/latest/260x190/203500.png")}
              draggable
            >
              <Avatar
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/203500.png"
                className={classes.Avatar}
              ></Avatar>
              Steven Adams
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Bam Adebayo","https://cdn.nba.com/headshots/nba/latest/260x190/1628389.png")}
              draggable
            >
              <Avatar
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1628389.png"
                className={classes.Avatar}
              ></Avatar>
              Bam Adebayo
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "LaMarcus Aldridge","https://cdn.nba.com/headshots/nba/latest/260x190/200746.png")}
              draggable
            >
              <Avatar
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/200746.png"
                className={classes.Avatar}
              ></Avatar>
              LaMarcus Aldridge
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Ty-Shon Alexander","https://cdn.nba.com/headshots/nba/latest/260x190/1630234.png")}
              draggable
            >
              <Avatar
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1630234.png"
                className={classes.Avatar}
              ></Avatar>
              Ty-Shon Alexander
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Coaches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              fontSize: "13px",
              justifyContent: "center"
            }}
          >
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Brad Stevens", "https://nbacoaches.com/wp-content/uploads/2019/05/Boston-NBAHeadCoaches-300x300.jpg")}
              draggable
            >
              <Avatar
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2019/05/Boston-NBAHeadCoaches-300x300.jpg"
                className={classes.Avatar}
              ></Avatar>
              Brad Stevens
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Steve Nash", "https://nbacoaches.com/wp-content/uploads/2020/09/Brooklyn-NBAHeadCoaches-300x300.jpg")}
              draggable
            >
              <Avatar
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2020/09/Brooklyn-NBAHeadCoaches-300x300.jpg"
                className={classes.Avatar}
              ></Avatar>
              Steve Nash
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Tom Thibodeau", "https://nbacoaches.com/wp-content/uploads/2020/08/Untitled-design-300x300.png")}
              draggable
            >
              <Avatar
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2020/08/Untitled-design-300x300.png"
                className={classes.Avatar}
              ></Avatar>
              Tom Thibodeau
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Doc Rivers", "https://nbacoaches.com/wp-content/uploads/2020/10/LAC-NBAHeadCoaches-300x300.jpg")}
              draggable
            >
              <Avatar
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2020/10/LAC-NBAHeadCoaches-300x300.jpg"
                className={classes.Avatar}
              ></Avatar>
              Doc Rivers
            </div>
            <div
              className={classes.AvatarHead}
              onDragStart={(event) => onDragStart(event, "default", "Nick Nurse", "https://nbacoaches.com/wp-content/uploads/2019/05/Toronto-NBAHeadCoaches-300x300.jpg")}
              draggable
            >
              <Avatar
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2019/05/Toronto-NBAHeadCoaches-300x300.jpg"
                className={classes.Avatar}
              ></Avatar>
              Nick Nurse
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
