import React from "react";
import Accordion from "@material-ui/core/Accordion";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Player from './Player';
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
const players = [
  {
    name: "Precious Achiuwa",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1630173.png"
  },

  {
    name: "Jaylen Adams",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1629121.png"
  },

  {
    name: "Steven Adams",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/203500.png"
  },

  {
    name: "Bam Adebayo",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1628389.png"
  },

  {
    name: "LaMarcus Aldridge",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/200746.png"
  },

  {
    name: "Ty-Shon Alexander",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1630234.png"
  }
];

const coaches = [
  {
    name: "Brad Stevens",
    image:
      "https://nbacoaches.com/wp-content/uploads/2019/05/Boston-NBAHeadCoaches-300x300.jpg"
  },

  {
    name: "Steve Nash",
    image:
      "https://nbacoaches.com/wp-content/uploads/2020/09/Brooklyn-NBAHeadCoaches-300x300.jpg"
  },

  {
    name: "Tom Thibodeau",
    image:
      "https://nbacoaches.com/wp-content/uploads/2020/08/Untitled-design-300x300.png"
  },

  {
    name: "Doc Rivers",
    image:
      "https://nbacoaches.com/wp-content/uploads/2020/10/LAC-NBAHeadCoaches-300x300.jpg"
  },

  {
    name: "Nick Nurse",
    image:
      "https://nbacoaches.com/wp-content/uploads/2019/05/Toronto-NBAHeadCoaches-300x300.jpg"
  }
];
export default function externalNodeBaseComponent1(props) {
  const classes = useStyles();
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
          <div style={{display: "flex", width: "100%", flexWrap: "wrap",
              fontSize: "13px", justifyContent: "center"}}
          >
            {players.map((player, index) => (
              <Player id={index}  key={index} player={player} connectDragSource={props.connectDragSource}/>
            ))};
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
            {coaches.map((player, index) => (
              <Player id={index} key={index} player={player} connectDragSource={props.connectDragSource}/>
            ))};
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

// export default function externalNodeBaseComponent(props) {
//   const { connectDragSource, node } = props;
//   return connectDragSource(
//     <div
//       style={{
//         display: 'inline-block',
//         padding: '3px 5px',
//         background: 'blue',
//         color: 'white',
//       }}
//     >
//       {node.title}
//     </div>,
//     { dropEffect: 'copy' }
//   );
// }
