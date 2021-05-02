import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useState} from "react"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function BasicTable() {
  const classes = useStyles();
  const [Data,setData] = useState([
    {
        name:"sami",
        Email:"samishokat@gmail.com",
        Roles:"admin",
        ExtraPermissions:"all",
    }
   ]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
          <TableCell>Name</TableCell>
            <TableCell align="">Email</TableCell>
            <TableCell align="">Roles</TableCell>
            <TableCell align="">Extra Permissions</TableCell>
            <TableCell align="">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row,Index) => (
            <TableRow key={row.name}>
                 <TableCell align="">{Index}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="">{row.Email}</TableCell>
              <TableCell align="">{row.Roles}</TableCell>
              <TableCell align="">{row.ExtraPermissions}</TableCell>
              <TableCell align="">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
