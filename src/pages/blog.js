import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated } from "../utils/auth"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import MiniPost from "../components/miniPost"

const Home = () => {
  const dataContentful = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            id
            publishedDate(formatString: "MMMM Do YYYY")
            backgroundImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  const edges = dataContentful.allContentfulBlogPost.edges
  const mainBoxImgUrls = edges.map(
    edge => edge["node"]["backgroundImage"]["file"]["url"]
  )
  return (
    <Layout>
      <section class="container">
        <header id="showcase" class="grid">
          <div class="bg-image" />
          <div class="content-wrap">
            <h1>Welcome to Investor Connector</h1>
            <p>
              The central place for investors to connect on new and ground
              breaking market research. Here you will be introduced to and
              collaborate with some of the most talented investing professionals
              which will grow your skills and let's not lie... make you a lot of
              money
            </p>
            <a href="#blog-grid" class="btn">
              Read More
            </a>
          </div>
        </header>
        <section id="blog-grid">
          {edges.map(edge => (
            <div className="box">
              <MiniPost
                img={edge["node"]["backgroundImage"]["file"]["url"]}
                slug={edge["node"]["slug"]}
                title={edge["node"]["title"]}
                publishedDate={edge["node"]["publishedDate"]}
              />
            </div>
          ))}
          {/* <div id="news" className="box">
            <MiniPost title="News Article" />
          </div> */}
        </section>
      </section>
    </Layout>
  )
}
// const Settings = () => <p>Settings</p>
// const Billing = () => <p>Billing</p>

const Blog = () => {
  const loggedIn = isAuthenticated()

  if (loggedIn) {
    return (
      <>
        <Router>
          <Home path="/blog" />
          {/* <Settings path="/blog/settings" />
          <Billing path="/blog/billing" /> */}
        </Router>
      </>
    )
  } else {
    login()
    return <div />
  }
}

export default Blog
