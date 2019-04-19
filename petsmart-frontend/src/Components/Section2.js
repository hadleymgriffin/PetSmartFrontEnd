import React from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import Section3 from './Section3'
import ExpenseDataStore from '../Data/ExpenseDataStore'

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

const divStyle = {
  margin: '40px'
};

const headerStyle = {
  width: '30%'
}

const addButtonStyle = {
  marginLeft: '40px',
  width: '14%',
  backgroundColor: 'white',
  color: 'black',
  borderColor: 'black'
};

const submitButtonStyle = {
  margin: '40px',
  width: '14%',
  backgroundColor: 'red',
  borderColor: 'red'
};

const nextButtonStyle = {
  right: '40px',
  width: '14%'
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class Section2 extends React.Component {
  constructor(props) {
    super(props);
    var date = new Date()
    this.state = {
      rows: [],
      id: 0,
      startDate: date,
      data: ExpenseDataStore.data.section2
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addRow = this.addRow.bind(this);
    this.createData = this.createData.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  componentDidMount() {
    this.addRow();
  }

  updateDate(id, date) {
    this.state.data[id].date = date;
    this.setState({
      startDate: date
    });
    console.log(this.state.data)
  }

  createData(To, From, Breakfast, Lunch, Dinner, Parking, Airfare, Gas, Lodging, Phone, Misc) {
    let id = this.state.id
    let obj = { id, To, From, Breakfast, Lunch, Dinner, Parking, Airfare, Gas, Lodging, Phone, Misc };
    this.state.id += 1;
    return obj;


  }

  handleClick() {
    ExpenseDataStore.data.section2 = this.state.data;
    console.log(ExpenseDataStore.data);
  }

  handleChange(id, name, event) {
    switch (name) {
      case 1:
        this.state.data[id].traveledFrom = event.target.value;
        break;
      case 2:
        this.state.data[id].traveledTo = event.target.value;
        break;
      case 3:
        this.state.data[id].breakfast = event.target.value;
        break;
      case 4:
        this.state.data[id].lunch = event.target.value;
        break;
      case 5:
        this.state.data[id].dinner = event.target.value;
        break;
      case 6:
        this.state.data[id].parkingOrTaxi = event.target.value;
        break;
      case 7:
        this.state.data[id].airfare = event.target.value;
        break;
      case 8:
        this.state.data[id].gas = event.target.value;
        break;
      case 9:
        this.state.data[id].lodging = event.target.value;
        break;
      case 10:
        this.state.data[id].phoneOrWifi = event.target.value;
        break;
      case 11:
        this.state.data[id].misc = event.target.value;
        break;
      default:
        break;
    }

  }



  addRow() {
    if (this.state.rows != null && this.state.rows.length < 7) {
      let data = this.createData(
        <Form.Group controlId="To">
          <Form.Control size="sm" type="text" placeholder="To" />
        </Form.Group>,
        <Form.Group controlId="From">
          <Form.Control size="sm" type="text" placeholder="From" />
        </Form.Group>,
        <Form.Group controlId="ThursDate">
          <Form.Control size="sm" type="text" placeholder="Breakfast" />
        </Form.Group>,
        <Form.Group controlId="FriDate">
          <Form.Control size="sm" type="text" placeholder="Lunch" />
        </Form.Group>,
        <Form.Group controlId="SatDate">
          <Form.Control size="sm" type="text" placeholder="Dinner" />
        </Form.Group>,
        <Form.Group controlId="SunDate">
          <Form.Control size="sm" type="text" placeholder="Parking/Tolls/Taxi/Rental" />
        </Form.Group>,
        <Form.Group controlId="SunDate">
          <Form.Control size="sm" type="text" placeholder="Airfare" />
        </Form.Group>
        ,
        <Form.Group controlId="SunDate">
          <Form.Control size="sm" type="text" placeholder="Gas" />
        </Form.Group>,
        <Form.Group controlId="SunDate">
          <Form.Control size="sm" type="text" placeholder="Lodging" />
        </Form.Group>,
        <Form.Group controlId="f">
          <Form.Control size="sm" type="text" placeholder="Phone/Wifi" />
        </Form.Group>,
        <Form.Group controlId="f">
          <Form.Control size="sm" type="text" placeholder="Miscellaneous" />
        </Form.Group>
      );
      var rows = this.state.rows;
      rows.push(data);
      this.setState({ rows: rows })
    }
  }
  deleteRow() {
    if (this.state.rows != null && this.state.rows.length > 1) {
      var rows = this.state.rows;

      let idx = rows.length - 1;
      var data = this.state.data;
      data[idx] = {
                    date: null,
                    traveledFrom: null,
                    traveledTo: null,
                    breakfast: null,
                    lunch: null, 
                    dinner: null, 
                    parkingOrTaxi: null,
                    airfare: null,
                    gas: null,
                    lodging: null,
                    phoneOrWifi: null,
                    misc: null
                };

      rows.pop();
      this.setState({ rows: rows,
      data: data});
      console.log(this.state);
    }
  }

  render() {

    return (
      <div>
        <Paper style={headerStyle}> <h1>Section 2</h1></Paper>


        <div style={divStyle}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Store or City/State Travelled To</TableCell>
                <TableCell align="center">Store or City/State Travelled From:</TableCell>
                <TableCell align="center">Breakfast</TableCell>
                <TableCell align="center">Lunch</TableCell>
                <TableCell align="center">Dinner</TableCell>
                <TableCell align="center">Parking/Tolls/Taxi/Rental</TableCell>
                <TableCell align="center">Airfare</TableCell>
                <TableCell align="center">Gas (Rental Only)</TableCell>
                <TableCell align="center">Lodging</TableCell>
                <TableCell align="center">Phone/Wifi</TableCell>
                <TableCell align="center">Miscellaneous</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map(row => (
                <TableRow key={row.id}>
                  <DatePicker selected={this.state.data[row.id].date || new Date} onSelect={(e) => this.updateDate(row.id, e)} />
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 1, e)}>{row.To}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 2, e)}>{row.From}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 3, e)}>{row.Breakfast}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 4, e)}>{row.Lunch}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 5, e)}>{row.Dinner}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 6, e)}>{row.Parking}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 7, e)}>{row.Airfare}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 8, e)}>{row.Gas}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 9, e)}>{row.Lodging}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 10, e)}>{row.Phone}</TableCell>
                  <TableCell align="right" onChange={(e) => this.handleChange(row.id, 11, e)}>{row.Misc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <Button id="addBtn" style={addButtonStyle} onClick={this.deleteRow}>Remove</Button>
          <Button id="addBtn" style={addButtonStyle} onClick={this.addRow}>Add</Button>
        </div>
        <div>
          <Link to="/section1">
            <Button id="Submit" style={submitButtonStyle} onClick={this.handleClick}>Back</Button>
          </Link>
          <Link to="/section3">
            <Button id="Submit" style={nextButtonStyle} onClick={this.handleClick}>Next</Button>
          </Link>
        </div>
      </div>
    );
  }
}



export default Section2;