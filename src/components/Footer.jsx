import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <Typography fontSize="50px">🔥</Typography>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '38px', xs: '30px' } }} mt="41px" textAlign="center" pb="40px">“Discipline is choosing between what you want now and what you want most.”
</Typography>
  </Box>
);

export default Footer;