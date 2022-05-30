import React from 'react';
import { Box } from '@mui/material';
import {
  defaultMenu,
  navRenewYourPolicy,
  navFileAClaim,
  navSupport,
} from '../../../../../constants/nav.const';
import NavItem from './item';

const NavList = () => {
  return (
    <Box component={'ul'} display={'flex'} alignItems={'center'}>
      {defaultMenu.map((item) => (
        <NavItem {...item} />
      ))}
      <NavItem {...navRenewYourPolicy} />
      <NavItem {...navFileAClaim} />
      <NavItem {...navSupport} />
    </Box>
  );
};

export default NavList;