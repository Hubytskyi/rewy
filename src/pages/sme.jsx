import React from 'react';
import CorporateInsuranceList from '../components/corporate-insurance/list';
import { Box, Container, Typography, ThemeProvider } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import styles from '../styles/sme.styles';
import theme from '../styles/theme/theme.const';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';

const SME = () => {

  const {markdownRemark} = useSMEQuery();

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Box sx={styles.section} component={'section'}>
          <Container maxWidth={'xl'}>
            <Box sx={styles.titleWrapper}>
              <Typography className={styles.title} variant={'h1'} color={theme.palette.primary.dark}>
                {markdownRemark.frontmatter.title}
              </Typography>
            </Box>
            <CorporateInsuranceList/>
          </Container>
        </Box>
        <Footer/>
      </ThemeProvider>
    </Layout>
  );
};

export default SME;

export const useSMEQuery = () => (
  useStaticQuery(graphql`
    query SMEQuery {
      markdownRemark(frontmatter: {templateKey: {eq: "sme-page"}}) {
        frontmatter {
          title
        }
      }
    }
  `)
);