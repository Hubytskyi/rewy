import { graphql, useStaticQuery } from 'gatsby';

const useCorporateInsuranceSubCategoriesQuery = () => {
  const data = useStaticQuery(graphql`
    query CorporateInsuranceSubCategories {
      allMarkdownRemark {
        group(field: frontmatter___subcategories___list) {
          fieldValue
          group(field: frontmatter___subcategories___parentCategory) {
            fieldValue
          }
        }
      }
    }
  `)

  return data;
}

export default useCorporateInsuranceSubCategoriesQuery;