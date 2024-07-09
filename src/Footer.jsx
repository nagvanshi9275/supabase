
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
              <IconButton component="a" href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://linkedin.com" target="_blank" sx={{ color: 'white' }}>
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
              1234 PaintCraft Lane <br />
              City, State, ZIP <br />
              Email: info@paintcraft.com <br />
              Phone: (123) 456-7890
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







