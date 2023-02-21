import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    width: 250
  },
  header: {
    padding: '5px'
  },
  action: {
    padding: "0px",
    justifyContent: 'center',
    marginRight: '14px'
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    display: 'inline-flex',
    backgroundColor: '#1d428a'
  },
  icons: {
      marginLeft: 0,
      marginTop: 0
  }
}));

export default function CustomNode(props) {
  const classes = useStyles();
  const [id, setId] = React.useState(props.id);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Card className={classes.root}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Avatar
            className={classes.large}
            src={props.image}
            aria-label="recipe"
          ></Avatar>
          <Typography gutterBottom component="h2">
          {props.name} 
          </Typography>
        </div>
        <FormGroup style={{ justifyContent: "center" }}>
          <FormControlLabel
            className={classes.icons}
            control={
              <Checkbox
                icon={<MoodIcon color="primary" />}
                checkedIcon={
                  <MoodBadIcon style={{ color: "rgb(200, 16, 46)" }} />
                }
                name="checkedA"
              />
            }
          />
          <FormControlLabel
            className={classes.icons}
            control={
              <Checkbox
                color="primary"
                icon={<PersonPinCircleIcon />}
                checkedIcon={<PersonPinCircleIcon />}
                name="checkedA"
              />
            }
          />
          <FormControlLabel
            className={classes.icons}
            control={
              <Checkbox
                color="primary"
                icon={<ContactPhoneIcon />}
                checkedIcon={<ContactPhoneIcon />}
                name="checkedB"
              />
            }
          />
        </FormGroup>
      </div>
        <CardActions className={classes.action}>
          <IconButton onClick={(event) =>  props.openContactDetails(id)} aria-label="add to favorites">
            <EditIcon />
          </IconButton>
          <IconButton onClick={(event) =>  props.removeNode(id)} aria-label="share">
            <DeleteIcon />
          </IconButton>
        </CardActions>
    </Card>
  );
}