import React from 'react'
import Layout from '../components/Layout'
import State from '../components/state'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'


const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data;
  return (
    <Layout>

    <Hero home= "true" img={data.book.childImageSharp.fluid}>
      <State 
          infoA = "ศาสนพิธีเมื่อพันกว่าปี กำลังท้าทายวิทยาศาสตร์ในอนาคต ทว่า..หลายคนต้องสังเวยด้วยชีวิต"
          infoB = "ครั้งแรกในการพบกันของนักดาราศาสตร์กับนักโบราณคดี เพื่อหยุดยั้งโศกนาฏกรรมครั้งสำคัญของโลก"
          titleA = "สุดแสงสูญ"
          titleB = "วิน รวีร์"
      >
      <a href="https://www.mebmarket.com/" className="btn-danger">
        sample
      </a>

      </State>
    </Hero>
    <div style={{height:"5rem"}}> </div>
    <Posts posts={posts} title="เกร็ดความรู้ล่าสุด" />
    </Layout>
  )}

export default PostsPage



export const query = graphql`
query {
book:file(relativePath:{eq:"hero2.png"}) {
  childImageSharp {
    fluid(quality:95, maxWidth:4160) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  
}
allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
