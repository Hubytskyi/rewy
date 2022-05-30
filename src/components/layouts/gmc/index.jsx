import React, { useEffect, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Header from '../../templates/gmc/header';
import theme from '../../../styles/theme/theme.const';
import GMCForm from '../../templates/gmc/footer';

const GMCLayout = ({children, headerType}) => {

  const [path, setPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box minHeight={'100vh'} display={'flex'} flexDirection={'column'}>
        <Header path={path} type={headerType}/>
        <Box flexGrow={'1'} display={'flex'} flexDirection={'column'}>
          {children}
        </Box>
        <GMCForm />
      </Box>
    </ThemeProvider>
  );
};

export default GMCLayout;
