const styles = {
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

  tags: {
    display: 'flex',
    padding: '16px 0',
    overflowX: 'auto'
  },

  tag: {
    marginRight: '20px',
    cursor: 'pointer',
    color: '#6b6b84',
    whiteSpace: 'nowrap',
  },

  active: {
    color: '#000000',
    fontWeight: 600,
    textDecoration: 'underline',
  }
}

export default styles;