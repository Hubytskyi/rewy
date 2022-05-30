import React, { useState, useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Box } from '@mui/material';
import PaperWrapper from '../../Common/paper';
import styles from './styles';

const CorporateInsuranceList = () => {

  const {allMarkdownRemark} = useCorporateInsuranceQuery();
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  const allTags = allMarkdownRemark.edges
    .map((markdownRemark) => markdownRemark.node.frontmatter.tags)
    .reduce((acc, cur) => {
      return [...acc, ...cur];
    }, []);

  const handleSelectedTag = (tag) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    setTags(allTags.filter((value, index, self) => self.indexOf(value) === index));
  }, []);

  return (
    <Box>
      <Box sx={styles.tags}>
        <Box sx={[styles.tag, selectedTag === '' && styles.active]} onClick={() => {
          handleSelectedTag('');
        }}>all</Box>
        {tags.map((tag) => (
          <Box
            onClick={() => {
              handleSelectedTag(tag);
            }}
            sx={[styles.tag, selectedTag === tag && styles.active]} key={tag}>{tag}</Box>
        ))}
      </Box>
      <Box sx={styles.wrapper}>
        {allMarkdownRemark?.edges?.map((item, i) => {
            if (item.node.frontmatter.tags.includes(selectedTag)) {
              return (
                <Box sx={styles.item}>
                  <Link to={item.node.frontmatter.path} key={i}>
                    <PaperWrapper {...item.node.frontmatter} />
                  </Link>
                </Box>
              );
            }
            if (selectedTag === '') {
              return (
                <Box sx={styles.item}>
                  <Link to={item.node.frontmatter.path} key={i} style={styles.item}>
                    <PaperWrapper {...item.node.frontmatter} />
                  </Link>
                </Box>
              );
            }
          }
        )}
      </Box>
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
              tags
            }
          }
        }
      }
    }
  `)
);
