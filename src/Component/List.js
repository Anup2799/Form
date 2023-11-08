// List.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@mui/material';

const List = ({ data, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} style={tableContainerStyle}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={6}> {/* Span all 6 columns */}
              <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Registered User Data
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>Index</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>Email</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>Mobile No</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>Gender</Typography>
            </TableCell>
            <TableCell align="center"> {/* Align the "Actions" heading to the right */}
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: '16px' }}>{index + 1}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: '16px' }}>{item.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: '16px' }}>{item.email}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: '16px' }}>{item.mobile}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: '16px' }}>{item.gender}</Typography>
              </TableCell>
              <TableCell style={actionsCellStyle}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableContainerStyle = {
  margin: '20px',
};

const actionsCellStyle = {
  display: 'flex',
  justifyContent: 'space-around',
};

export default List;
