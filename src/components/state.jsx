import React from 'react'
import {useStaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";
import styled from 'styled-components';


const query = graphql`
  {
    stateImage: file(relativePath: {eq: "สุดแสงสูญ.png"}) {
      childImageSharp {
        fluid(maxWidth:600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


const State = ({titleA,titleB,infoA,infoB, children}) => {
  const {stateImage} = useStaticQuery(query);
  return (
    <Wrapper>
      <div className="center">
      <article className="image">
        <div className="container">
        <Img fluid={stateImage.childImageSharp.fluid} alt="winrawee book" />
        </div>
      </article>
      <article className="info">
         <h4>{infoA}</h4>
        <h3>{infoB}</h3>
        <h1>{titleA}</h1>
        <h2>{titleB}</h2>
        {children}
      </article>
      </div>
    </Wrapper>

  )
}

export default State


const Wrapper = styled.section`

  .center {
    width: 80vw;
    max-width: 1100px;
    margin: auto;
  }
  
  .image {
    margin: 3rem 0;
    position: relative;
  }
  .image img {
  width: 100%;
  display: block;
  }
  .info {
    margin-top: 3rem;
    display: none;
  }
  
  @media screen and (min-width: 768px) {
    .info {
      display:block;
      margin:auto;
      text-align: center;
  
    }
    .center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      /* margin-top: 0; */
    }
    .image {
      margin: 3rem;
    }
    .image img {

      max-height:600px;
    }
    .container {
      max-height:600px;
    }

    .info h1 {
    font-family:var(--ff-secondary);
    font-size: 2.8rem;
    color: #4c1929;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    padding: 0 1rem;
    letter-spacing: 6px;
    }
    .info h2 {
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
    }
    .info h3 {
    font-size: 1rem;
    font-weight: bold;
    /* font-style: italic; */
    line-height: 2.5;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2rem;
    } 
    .info h4 {
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;
    line-height: 2.5;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 2rem;
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
  

  @media screen and (min-width: 1200px) {
  .center {
    width: 100vw;
    max-width: 1170px;
  }
}

`