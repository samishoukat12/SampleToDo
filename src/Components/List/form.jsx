import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import {Data} from "../List/table"
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormInputs([Data,setData]) {
  const classes = useStyles();
  const[Name,setName]=useState("");
  const[email,setEmail]=useState("");

  const htdhandler=()=>{
      console.log(Data);
      let basicUser={
          name:Name,
          Email:email,


      }
      setData([...Data,basicUser]);
      setName("");
      setEmail("")
  }



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <TextField id="filled-basic" label="Email" variant="filled" />
      <Button color="secondary" variant="contained" onClick={htdhandler}>submit</Button>
    </form>
  );
}
