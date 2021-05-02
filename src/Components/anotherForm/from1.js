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
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"
import Alert from '@material-ui/lab/Alert';
// import EditIcon from '@material-ui/icons/Edit';

// import { Data } from "../List/listData";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

// import TextField from "@material-ui/core/TextField"
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
const Data = [
  {
    name: "unknown",
    rollno: "0000",
    email: "sample@mail.com",
    roles: "admin",
    extraPermissions: "do anything",
  },
  
];
export default function Form1() {
  // const [Roles, setRoles] =useState('EUR');
  const [users, setUsers] = useState(Data);
  const [Name, setName] = useState('');
  const [Rollno, setRollno] = useState('');
  const [Email, setEmail] = useState('');
  const [Roles2, setRoles2] = useState(BasicRoles);
  const [ExtraPer, setExtraper] = useState('');
  const[errormessage,setError]= useState('')
  const [flag, setflag] = useState(false);
  const [updatedIndex, setUpdatedIndex] = useState(0);
// Adding Handler
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
      setName('');
      setRollno('');
      setEmail('');
      setRoles2('');
      setExtraper('');

    } else {
      setError("parans cant be empty");
    }
  };

//   UPDATE HANDLER
const UpdateHandler = (users, index) => {
    console.log("need to update", users);
    setUpdatedIndex(index);
    setName(users.name);
    setRollno(users.rollno);
    setEmail(users.email);
    setRoles2(users.roles);
    setExtraper(users.extraPermissions);
    setflag(true);
  };
  const ctaUpdateHandler = () => {
    setError("");
    if (
      Name !== "" &&
      Rollno !== "" &&
      Email !== "" &&
      Roles2 !== "" &&
      ExtraPer !== ""
    ) {
      let BasicUser= {
        name: Name,
        rollno: Rollno,
        email: Email,
        roles: Roles2,
        extraPermissions: ExtraPer,
      };
      console.log( BasicUser);
      let updateUsers = users.map((stu, index) => {
        if (updatedIndex === index) {
          return  BasicUser;
        } else {
          return stu;
        }
      });
      setUsers([...updateUsers]);
      setName('');
      setRollno('');
      setEmail('');
      setRoles2('');
      setExtraper('');
    } else setError("parans cant be empty");
  };
   const cleanInput=()=> {
    this.setState({
        name: ''
    })
}
 //   DELETE HANDLER
const deleteHandler = (index) => {
    console.log("id", index);
    let newUsers = users.filter((users, i) => {
      if (i !== index) {
        return users;
      }
    });

    setUsers([...newUsers]);

    console.log("newUsers", newUsers);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={3} md={2} style={{marginTop:20,marginRight:10}}>
          <TextField
            id="input-with-icon-grid"
            label="Name"
            fullWidth="bool"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={2} style={{marginTop:20,marginRight:10}}>
          <TextField
            id="input-with-icon-grid"
            label="Roll No"
            value={Rollno}
            fullWidth="bool"
            
            onChange={(e) => setRollno(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={2} style={{marginTop:20,marginRight:10}}>
          <TextField
            id="input-with-icon-grid"
            label="Email"
            type="email"
            fullWidth="bool"
            value={Email}
            
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        {/* selection */}
        <Grid item xs={12} sm={3} md={2} style={{marginTop:20,marginRight:10}}>
          <TextField
            id="standard-select-currency"
            select
            label="Select Roles"
            fullWidth="bool"
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
        <Grid item xs={12} sm={3} md={2} style={{marginTop:20,marginRight:10}}>
          <TextField
            id="input-with-icon-grid"
            label="Extra Permission"
            fullWidth="bool"
            value={ExtraPer}
            onChange={(e) => setExtraper(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={2} style={{marginBottom:20,marginRight:10}}>

            {/* EditSNACKBAR */}
            
        {flag ? (
        <Button onClick={ctaUpdateHandler}><EditIcon/></Button>
      ) : (
        <Button variant="contained" color="secondary"  type="reset" onClick={ctaHandler} >Add User</Button>
      )}
          {/* <Button variant="contained" color="secondary" onClick={ctaHandler}>
            Add User
          </Button> */}
        </Grid>
        <Typography variant="h4" style={{width:"100%",textAlign:"center",backgroundColor:"Red"}}>{errormessage}</Typography>
        
        

        {/* Table */}
      </Grid>
      <Table>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="">Roll No</TableCell>
                <TableCell align="">Email</TableCell>
                <TableCell align="">Roles</TableCell>
                <TableCell align="">Extra Permissions</TableCell>
                <Grid item xs={12} sm={5} md={5}>
                  <TableCell align="right">Actions</TableCell>
                </Grid>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((users, index) => (
                <TableRow>
                  <TableCell align="">{index}</TableCell>
                  <TableCell component="th" scope="row">
                    {users.name}
                  </TableCell>
                  <TableCell align="">{users.rollno}</TableCell>
                  <TableCell align="">{users.email}</TableCell>
                  <TableCell align="">{users.roles}</TableCell>
                  <TableCell align="">{users.extraPermissions}</TableCell>
                  <TableCell align="left">
                    <Button color="primary" onClick={() => UpdateHandler(users, index)}>
                      <EditIcon />
                    </Button>
                    <Button color="secondary" onClick={() => deleteHandler(index)} >
                      <DeleteOutlinedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Table>
      
    </div>
  );
}
