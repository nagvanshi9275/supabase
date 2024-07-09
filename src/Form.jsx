import React from 'react';
import { Box, Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gdmntkkpdjcbqicyapxn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkbW50a2twZGpjYnFpY3lhcHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2ODgyMDQsImV4cCI6MjAyNjI2NDIwNH0.KjlW38TMJoqig7Cvlkevv9fASQa57rXh71BPFLKz_p0';

export const supabase = createClient(supabaseUrl, supabaseKey);

const cities = ['Gurgaon', 'Noida', 'Bangalore', 'Jaipur'];

export default function Form({ show, setShow, setInvisible }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      fullName: event.target.fullname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      city: event.target.city.value,
    };

    try {
      const { data, error } = await supabase
        .from('users') // Replace with your table name
        .insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        setInvisible(false); // Hide the form
        setShow(true); // Show the thank you message
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Card sx={{ minWidth: 275, width: '100%', maxWidth: 400, margin: '0 10px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            User Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="fullname"
              name="fullname"
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="city-label">Select City</InputLabel>
              <Select
                labelId="city-label"
                id="city"
                name="city"
                label="Select City"
                defaultValue=""
                fullWidth
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
