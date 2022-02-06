import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

export default function BasicTableRow({
  airLineName,
  airLineLogo,
  passengerName,
  airLineSlogan,
  airLineWebsite,
}) {
  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {airLineName}
        </TableCell>
        <TableCell>
          <Avatar alt={airLineName} src={airLineLogo} />
        </TableCell>
        <TableCell>{passengerName}</TableCell>
        <TableCell>{airLineSlogan}</TableCell>
        <TableCell>
          <Link href={airLineWebsite}>{airLineWebsite}</Link>
        </TableCell>
      </TableRow>
    </>
  );
}
