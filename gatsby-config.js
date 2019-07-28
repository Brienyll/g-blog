module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts/`,
      },
    }
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
}
