import React from 'react';
import GMCLayout from '../components/layouts/gmc';
import CorporateInsuranceList from '../components/corporate-insurance/list';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Container, Typography } from '@mui/material';
import styles from '../styles/sme.styles';
import theme from '../styles/theme/theme.const';

const SME = () => {

  const {markdownRemark} = useSMEQuery();

  return (
    <GMCLayout>
      <Box sx={styles.section} component={'section'}>
        <Container maxWidth={'xl'}>
          <Box sx={styles.title}>
            <Typography variant={'h1'} color={theme.palette.primary.dark}>{markdownRemark.frontmatter.title}</Typography>
          </Box>
          <CorporateInsuranceList />
        </Container>
      </Box>
    </GMCLayout>
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
