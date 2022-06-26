import { graphql, useStaticQuery } from "gatsby"

const useCourseDetailsQuery = () => (
  useStaticQuery(graphql`
    query CourseDetailsQuery {
      markdownRemark(frontmatter: {templateKey: {eq: "course-details"}}) {
        html
      }
    }
  `)
);

export default useCourseDetailsQuery;