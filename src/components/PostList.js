import React from 'react'
import PostCard from './PostCard';
import styles from "../css/postlist.module.css"
import { Helmet } from "react-helmet";

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts} lang="es">
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="Brix Blog" content="Daily Blog"/>
        <title>Brix Blog</title>
        <link rel="canonical" href="https://gblog29.netlify.com/" />
      </Helmet>
      <h1> Blog </h1>
      <div className={styles.center}>
      {posts.map(({node}, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
