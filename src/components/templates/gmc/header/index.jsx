import React from 'react';
import { Link } from 'gatsby';
import { Box, Container, Typography } from '@mui/material';
import LogoImg from '../../../../assets/images/logo.svg';
import HeadphoneImg from '../../../../assets/images/tollfree.svg';
import theme from '../../../../styles/theme/theme.const';

const styles = {
  header: {
    backgroundColor: theme.palette.common.white,
  },

  logo: {
    height: 31,
    margin: '23.5px 0',
  },

  headphone: {
    marginRight: 4,
  },

  phone: {
    fontWeight: 500,
  },
};

const Header = ({path, type}) => {

  return (
    <Box component={'header'} sx={styles.header} className={`header-${type}`}>
      <Container maxWidth={'xl'}>
        <Box display={'flex'} justifyContent={{xs: 'flex-end', lg: 'space-between'}} alignItems={'center'}>
          <Box display={{xs: 'none', lg: 'block'}}>
            {path === '/'
              ? <img style={styles.logo} src={LogoImg} alt="policybazaar" />
              : <Link to={'/'}>
                <img style={styles.logo} src={LogoImg} alt="policybazaar" />
              </Link>
            }
          </Box>
          <Box display={'flex'} alignItems={'center'} padding={'15px 0'}>
            <img style={styles.headphone} src={HeadphoneImg} alt="headphone" />
            <Typography variant={'caption'}>Sales & Services:&nbsp;</Typography>
            <Typography variant={'caption'}><a style={styles.phone}
                                               href="tel:18005723918">1800-572-3918</a></Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;