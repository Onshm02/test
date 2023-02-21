import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import PlayerCard from "./PlayerCard";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AppBar from "./AppBar";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  caption: {
    paddingTop: "30px",
    paddingBottom: "10px",
    fontWeight: 500,
    marginLeft: "14px"
  },
  caption1: {
    paddingTop: "30px",
    paddingBottom: "10px",
    fontWeight: 600,
    float: "left"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "10px",
    width: "100%",
    minHeight: "25vh"
  }
}));

const players = [
  {
    name: "Precious Achiuwa",
    team: "January 20, 2021",
    count: "3",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1630173.png"
  },

  {
    name: "Jaylen Adams",
    team: "January 14, 2021",
    count: "9",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1629121.png"
  },

  {
    name: "Steven Adams",
    team: "January 15, 2021",
    count: "6",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/203500.png"
  },

  {
    name: "Bam Adebayo",
    team: "January 1, 2021",
    count: "1",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1628389.png"
  },

  {
    name: "LaMarcus Aldridge",
    team: "January 14, 2021",
    count: "10",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/200746.png"
  },

  {
    name: "Ty-Shon Alexander",
    team: "January 8, 2021",
    count: "12",
    image: "https://cdn.nba.com/headshots/nba/latest/260x190/1630234.png"
  },
  {
    name: "Brad Stevens",
    team: "January 8, 2021",
    count: "16",
    image:
      "https://nbacoaches.com/wp-content/uploads/2019/05/Boston-NBAHeadCoaches-300x300.jpg"
  },

  {
    name: "Steve Nash",
    team: "January 11, 2021",
    count: "8",
    image:
      "https://nbacoaches.com/wp-content/uploads/2020/09/Brooklyn-NBAHeadCoaches-300x300.jpg"
  }
];

export default function FullWidthGrid() {
  const classes = useStyles();
  const [result, setResult] = React.useState(false);
  const [resultCount, setResultCount] = React.useState(false);

  const showResult = (count) => {
    setResultCount(count);
    setResult(true);
  };

  const showList = () => {
    setResult(false);
  };
  return (
    <div>
      {result ? (
        <Home resultCount={resultCount} showList={showList} />
      ) : (
        <div className={classes.root}>
          <AppBar />
          <Grid container>
            <Paper className={classes.paper}>
              <Fab
                style={{ color: "white", backgroundColor: "#c8102e" }}
                aria-label="add"
                onClick={(e) => showResult(0)}
              >
                <AddIcon />
              </Fab>
              <Typography className={classes.caption} color="textSecondary">
                Create a new COVID Positive contact tracing list
              </Typography>
            </Paper>
          </Grid>
          <Typography className={classes.caption1} color="textSecondary">
            COVID Positive Contact Tracing List:
          </Typography>
          <Grid style={{ justifyContent: "center" }} container>
            <Grid style={{ display: "contents" }} item xs={6} sm={3}>
              {players.map((player, index) => (
                <PlayerCard
                  count={player.count}
                  name={player.name}
                  team={player.team}
                  image={player.image}
                  showResult={showResult}
                />
              ))}
            </Grid>
          </Grid>
          <Divider />
        </div>
      )}
    </div>
  );
}
