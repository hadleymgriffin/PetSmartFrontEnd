import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(day, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {
  id += 1;
  return { id, day, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };
}

const rows = [
  createData('Travel Dates:', 
    <Form.Group controlId="MonDate">
      <Form.Control size="sm" type="text" placeholder="Date" />
    </Form.Group>,
    <Form.Group controlId="TuesDate">
      <Form.Control size="sm" type="text" placeholder="Date" />
    </Form.Group>,
    <Form.Group controlId="WedDate">
      <Form.Control size="sm" type="text" placeholder="Date" />
    </Form.Group>,
    <Form.Group controlId="ThursDate">
      <Form.Control size="sm" type="text" placeholder="Date" />
    </Form.Group>,
    <Form.Group controlId="FriDate">
      <Form.Control size="sm" type="text" placeholder="Date" />
    </Form.Group>,
    <Form.Group controlId="SatDate">
      <Form.Control size="sm" type="text" placeholder="Date" />
    </Form.Group>,
    <Form.Group controlId="SunDate">
      <Form.Control size="sm" type="text" placeholder="Date" />
    </Form.Group>,
    ),
  createData('Store or City/State Travelled To:', 
  <Form.Group controlId="MonTo">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="TuesTo">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="WedTo">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="ThursTo">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="FriTo">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="SatTo">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="SunTo">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
  ),
  createData('Store or City/State Travelled From:',
   <Form.Group controlId="MonFrom">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="TuesFrom">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="WedFrom">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="ThursFrom">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="FriFrom">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="SatFrom">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
    <Form.Group controlId="SunFrom">
      <Form.Control size="sm" type="text" placeholder="City/State" />
    </Form.Group>,
   ),
  createData('Breakfast', 
  <Form.Group controlId="MonBreakfast">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesBreakfast">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedBreakfast">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursBreakfast">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriBreakfast">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatBreakfast">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunBreakfast">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
  ),
  createData('Lunch',
    <Form.Group controlId="MonLunch">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesLunch">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedLunch">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursLunch">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriLunch">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatLunch">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunLunch">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
  ),
  createData('Dinner', 
    <Form.Group controlId="MonDinner">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesDinner">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedDinner">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursDinner">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriDinner">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatDinner">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunDinner">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    ),
  createData('Parking/Tolls/Taxi/Rental:', 
    <Form.Group controlId="MonParking">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesParking">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedParking">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursParking">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriParking">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatParking">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunParking">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    ),
  createData('Airfare:', 
    <Form.Group controlId="MonAirfare">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesAirfare">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedAirfare">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursAirfare">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriAirfare">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatAirfare">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunAirfare">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    ),
  createData('Gasoline (Rental Car ONLY):', 
    <Form.Group controlId="MonGas">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesGas">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedGas">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursGas">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriGas">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatGas">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunGas">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    ),
  createData('Lodging:', 
    <Form.Group controlId="MonLodge">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesLodge">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedLodge">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursLodge">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriLodge">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatLodge">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunLodge">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    ),
  createData('Phone/Wifi:', 
    <Form.Group controlId="MonPhone">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesPhone">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedPhone">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursPhone">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriPhone">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatPhone">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunPhone">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
  ),
  createData('Miscellaneous:', 
    <Form.Group controlId="MonMiscDetail">
      <Form.Control size="sm" type="text" placeholder="Description" />
    </Form.Group>,
    <Form.Group controlId="TuesMiscDetail">
      <Form.Control size="sm" type="text" placeholder="Description" />
    </Form.Group>,
    <Form.Group controlId="WedMiscDetail">
      <Form.Control size="sm" type="text" placeholder="Description" />
    </Form.Group>,
    <Form.Group controlId="ThursMiscDetail">
      <Form.Control size="sm" type="text" placeholder="Description" />
    </Form.Group>,
    <Form.Group controlId="FriMiscDetail">
      <Form.Control size="sm" type="text" placeholder="Description" />
    </Form.Group>,
    <Form.Group controlId="SatMiscDetail">
      <Form.Control size="sm" type="text" placeholder="Description" />
    </Form.Group>,
    <Form.Group controlId="SunMiscDetail">
      <Form.Control size="sm" type="text" placeholder="Description" />
    </Form.Group>,
  ),
  createData(' ', 
    <Form.Group controlId="MonMiscPrice">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="TuesMiscPrice">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="WedMiscPrice">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="ThursMiscPrice">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="FriMiscPrice">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SatMiscPrice">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
    <Form.Group controlId="SunMiscPrice">
      <Form.Control size="sm" type="text" placeholder="$0.00" />
    </Form.Group>,
  ),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Monday</TableCell>
            <TableCell align="center">Tuesday</TableCell>
            <TableCell align="center">Wednesday</TableCell>
            <TableCell align="center">Thursday</TableCell>
            <TableCell align="center">Friday</TableCell>
            <TableCell align="center">Saturday</TableCell>
            <TableCell align="center">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.Monday}</TableCell>
              <TableCell align="right">{row.Tuesday}</TableCell>
              <TableCell align="right">{row.Wednesday}</TableCell>
              <TableCell align="right">{row.Thursday}</TableCell>
              <TableCell align="right">{row.Friday}</TableCell>
              <TableCell align="right">{row.Saturday}</TableCell>
              <TableCell align="right">{row.Sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
