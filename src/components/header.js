import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"


export default () => {
  return (
    <StaticQuery
      query={imgQuery}
      render={data => {
        return (
          <div
            style={{
              paddingTop: `20px`
            }}>
            <Image
              fixed={data.logo.childImageSharp.fixed}
              style={{
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <span>Running Tales</span>
          </div>
        )
      }}
    />
  )
}

const imgQuery = graphql`
  query ImgQuery {
    logo: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`