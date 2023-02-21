import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '290px',
    height: '140px',
    margin: '10px'
  },
  person: {
    marginTop: "10px"
  },
  avatar: {
    backgroundColor: 'black'
  },
  count: {
    fontSize: 28,
    fontWeight: 500
  },
  content: {
    display: "flex",
    justifyContent: "center"
  },
  grid: {
    flexWrap: "nowrap"
  },
  text: {
    fontSize: 14,
    fontWeight: 500
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}
            src={props.image}
          />
        }
        action={
          <IconButton onClick={e=> props.showResult(props.count)}  aria-label="edit">
            <EditIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.team}
      />
      <CardContent className={classes.content}>
        <PersonIcon className={classes.person} />
        <Typography className={classes.count} color="textSecondary">
          {props.count}{" "}
          <span className={classes.text} color="textSecondary">
            Contacts Traced
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
