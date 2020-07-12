import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import styled from 'styled-components'


const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data;
  return (
    <Layout>

    <Hero home= "true" img={data.book.childImageSharp.fluid}>
      <Header>
        <div className="center">
        <article className="info">
          <h4>ศาสนพิธีเมื่อพันกว่าปี กำลังท้าทายวิทยาศาสตร์ในอนาคต ทว่า..หลายคนต้องสังเวยด้วยชีวิต</h4>
          <h3>ครั้งแรกในการพบกันของนักดาราศาสตร์กับนักโบราณคดี เพื่อหยุดยั้งโศกนาฏกรรมครั้งสำคัญของโลก</h3>
          <h1>สุดแสงสูญ</h1>
          <h2>วิน รวีร์</h2>
        </article>
        </div>
      </Header>
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

const Header = styled.section`

  .center {
    width: 80vw;
    max-width: 1100px;
    margin: auto;
  }
  
  .info {
    margin-top: 3rem;
    display: none;
  }
  
  @media screen and (min-width: 750px) {
    .info {
      display:block;
      margin:auto;
      text-align: center;
      width: 100%;
  
    }
    .center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      /* margin-top: 0; */
    }

    .info h1 {
    font-family:var(--ff-secondary);
    font-size: 2.8rem;
    color: #4c1929;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
    line-height:1;
    }
    .info h2 {
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
    }
    .info h3 {
    font-size: 1.3rem;
    font-weight: bold;
    /* font-style: italic; */
    line-height: 2;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
    } 
    .info h4 {
    font-size: 0.9rem;
    font-weight: bold;
    font-style: italic;
    line-height: 2;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;
    }

  
  }

  @media screen and (min-width: 992px) {
    .image {
      margin: 7rem;
    }
    .info h1 {
      font-size: 3.3rem;
      margin-bottom: 2.5rem;
    }
    .info h2 {
      font-size: 2.2rem;
      margin-bottom: 2rem;
    }
    .info h3 {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
    .info h4 {
      font-size: 1.2rem;
      margin-bottom: 1.6rem;
    }
  }
  

    @media screen and (min-width: 1200px) {
    .center {
      width: 100vw;
      max-width: 1170px;
    }
  }
  
  `