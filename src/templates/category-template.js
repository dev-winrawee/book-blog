import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

export const query = graphql`
query getCategories($category: String) {
  categories: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
    nodes {
      excerpt
      frontmatter {
        title
        author
        category
        date(formatString: "MMMM Do,YYYY")
        slug
        readTime
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`


const CategoryTemplate = (props) => {
  const {pageContext:{category}} = props;
  const {data:{categories:{nodes:posts}}} = props;
 return (
    <Layout>
      <div style={{height: "8rem"}}></div>
      <Posts posts={posts} title={`category/${category}`}/>
    </Layout>
  )
}



export default CategoryTemplate
