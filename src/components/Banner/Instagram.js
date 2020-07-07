import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
//...GatsbyImageSharpFluid

export const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Instagram = () => {
  const data = useStaticQuery(query)
  const {allInstaNode:{nodes}} = data
  return <Wrapper>
    <a href="https://www.instagram.com/">
    <Title title="instagram" />
    <div className="images">
      {nodes.map((item,index) => {
        const {localFile:{childImageSharp:{fluid}}} = item;
        return <Image fluid={fluid} key={index} />

      })}
    </div>
    </a>
  </Wrapper>
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
