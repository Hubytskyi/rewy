import theme from './theme/theme.const';
import bgImage from '../assets/images/home-page.svg';

const styles = {
  section: {
    height: {
      xs: `calc(100vh - 50px)`,
      lg: `calc(100vh - 78px)`,
    },
    backgroundColor: theme.palette.grey["200"],
    display: 'flex',
    flexGrow: '1',
    padding: {
      xs: '32px 0',
      md: 8,
    },
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'top -75px right -180px',
    backgroundRepeat: 'no-repeat',
  },

  title: {
    marginBottom: 5,
  }
}

export default styles;