
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '20px 0',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Social Media Links */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
              <IconButton component="a" href="https://www.facebook.com/profile.php?id=100085099929716&mibextid=ZbWKwL" target="_blank" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
  
              <IconButton component="a" href="https://www.instagram.com/top_painting_india?igsh=bXlvaXUyZmhjeWJ1" target="_blank" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://www.linkedin.com/in/top-painting-india/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          {/* Company Address */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
            Shop No 1, Dharam Palace, Mahatma Gandhi Rd, opposite axis bank, Ghatkopar, Ghatkopar West <br />
              Mumbai, Maharashtra, 400086 <br />
              Email: toppaintingindia19@gmail.com <br />
              Phone: 9969583396
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} PaintCraft. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;







