import React, { useState } from 'react';
import { Container, CssBaseline, Button } from '@mui/material';
import Form from './Component/Form';
import List from './Component/List';

function App() {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (formData) => {
    if (editingIndex === null) {
      setData([...data, formData]);
    } else {
      data[editingIndex] = formData;
      setData([...data]);
      setEditingIndex(null);
      setEditData(null);
    }

    // After submitting the form, show the List
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData(data[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <CssBaseline />

      {showForm ? (
        <Form onSubmit={handleSubmit} editData={editData} />
      ) : (
        <List data={data} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {!showForm && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm(true)}
          style={{ marginTop: '20px' }}
        >
          Show Form
        </Button>
      )}
    </Container>
  );
}

export default App;
