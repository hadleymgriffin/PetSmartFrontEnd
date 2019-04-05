import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
//import Button from "react-bootstrap/Button";
import Section2 from './Section2'
import Section1 from './Section1'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


/*const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});*/

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

let id = 0;
function createData(Date, Origin, Destination, Select, MilesKm, Rate, Price, Reason) {
    id += 1;
    return { id, Date, Origin, Destination, Select, MilesKm, Rate, Price, Reason };
}

const rows = [
    createData(
        <Form.Control type="text" placeholder="DD/MM/YYYY" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        (<select>
            <option value="Miles">Miles</option>
            <option value="Kilometers">Kilometers</option>
        </select>),
        <Form.Control type="num" placeholder="#####.##" />,
        "$0.58/mile or $0.93/km",
        0.00,
        (<select>
            <option value="Select Reason">Select Reason</option>
            <option value="Area Trainer Summit">Area Trainer Summit</option>
            <option value="Canada ONLY - Safety Shoes">Canada ONLY - Safety Shoes</option>
            <option value="Conference Expenses">Conference Expenses</option>
            <option value="District Meeting">District Meeting</option>
            <option value="GetSmart Training">GetSmart Training</option>
            <option value="Leadership Meeting">Leadership Meeting</option>
            <option value="License Renewal Fees">License Renewal Fees</option>
            <option value="Membership Fees">Membership Fees</option>
            <option value="New Store Hiring">New Store Hiring</option>
            <option value="New Store Setup/Store Pre-opening Expenses">New Store Setup/Store Pre-opening Expenses</option>
            <option value="Other- Provide details in line below">Other- Provide details in line below</option>
            <option value="P-Card can't be used at Costco">P-Card can't be used at Costco</option>
            <option value="P-Card Compromised">P-Card Compromised</option>
            <option value="P-Card Misplaced">P-Card Misplaced</option>
            <option value="Pet Training Accreditation">Pet Training Accreditation</option>
            <option value="Pet Training Coverage at another store">Pet Training Coverage at another store</option>
            <option value="Pet Training Visits">Pet Training Visits</option>
            <option value="Recognition/Contests">Recognition/Contests</option>
            <option value="Salon Coverage at another store">Salon Coverage at another store</option>
            <option value="Salon/Grooming Academy Training">Salon/Grooming Academy Training</option>
            <option value="Stationary & Supplies">Stationary & Supplies</option>
            <option value="Store Audit Visits">Store Audit Visits</option>
            <option value="Store Coverage at another store">Store Coverage at another store</option>
            <option value="Store Leader Meeting">Store Leader Meeting</option>
            <option value="Store Management Coverage at another store">Store Management Coverage at another store</option>
            <option value="Store Visits">Store Visits</option>
            <option value="Team Building Event">Team Building Event</option>
            <option value="Telephone (Home office, Cell, Fax, Internet)">Telephone (Home office, Cell, Fax, Internet)</option>
            <option value="Vet Visits">Vet Visits</option>
            <option value="Visa/Passport Fees">Visa/Passport Fees</option>
        </select>)),
    createData(
        <Form.Control type="text" placeholder="DD/MM/YYYY" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        (<select>
            <option value="Miles">Miles</option>
            <option value="Kilometers">Kilometers</option>
        </select>),
        <Form.Control type="num" placeholder="#####.##" />,
        "$0.58/mile or $0.93/km",
        0.00,
        (<select>
            <option value="Select Reason">Select Reason</option>
            <option value="Area Trainer Summit">Area Trainer Summit</option>
            <option value="Canada ONLY - Safety Shoes">Canada ONLY - Safety Shoes</option>
            <option value="Conference Expenses">Conference Expenses</option>
            <option value="District Meeting">District Meeting</option>
            <option value="GetSmart Training">GetSmart Training</option>
            <option value="Leadership Meeting">Leadership Meeting</option>
            <option value="License Renewal Fees">License Renewal Fees</option>
            <option value="Membership Fees">Membership Fees</option>
            <option value="New Store Hiring">New Store Hiring</option>
            <option value="New Store Setup/Store Pre-opening Expenses">New Store Setup/Store Pre-opening Expenses</option>
            <option value="Other- Provide details in line below">Other- Provide details in line below</option>
            <option value="P-Card can't be used at Costco">P-Card can't be used at Costco</option>
            <option value="P-Card Compromised">P-Card Compromised</option>
            <option value="P-Card Misplaced">P-Card Misplaced</option>
            <option value="Pet Training Accreditation">Pet Training Accreditation</option>
            <option value="Pet Training Coverage at another store">Pet Training Coverage at another store</option>
            <option value="Pet Training Visits">Pet Training Visits</option>
            <option value="Recognition/Contests">Recognition/Contests</option>
            <option value="Salon Coverage at another store">Salon Coverage at another store</option>
            <option value="Salon/Grooming Academy Training">Salon/Grooming Academy Training</option>
            <option value="Stationary & Supplies">Stationary & Supplies</option>
            <option value="Store Audit Visits">Store Audit Visits</option>
            <option value="Store Coverage at another store">Store Coverage at another store</option>
            <option value="Store Leader Meeting">Store Leader Meeting</option>
            <option value="Store Management Coverage at another store">Store Management Coverage at another store</option>
            <option value="Store Visits">Store Visits</option>
            <option value="Team Building Event">Team Building Event</option>
            <option value="Telephone (Home office, Cell, Fax, Internet)">Telephone (Home office, Cell, Fax, Internet)</option>
            <option value="Vet Visits">Vet Visits</option>
            <option value="Visa/Passport Fees">Visa/Passport Fees</option>
        </select>)),
    createData(
        <Form.Control type="text" placeholder="DD/MM/YYYY" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        (<select>
            <option value="Miles">Miles</option>
            <option value="Kilometers">Kilometers</option>
        </select>),
        <Form.Control type="num" placeholder="#####.##" />,
        "$0.58/mile or $0.93/km",
        0.00,
        (<select>
            <option value="Select Reason">Select Reason</option>
            <option value="Area Trainer Summit">Area Trainer Summit</option>
            <option value="Canada ONLY - Safety Shoes">Canada ONLY - Safety Shoes</option>
            <option value="Conference Expenses">Conference Expenses</option>
            <option value="District Meeting">District Meeting</option>
            <option value="GetSmart Training">GetSmart Training</option>
            <option value="Leadership Meeting">Leadership Meeting</option>
            <option value="License Renewal Fees">License Renewal Fees</option>
            <option value="Membership Fees">Membership Fees</option>
            <option value="New Store Hiring">New Store Hiring</option>
            <option value="New Store Setup/Store Pre-opening Expenses">New Store Setup/Store Pre-opening Expenses</option>
            <option value="Other- Provide details in line below">Other- Provide details in line below</option>
            <option value="P-Card can't be used at Costco">P-Card can't be used at Costco</option>
            <option value="P-Card Compromised">P-Card Compromised</option>
            <option value="P-Card Misplaced">P-Card Misplaced</option>
            <option value="Pet Training Accreditation">Pet Training Accreditation</option>
            <option value="Pet Training Coverage at another store">Pet Training Coverage at another store</option>
            <option value="Pet Training Visits">Pet Training Visits</option>
            <option value="Recognition/Contests">Recognition/Contests</option>
            <option value="Salon Coverage at another store">Salon Coverage at another store</option>
            <option value="Salon/Grooming Academy Training">Salon/Grooming Academy Training</option>
            <option value="Stationary & Supplies">Stationary & Supplies</option>
            <option value="Store Audit Visits">Store Audit Visits</option>
            <option value="Store Coverage at another store">Store Coverage at another store</option>
            <option value="Store Leader Meeting">Store Leader Meeting</option>
            <option value="Store Management Coverage at another store">Store Management Coverage at another store</option>
            <option value="Store Visits">Store Visits</option>
            <option value="Team Building Event">Team Building Event</option>
            <option value="Telephone (Home office, Cell, Fax, Internet)">Telephone (Home office, Cell, Fax, Internet)</option>
            <option value="Vet Visits">Vet Visits</option>
            <option value="Visa/Passport Fees">Visa/Passport Fees</option>
        </select>)),
    createData(
        <Form.Control type="text" placeholder="DD/MM/YYYY" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        (<select>
            <option value="Miles">Miles</option>
            <option value="Kilometers">Kilometers</option>
        </select>),
        <Form.Control type="num" placeholder="#####.##" />,
        "$0.58/mile or $0.93/km",
        0.00,
        (<select>
            <option value="Select Reason">Select Reason</option>
            <option value="Area Trainer Summit">Area Trainer Summit</option>
            <option value="Canada ONLY - Safety Shoes">Canada ONLY - Safety Shoes</option>
            <option value="Conference Expenses">Conference Expenses</option>
            <option value="District Meeting">District Meeting</option>
            <option value="GetSmart Training">GetSmart Training</option>
            <option value="Leadership Meeting">Leadership Meeting</option>
            <option value="License Renewal Fees">License Renewal Fees</option>
            <option value="Membership Fees">Membership Fees</option>
            <option value="New Store Hiring">New Store Hiring</option>
            <option value="New Store Setup/Store Pre-opening Expenses">New Store Setup/Store Pre-opening Expenses</option>
            <option value="Other- Provide details in line below">Other- Provide details in line below</option>
            <option value="P-Card can't be used at Costco">P-Card can't be used at Costco</option>
            <option value="P-Card Compromised">P-Card Compromised</option>
            <option value="P-Card Misplaced">P-Card Misplaced</option>
            <option value="Pet Training Accreditation">Pet Training Accreditation</option>
            <option value="Pet Training Coverage at another store">Pet Training Coverage at another store</option>
            <option value="Pet Training Visits">Pet Training Visits</option>
            <option value="Recognition/Contests">Recognition/Contests</option>
            <option value="Salon Coverage at another store">Salon Coverage at another store</option>
            <option value="Salon/Grooming Academy Training">Salon/Grooming Academy Training</option>
            <option value="Stationary & Supplies">Stationary & Supplies</option>
            <option value="Store Audit Visits">Store Audit Visits</option>
            <option value="Store Coverage at another store">Store Coverage at another store</option>
            <option value="Store Leader Meeting">Store Leader Meeting</option>
            <option value="Store Management Coverage at another store">Store Management Coverage at another store</option>
            <option value="Store Visits">Store Visits</option>
            <option value="Team Building Event">Team Building Event</option>
            <option value="Telephone (Home office, Cell, Fax, Internet)">Telephone (Home office, Cell, Fax, Internet)</option>
            <option value="Vet Visits">Vet Visits</option>
            <option value="Visa/Passport Fees">Visa/Passport Fees</option>
        </select>)),
    createData(
        <Form.Control type="text" placeholder="DD/MM/YYYY" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        <Form.Control type="text" placeholder="City, State/Province, Country" />,
        (<select>
            <option value="Miles">Miles</option>
            <option value="Kilometers">Kilometers</option>
        </select>),
        <Form.Control type="num" placeholder="#####.##" />,
        "$0.58/mile or $0.93/km",
        0.00,
        (<select>
            <option value="Select Reason">Select Reason</option>
            <option value="Area Trainer Summit">Area Trainer Summit</option>
            <option value="Canada ONLY - Safety Shoes">Canada ONLY - Safety Shoes</option>
            <option value="Conference Expenses">Conference Expenses</option>
            <option value="District Meeting">District Meeting</option>
            <option value="GetSmart Training">GetSmart Training</option>
            <option value="Leadership Meeting">Leadership Meeting</option>
            <option value="License Renewal Fees">License Renewal Fees</option>
            <option value="Membership Fees">Membership Fees</option>
            <option value="New Store Hiring">New Store Hiring</option>
            <option value="New Store Setup/Store Pre-opening Expenses">New Store Setup/Store Pre-opening Expenses</option>
            <option value="Other- Provide details in line below">Other- Provide details in line below</option>
            <option value="P-Card can't be used at Costco">P-Card can't be used at Costco</option>
            <option value="P-Card Compromised">P-Card Compromised</option>
            <option value="P-Card Misplaced">P-Card Misplaced</option>
            <option value="Pet Training Accreditation">Pet Training Accreditation</option>
            <option value="Pet Training Coverage at another store">Pet Training Coverage at another store</option>
            <option value="Pet Training Visits">Pet Training Visits</option>
            <option value="Recognition/Contests">Recognition/Contests</option>
            <option value="Salon Coverage at another store">Salon Coverage at another store</option>
            <option value="Salon/Grooming Academy Training">Salon/Grooming Academy Training</option>
            <option value="Stationary & Supplies">Stationary & Supplies</option>
            <option value="Store Audit Visits">Store Audit Visits</option>
            <option value="Store Coverage at another store">Store Coverage at another store</option>
            <option value="Store Leader Meeting">Store Leader Meeting</option>
            <option value="Store Management Coverage at another store">Store Management Coverage at another store</option>
            <option value="Store Visits">Store Visits</option>
            <option value="Team Building Event">Team Building Event</option>
            <option value="Telephone (Home office, Cell, Fax, Internet)">Telephone (Home office, Cell, Fax, Internet)</option>
            <option value="Vet Visits">Vet Visits</option>
            <option value="Visa/Passport Fees">Visa/Passport Fees</option>
        </select>)),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead color="red" textWhite>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Origin</TableCell>
                        <TableCell align="left">Destination</TableCell>
                        <TableCell align="left">Select</TableCell>
                        <TableCell align="left">Miles/Km</TableCell>
                        <TableCell align="left">Rate</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Reason</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.day}
                            </TableCell>
                            <TableCell align="left">{row.Date}</TableCell>
                            <TableCell align="left">{row.Origin}</TableCell>
                            <TableCell align="left">{row.Destination}</TableCell>
                            <TableCell align="left">{row.Select}</TableCell>
                            <TableCell align="left">{row.MilesKm}</TableCell>
                            <TableCell align="left">{row.Rate}</TableCell>
                            <TableCell align="left">{row.Price}</TableCell>
                            <TableCell align="left">{row.Reason}</TableCell>
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

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>PetSmart Expenditure Submittal Portal</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Section 3</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Mileage/Kilometer Worksheet - For Personal Cars ONLY</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead color="red" textWhite>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Origin</TableCell>
                                    <TableCell align="left">Destination</TableCell>
                                    <TableCell align="left">Select</TableCell>
                                    <TableCell align="left">Miles/Km</TableCell>
                                    <TableCell align="left">Rate</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Reason</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.day}
                                        </TableCell>
                                        <TableCell align="left">{row.Date}</TableCell>
                                        <TableCell align="left">{row.Origin}</TableCell>
                                        <TableCell align="left">{row.Destination}</TableCell>
                                        <TableCell align="left">{row.Select}</TableCell>
                                        <TableCell align="left">{row.MilesKm}</TableCell>
                                        <TableCell align="left">{row.Rate}</TableCell>
                                        <TableCell align="left">{row.Price}</TableCell>
                                        <TableCell align="left">{row.Reason}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <Link to="/section2">
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Back
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={5}>
                    <Form.Control type="text" placeholder="Digital Signature" />
                </Grid>
                <Grid item xs={3}>
                    <Link to="/end">
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Submit
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CenteredGrid);
