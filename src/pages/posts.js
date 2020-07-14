import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import State from '../components/state'


const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data;
  return (
    <Layout>

    <Hero home= "true" img={data.book.childImageSharp.fluid}>
      <State 
          img={data.stateImage.childImageSharp.fluid}
              // infoA = "ศาสนพิธีเมื่อพันกว่าปี กำลังท้าทายวิทยาศาสตร์ในอนาคต ทว่า..หลายคนต้องสังเวยด้วยชีวิต"
              infoB = "The starry messenger เป็นหนังสือที่สร้างชื่อเสียงให้กับกาลิเลโออย่างมาก แต่ไม่มีใครรู้ว่าเขาซ่อนฉบับแก้ไขไว้อีกฉบับ เขาอาจค้นพบบางอย่างที่เสี่ยงต่อชีวิตในยุคนั้น ทว่า มันกลับมามีผลต่อทุกชีวิตในอีกสี่ร้อยปีต่อมา"
              titleA = "สุดแสงสูญ"
              titleB = "วิน รวีร์"
          >
          <a href="https://www.mebmarket.com/" className="btn-danger">
          ทดลองอ่าน
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
book:file(relativePath:{eq:"wall-hero.jpg"}) {
  childImageSharp {
    fluid(quality:95, maxWidth:4160){
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  
}
stateImage: file(relativePath: {eq: "hero-p2.jpg"}) {
  childImageSharp {
    fluid(maxWidth:600) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt(truncate: true, pruneLength:200)
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

