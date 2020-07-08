module.exports = {
  siteMetadata: {
    title: `วินรวีร์ blog`,
    description: `นิยายสืบสวน วิทยาศาสตร์ ศาสนา ที่มีคนพูดถึงมากที่สุด`,
    titleTemplate: `%s | Blog`,
    url: `https://winraweebook.netlify.app/`,
    image: `สุดแสงสูญ.png`,
    twitterUsername: `@winraweebook`,

  },
  plugins: [
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `4089264228`,// acount ID
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          // {
          //   family: `Prompt`,
          //   variants: [`300`, `400`, `600`],
          // },
          {
            family: `Charm`,
          },
        ],
      },
    },
  ],
}
