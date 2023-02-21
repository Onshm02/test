import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  control: {
    margin: "10px"
  },
  icons: {
    padding: "12px",
    margin: "10px"
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function ConfirmationDialogRaw(props) {
  const classes = useStyles1();
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const [contactPerson, setContactPerson] = React.useState("");
  const radioGroupRef = React.useRef(null);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [collection, setCollection] = React.useState([1]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const addNew = () => {
    var newData = collection.length + 1;
    var data = Array.from(collection);
    data.push(newData);
    setCollection(data);
  };
  const removeNode = (index) => {
    if (index > 0) {
      var data = Array.from(collection);
      data.splice(index, 1);
      setCollection(data);
    }
  };

  const createNewRow = (element, index) => {
    return (
      <div>
        <Grid key={index} container>
          <Grid item sm={1}>
            <Typography style={{ margin: "10px", padding: "15px" }}>
              {index + 1}.
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container>
                <DateTimePicker
                  className={classes.control}
                  style={{ width: "100%" }}
                  label="Date Of Contact"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item sm={3}>
            <TextField
              className={classes.control}
              id="outlined-basic"
              label="Duration (mins)"
              //variant="outlined"
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              className={classes.control}
              id="outlined-basic"
              label="Source"
              //variant="outlined"
            />
          </Grid>
          <Grid item sm={2}>
            <div className={classes.icons}>
              <IconButton
                onClick={(event) => removeNode(index)}
                aria-label="delete"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
              {collection.length === index + 1 ? (
                <IconButton
                  onClick={(event) => addNew(index + 1)}
                  aria-label="ADD"
                  size="small"
                >
                  <AddIcon style={{ marginLeft: "3px" }} />
                </IconButton>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangePerson = (event) => {
    setContactPerson(event.target.value);
  };

  const deleteInstance = () => {
    props.deleteInstance();
    onClose();
  };

  return (
    <Dialog
      //disableBackdropClick
      //disableEscapeKeyDown
      maxWidth="400px"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">
        Contact Instances
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.root}>
          {collection &&
            collection.map((element, index) => (
              <div key={index}>{createNewRow(element, index)}</div>
            ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={deleteInstance} color="primary">
          Delete
        </Button>
        <Button onClick={handleOk} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    width: "80%",
    maxHeight: 435
  }
}));

export default function ContactInstance(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState();
  const [currentPlayer] = React.useState(props.currentPlayer);

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
    props.onClose(newValue);
  };

  return (
    <div className={classes.root}>
      <ConfirmationDialogRaw
        classes={{
          paper: classes.paper
        }}
        id="contact-form"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
        currentPlayer={currentPlayer}
        deleteInstance={props.deleteInstance}
      />
    </div>
  );
}
