import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicTableRow from './TableRow';

import passengers from '../data/passengers.json';
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Airline name</TableCell>
            <TableCell>Logo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Slogan</TableCell>
            <TableCell>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {passengers.map(
            ({
              _id,
              airline: { name, logo, slogan, website },
              name: passengerName,
            }) => (
              <BasicTableRow
                key={_id}
                airLineName={name}
                airLineLogo={logo}
                passengerName={passengerName}
                airLineSlogan={slogan}
                airLineWebsite={website}
              />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
