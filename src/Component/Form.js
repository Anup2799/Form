import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const formStyle = {
  width: '400px',
  margin: '0 auto', // Center the form horizontally
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  backgroundColor: '#f5f5f5',
};

const headerStyle = {
  textAlign: 'center',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  background: 'blue',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '20px',
};

const requiredFieldLabel = {
  display: 'flex',
  alignItems: 'center',
};

const requiredAsterisk = {
  color: 'red',
  marginLeft: '4px',
};

function Form({ onSubmit, editData }) {
  const [formData, setFormData] = useState({ name: '', email: '', mobileNo: '', gender: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.mobileNo) {
      newErrors.mobileNo = 'Mobile No is required';
    } else if (formData.mobileNo.length !== 10) {
      newErrors.mobileNo = 'Mobile No must be 10 digits';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({ name: '', email: '', mobileNo: '', gender: '' });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={formStyle}>
        <h2 style={headerStyle}>Register Form</h2>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label={
              <div style={requiredFieldLabel}>
                Name
                <span style={requiredAsterisk}>*</span>
              </div>
            }
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
            style={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label={
              <div style={requiredFieldLabel}>
                Email
                <span style={requiredAsterisk}>*</span>
              </div>
            }
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            style={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label={
              <div style={requiredFieldLabel}>
                Mobile No
                <span style={requiredAsterisk}>*</span>
              </div>
            }
            variant="outlined"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
            error={!!errors.mobileNo}
            helperText={errors.mobileNo}
            style={{ marginBottom: '15px' }}
          />
          <FormControl fullWidth style={{ marginBottom: '15px' }} error={!!errors.gender}>
            <InputLabel>
              <div style={requiredFieldLabel}>
                Gender
                <span style={requiredAsterisk}>*</span>
              </div>
            </InputLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={buttonStyle}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
