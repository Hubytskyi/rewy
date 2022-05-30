import React from 'react';
import { Box, Container } from '@mui/material';
import PaperWrapper from '../../common/paper';
import styles from './styles';
import { graphql, Link, useStaticQuery } from 'gatsby';

const CorporateInsuranceList = () => {

  const {allMarkdownRemark} = useCorporateInsuranceQuery();

  return (
    <Box sx={styles.wrapper}>
      {allMarkdownRemark?.edges?.map((item, i) => (
        <Link to={item.node.frontmatter.path} key={i}>
          <PaperWrapper {...item.node.frontmatter} />
        </Link>
      ))}
    </Box>
  );
};

export default CorporateInsuranceList;

export const useCorporateInsuranceQuery = () => (
  useStaticQuery(graphql`
    query CorporateInsuranceQuery {
      allMarkdownRemark(
        filter: {frontmatter: {collectionType: {eq: "corporate-insurance"}}}
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              alt
              path
            }
          }
        }
      }
    }
  `)
);
