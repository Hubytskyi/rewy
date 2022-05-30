import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import LogoImg from '../../../assets/images/logo.svg';
import { Link } from 'gatsby';
import { makeStyles } from '@mui/styles';
import Nav from './nav';
import { headerHeight } from '../../../constants/header.const';
import HeaderBackdrop from './backdrop';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
  },
  logo: {
    height: 31,
    margin: "23.5px 0"
  },
})

const Header = ({path}) => {

  const classes = useStyles();
  const [isHover, setIsHover] = useState(false)



  return (
    <Box component={'header'} height={headerHeight}>
      <Container maxWidth={'lg'}>
        <Box className={classes.wrapper}>
          <Box>
            {path === "/"
              ? <img className={classes.logo} src={LogoImg} alt="policybazaar" />
              : <Link to={"/"}>
                <img className={classes.logo} src={LogoImg} alt="policybazaar" />
              </Link>
            }
          </Box>
          <Nav />
          <Box>Sign In</Box>
        </Box>
      </Container>
      {isHover && <HeaderBackdrop/>}
    </Box>
  );
};

export default Header;