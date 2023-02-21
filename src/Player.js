import React from "react";
import { DragSource } from "react-dnd";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Avatar: {
    width: "65px",
    height: "65px",
    margin: "5px",
    fontSize: "15px",
    color: "white",
    backgroundColor: "#1d428a"
  }
}));

function Player(props) {
  const classes = useStyles();
  const { connectDragSource } = props;
  return connectDragSource(
    <div style={{width: 'min-content'}}>
      <Avatar
        alt=""
        src={props.player.image}
        className={classes.Avatar}
      ></Avatar>
      {props.player.name}
    </div>
  );
}

const spec = {
  beginDrag(props) {
    console.log("props", props);
    return {
      node: {title: props.player.name}
    };
  },
  canDrag(props, monitor) {
    return true;
  },
  endDrag(props, monitor) {
    console.log("You dropped .... into " + monitor.getDropResult());
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(spec),
  isDragging: monitor.isDragging()
});

export default DragSource("covidTracing", spec, collect)(Player);
