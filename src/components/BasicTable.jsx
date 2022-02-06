import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import passangers from '../data/passengers.json'



export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>airline name</TableCell>
            <TableCell>logo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>slogan</TableCell>
            <TableCell>website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {passangers.map(passanger => (
            <TableRow
              key={passanger._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {passanger.airline.name}
              </TableCell>
              <TableCell>
                <Avatar alt="Remy Sharp" src={passanger.airline.logo} />
              </TableCell>
              <TableCell>{passanger.name}</TableCell>
              <TableCell>{passanger.airline.slogan}</TableCell>
              <TableCell>
                    <Link href={passanger.airline.website}>{passanger.airline.website}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
