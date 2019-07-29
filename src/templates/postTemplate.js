import React from 'react'
import styles from "../css/postTemplate.module.css"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const postTemplate = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <div>
      post template
    </div>
  )
}

export default postTemplate
