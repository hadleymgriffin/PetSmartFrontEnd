import React from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Section2 from './Section2'
import ExpenseDataStore from '../Data/ExpenseDataStore'
import Paper from '@material-ui/core/Paper';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const divStyle = {
  margin: '40px'
};

const headerStyle = {
    width: '30%'
}

const addButtonStyle = {
    marginright: '40px',

    width: '10%'
};


class Section1 extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {  employeeId: 112345678,
                    country: "USA"      
                  };
  }

  handleClick() {
    ExpenseDataStore.data.name = this.state.name;
    ExpenseDataStore.data.address1 = this.state.address1;
    ExpenseDataStore.data.address2 = this.state.address2;
    ExpenseDataStore.data.employeeId = this.state.employeeId;
    ExpenseDataStore.data.city = this.state.city;
    ExpenseDataStore.data.state = this.state.state;
    ExpenseDataStore.data.zip = this.state.zipCode;
    ExpenseDataStore.data.country = this.state.country;
    ExpenseDataStore.data.reasonDetails = this.state.reasonDetails;
    console.log(ExpenseDataStore.data);
    // ExpenseDataStore.data.section1 = this.state
    // console.log(ExpenseDataStore.data);
  }

  render() {
    return (
      <div>
      <Paper style={headerStyle}><h1>Section 1</h1></Paper>
      <div style={divStyle}>
        
        <h2>Information</h2>
        <Form.Group controlId="formEmployeeName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(event) => { this.setState({name : event.target.value}) }}/>
        </Form.Group>

        <Form.Group controlId="formEmployeeId">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control type="text" value={this.state.employeeId} readonly="readonly" onChange={(event) => { this.setState({employeeId : event.target.value}) }}/>
        </Form.Group>
        <h2>Address</h2>
        <Form.Group controlId="formAddress1">
          <Form.Control type="text" placeholder="Address Line 1" onChange={(event) => { this.setState({address1 : event.target.value}) }}/>
        </Form.Group>

        <Form.Group controlId="formAddress2">
          <Form.Control type="text" placeholder="Address Line 2" onChange={(event) => { this.setState({address2 : event.target.value}) }}/>
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Control type="text" placeholder="City" onChange={(event) => { this.setState({city : event.target.value}) }}/>
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Control type="text" placeholder="State" onChange={(event) => { this.setState({state : event.target.value}) }}/>
        </Form.Group>

        <select id="country"  onChange={(event) => { this.setState({country : event.target.value}) }}>
          <option value="USA">USA</option>
          <option value="CA">Canada</option>
        </select>


        <Form.Group controlId="forZipCode">
          <Form.Control type="text" placeholder="ZipCode" onChange={(event) => { this.setState({zipCode : event.target.value}) }}/>
        </Form.Group>

        <h2>Reason for Reimbursement Request</h2>
        <select>
          <option value="Reason">Reason</option>
        </select>

        <Form.Group controlId="formReasona">
          <Form.Control type="text" placeholder="Reason Details" onChange={(event) => { this.setState({reasonDetails : event.target.value}) }} />
        </Form.Group>


        <Link to="/section2">
          <Button style={addButtonStyle} onClick={this.handleClick}>Next</Button>
        </Link>

      </div>
      </div>
    );
  }
}

export default Section1;