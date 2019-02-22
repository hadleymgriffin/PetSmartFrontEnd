import React from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Section2 from './Section2'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const divStyle = {
  margin: '40px'
};

const Section1 = () => (
  <div style={divStyle}>
    <h2>Information</h2>
    <Form.Group controlId="formEmployeeName">
      <Form.Label>Employee Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" />
    </Form.Group>

    <Form.Group controlId="formEmployeeId">
      <Form.Label>Employee Id</Form.Label>
      <Form.Control type="text" placeholder="123456" readonly="readonly" />
    </Form.Group>
    <h2>Address</h2>
    <Form.Group controlId="formAddress1">
      <Form.Control type="text" placeholder="Address Line 1" />
    </Form.Group>

    <Form.Group controlId="formAddress2">
      <Form.Control type="text" placeholder="Address Line 2" />
    </Form.Group>

    <Form.Group controlId="formCity">
      <Form.Control type="text" placeholder="City" />
    </Form.Group>

    <select>
      <option value="USA">USA</option>
      <option value="CA">Canada</option>
    </select>

    <select>
      <option value="State / Province">State / Province</option>
    </select>
    <Form.Group controlId="forZipCode">
      <Form.Control type="text" placeholder="ZipCode" />
    </Form.Group>

    <h2>Reason for Reimbursement Request</h2>
    <select>
      <option value="Reason">Reason</option>
    </select>
    <Form.Group controlId="formReasona">
      <Form.Control type="text" placeholder="Reason Details" />
    </Form.Group>

    
      <Link to="/section2">
        <Button>Next</Button>
      </Link>
  </div>
);


export default Section1;
