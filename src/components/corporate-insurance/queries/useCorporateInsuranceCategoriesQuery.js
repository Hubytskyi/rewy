import { graphql, useStaticQuery } from 'gatsby';

const useCorporateInsuranceCategoriesQuery = () => {
  const data = useStaticQuery(graphql`
    query CorporateInsuranceCategories {
      allMarkdownRemark {
        group(field: frontmatter___category___name) {
          fieldValue
          group(field: frontmatter___category___parentType) {
            fieldValue
          }
        }
      }
    }
  `)

  return data;
}

export default useCorporateInsuranceCategoriesQuery;