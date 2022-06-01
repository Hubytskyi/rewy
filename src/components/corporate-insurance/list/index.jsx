import React, { useState, useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Box } from '@mui/material';
import PaperWrapper from '../../Common/paper';
import styles from './styles';
import CorporateInsuranceCategories from '../categories';
import CorporateInsuranceFilter from '../filter';

const CorporateInsuranceList = () => {

    const {allMarkdownRemark} = useCorporateInsuranceQuery();

    const [categories, setCategories] = useState({});

    const handleChange = (value, category) => {
      setCategories(prev => ({
        ...prev,
        [category]: value
      }));
    };

    const refreshFilter = () => {
      setCategories({});
    };

    return (
      <Box sx={styles.section}>
        <CorporateInsuranceFilter allMarkdownRemark={allMarkdownRemark} categories={categories}
                                  refreshFilter={refreshFilter} handleChange={handleChange}/>
        <Box sx={styles.wrapper}>
          {allMarkdownRemark?.edges?.map((item, i) => {
            if (Object.values(categories).every(el => item.node.frontmatter.subcategories.list.indexOf(el) !== -1)) {
              return (
                <Box sx={styles.item}>
                  <Link to={item.node.frontmatter.path} key={i}>
                    <PaperWrapper {...item.node.frontmatter} />
                  </Link>
                </Box>
              );
            }
          })}
        </Box>
      </Box>
    );
  }
;

export default CorporateInsuranceList;

export const useCorporateInsuranceQuery = () => (
  useStaticQuery(graphql`
    query CorporateInsuranceQuery {
      allMarkdownRemark(
        filter: {frontmatter: {collectionType: {eq: "corporate-insurance"}}}
      ) {
        group(field: frontmatter___type) {
          fieldValue
        }
        edges {
          node {
            frontmatter {
              title
              image
              alt
              path
              subcategories {
                list
              }
            }
          }
        }
      }
    }
  `)
);
