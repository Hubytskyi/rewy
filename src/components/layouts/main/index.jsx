import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Header from '../../templates/header';

const MainLayout = () => {

  const [path, setPath] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname)
    }
  }, [])

  return (
    <Box>
      <Header path={path}/>
      Content
    </Box>
  );
};

export default MainLayout;
