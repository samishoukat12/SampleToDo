import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
// import { Data } from "./Components/List/listData";
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Typography from "@material-ui/core/Typography"



const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const BasicRoles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Editor",
    label: "Editor",
  },
  {
    value: "Moderator",
    label: "Moderator",
  },
  {
    value: "Not a member",
    label: "Not a member",
  },
];
const Data=[
    {
        name: "unknown",
        rollno: "0000",
        email: "sample@mail.com",
        roles: "admin",
        extraPermissions: "do anything",
      },
]
export default function SimpleFade() {
  const [users, setUsers] = useState(Data);
  const [Name, setName] = useState(" ");
  const [Rollno, setRollno] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Roles2, setRoles2] = useState(BasicRoles);
  const [ExtraPer, setExtraper] = useState(" ");
  const[errormessage,setError]=useState("");

  const ctaHandler = () => {
    setError("");

    if (
      Name !== "" &&
      Rollno !== "" &&
      Email !== "" &&
      Roles2 !== "" &&
      ExtraPer !== ""
    ) {
      let BasicUser = {
        name: Name,
        rollno: Rollno,
        email: Email,
        roles: Roles2,
        extraPermissions: ExtraPer,
      };
      console.log(BasicUser);
      setUsers([...users, BasicUser]);
      setName("");
      setRollno("");
      setEmail("");
      setRoles2("");
      setExtraper("");

    } else {
      setError("parans cant be empty");
    }
  };

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="AddUser"
      />
      <div className={classes.container}>
        <Fade in={checked}>
          <div>
            <Grid container>
              <Grid item xs={12} sm={2} md={2}>
                <TextField
                  id="input-with-icon-grid"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2} md={2}>
                <TextField
                  id="input-with-icon-grid"
                  label="Roll No"
                  onChange={(e) => setRollno(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2} md={2}>
                <TextField
                  id="input-with-icon-grid"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              {/* selection */}
              <Grid item xs={12} sm={2} md={2}>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select Roles"
                  value={Roles2}
                  helperText="Please select your role"
                  onChange={(e) => setRoles2(e.target.value)}
                >
                  {BasicRoles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={2} md={2}>
                <TextField
                  id="input-with-icon-grid"
                  label="Extra Permission"
                  onChange={(e) => setExtraper(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2} md={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={ctaHandler}
              >
                Add User
              </Button>
              </Grid>

              {/* Table */}
            </Grid>
            {/* <Table>
              <TableContainer>
                <TableHead>
                  <TableRow>
                    <TableCell>Index</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Roll NO</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Roles</TableCell>
                    <TableCell>Extra Permissions</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead> */}
                {/* {users.map((users, index) => {
                  return (
                    <TableBody>
                      <TableRow>
                        <TableCell>{index}</TableCell>
                        <TableCell>
                          {/* <DataGrid columns={[{ field: 'name', editable: true }]} /> */}
                          {/* {users.name}
                        </TableCell>
                        <TableCell>{users.rollno}</TableCell>
                        <TableCell>{users.email}</TableCell>
                        <TableCell>{users.roles}</TableCell>
                        <TableCell>{users.extraPermissions}</TableCell>
                        <TableCell>
                          <Button>
                            <EditIcon />
                          </Button>
                          <Button>
                            {/* <DeleteOutlinedIcon /> */}
                          {/* </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody> */}
                  {/* );
                })} */}
              {/* </TableContainer>
            </Table> */}

     <Typography variant="h5" style={{backgroundColor:"red"}}>{errormessage}</Typography>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
          <TableCell>Name</TableCell>
          <TableCell align="">Roll No</TableCell>
            <TableCell align="">Email</TableCell>
            <TableCell align="">Roles</TableCell>
            <TableCell align="">Extra Permissions</TableCell>
            <TableCell align="">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users,Index) => (
            <TableRow key={users.name}>
                 <TableCell align="">{Index}</TableCell>
              <TableCell component="th" scope="row">
                {users.name}
              </TableCell>
              <TableCell align="">{users.rollno}</TableCell>
              <TableCell align="">{users.email}</TableCell>
              <TableCell align="">{users.roles}</TableCell>
              <TableCell align="">{users.extraPermissions}</TableCell>
              <TableCell align="">
              <TableCell align="left">
                    <Button color="primary" >
                      <EditIcon />
                    </Button>
                    <Button color="secondary" >
                      <DeleteOutlinedIcon />
                    </Button>
                  </TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </Fade>
      </div>
    </div>
  );
}
