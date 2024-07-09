import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Form from './Form'; // Assuming 'Form.jsx' file is in the same directory
import Thanku from './Thanku';

export default function Content() {
  const [show, setShow] = React.useState(false);
  const [invisible, setInvisible] = React.useState(true);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url('https://i.postimg.cc/k4KJxCHK/6-Sophisticated-Dark-Bedroom-Themes-for-Chic-and-Comfortable-Homes-333-Art-Images.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px', // Adjust padding as needed
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)', // Example of an irregular shape
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Left column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: '20px' }}>
            <img
              src="https://i.postimg.cc/7YsgSRKL/painting-india.jpg"
              alt="Logo 1"
              style={{
                width: 50,
                height: 50,
                marginRight: '20px', // Add margin between logos if needed
              }}
            />
            <img
              src="https://i.postimg.cc/7YsgSRKL/painting-india.jpg"
              alt="Logo 2"
              style={{
                width: 50,
                height: 50,
              }}
            />
          </Box>
          <Typography variant="h3">
            Get. Set. Start <br /> Your Paint Journey!
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginTop: '20px' }}>
            Introducing PaintCraft, a new painting service by Aditya Birla Group. <br />
            We plan around your home, keeping up with your ideas and bringing in our expertise.
          </Typography>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={6}>
          {invisible && (
            <Form
              show={show}
              setShow={setShow}
              setInvisible={setInvisible}
            />
          )}
          {!invisible && <Thanku />}
        </Grid>
      </Grid>
    </Box>
  );
}
