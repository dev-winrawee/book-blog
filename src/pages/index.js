import React from 'react'
import {Link} from 'gatsby'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import State from '../components/state'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'



export default ({data}) => (

  <Layout>

      <Hero home= "true" img={data.book.childImageSharp.fluid}>
        <State 
            infoA = "ศาสนพิธีเมื่อพันกว่าปี กำลังท้าทายวิทยาศาสตร์ในอนาคต ทว่า..หลายคนต้องสังเวยด้วยชีวิต"
            infoB = "ครั้งแรกในการพบกันของนักดาราศาสตร์กับนักโบราณคดี เพื่อหยุดยั้งโศกนาฏกรรมครั้งสำคัญของโลก"
            titleA = "สุดแสงสูญ"
            titleB = "วิน รวีร์"
        >
        <a href="https://www.mebmarket.com/" className="btn-danger">
          ทดลองอ่าน
        </a>

        </State>
      </Hero>
  </Layout>


)

export const query = graphql`
query {
book:file(relativePath:{eq:"hero2.png"}) {
  childImageSharp {
    fluid(quality:95, maxWidth:4160) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  
}
}
`