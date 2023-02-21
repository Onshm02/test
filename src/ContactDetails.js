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

import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Switch from "@material-ui/core/Switch";

import DropDown from "./DropDown";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textBox: {
    textAlign: "center",
    //padding: theme.spacing(1),
    width: "100%"
  },
  grid: {
    marginTop: "10px"
  },
  input: {
    display: "none"
  }
}));

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const [contactPerson, setContactPerson] = React.useState("");
  const radioGroupRef = React.useRef(null);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const classes = useStyles1();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

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

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      //maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">
        Case Investigation - Interview Data
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.root}>
          <div style={{ margin: "15px" }}>
            <Grid container spacing={1}>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <TextField
                  className={classes.textBox}
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <TextField
                  className={classes.textBox}
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <TextField
                  className={classes.textBox}
                  label="Tier"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <TextField
                  className={classes.textBox}
                  label="Team Function/Title"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container style={{ marginTop: "6px" }}>
                    <DateTimePicker
                      style={{ width: "100%" }}
                      label="Initial Detectable Test Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container style={{ marginTop: "6px" }}>
                    <DateTimePicker
                      style={{ width: "100%" }}
                      label="CTO Contact Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container style={{ marginTop: "6px" }}>
                    <DateTimePicker
                      style={{ width: "100%" }}
                      label="Investigation Completed Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <div style={{ padding: "15px" }}>
                  <FormControlLabel
                    value="start"
                    control={
                      <Switch
                        checked={state.checkedB}
                        onChange={handleChangeSwitch}
                        color="primary"
                        name="checkedB"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    }
                    label="Asymptomatic"
                    labelPlacement="start"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid className={classes.grid} item xs={6} sm={6}>
                <TextField
                  className={classes.textBox}
                  label="Case Interview Notes"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <TextField
                  className={classes.textBox}
                  label="Possible/Known Exposures"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={3}>
                <TextField
                  className={classes.textBox}
                  label="CCMP"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid className={classes.grid} item xs={6} sm={6}>
                {/* <TextField
                  className={classes.textBox}
                  label="Close Contacts"
                  variant="outlined"
                /> */}
                <TextField
                  className={classes.textBox}
                  label="Relevant Notes"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.grid} item xs={6} sm={6}>
                <TextField
                  className={classes.textBox}
                  label="Managment"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </div>
          <Divider variant="middle" />
          <div style={{ margin: "15px" }}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6}>
                <DropDown className={classes.textBox} />
                {/* <TextField
                  className={classes.textBox}
                  label="Relevant Notes"
                  variant="outlined"
                /> */}
              </Grid>

              <Grid item xs={6} sm={6}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    style={{ width: "100%", height: "100%" }}
                    startIcon={<CloudUploadIcon />}
                    variant="outlined"
                    //color="primary"
                    component="span"
                  >
                    Upload
                  </Button>
                </label>
              </Grid>
            </Grid>
          </div>
        </div>
        {/* <TextField
          id="standard-basic"
          style={{ width: "100%" }}
          label="Full name"
          value={value}
          onChange={handleChange}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container style={{ marginTop: "10px" }}>
            <DateTimePicker
              style={{ width: "100%" }}
              label="Date Of Contact"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <div>
          <TextField
            id="standard-basic"
            style={{ marginTop: "10px", width: "100%" }}
            label="Phone Number"
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            style={{ marginTop: "10px", width: "100%" }}
            label="Any Contact Person"
            value={contactPerson}
            onChange={handleChangePerson}
          />
        </div>
       */}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleCancel} color="primary">
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
    // width: "80%",
    // maxHeight: 435
  }
}));

export default function ContactDetails(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(
    props.currentPlayer && props.currentPlayer.data
      ? props.currentPlayer.data.label.props.name
      : ""
  );
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
      />
    </div>
  );
}
