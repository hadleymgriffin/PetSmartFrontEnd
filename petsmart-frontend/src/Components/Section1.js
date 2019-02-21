import React from 'react'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
const Section1 = () => (
    <div>
    <Form>
        <h2>
    Information 
  </h2>
  <Form.Group controlId="formEmployeeName">
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>

<Form.Group controlId="formEmployeeId">
    <Form.Label>Employee Id</Form.Label>
    <Form.Control type="text" placeholder="123456" readonly="readonly" />
  </Form.Group>
<h2>
    Address 
  </h2>
  <Form.Group controlId="formAddress1">
    <Form.Control type="text" placeholder="Address Line 1" />
  </Form.Group>
  <Form.Group controlId="formAddress2">
    <Form.Control type="text" placeholder="Address Line 2" />
  </Form.Group>
  
  <select>
  <option value="USA">USA</option>
  <option value="CA">Canada</option>
</select>

  </Form>
</div>
)


export default Section1