const styles = {
  section: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row'
    }
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: {
      xl: 800,
    },
    marginLeft: -3,
    marginRight: -3
  },

  item: {
    width: {
      xs: '100%',
      sm: '50%',
      md: 'auto'
    }
  },
}

export default styles;