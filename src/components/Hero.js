import React from 'react'
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const Hero = ({img,className,children,home}) => {
  return (
    <BackgroundImage className= {className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(Hero)`
min-height: ${props => props.home ? 'calc(100vh - 62px)' : '90vh'};
/* min-height: 100vh; */


/* background: ${props => props.home ? 
'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none'}; */
    background-position: center;
    background-size:cover;
    opacity: 1!important;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 5rem;
`
