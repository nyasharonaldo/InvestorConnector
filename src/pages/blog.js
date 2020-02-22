import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated } from "../utils/auth"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const inc = 0;
  const dataContentful = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  `)
  

  return (
    <Layout>
      <section class="container">
      {/* <ol>
          {dataContentful.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className="post">
                <Link to={"/blog/" + edge.node.slug}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol> */}
        <section id="blog-grid">
          <div class="box">
            <div class="box-content">
            <ol>
            {dataContentful.allContentfulBlogPost.edges.map(edge => {
              // TODO: If statement for getting up to 3 nodes. Implement in CSS with first child etc... look at css grid tutorial
            return (
              <li className="post">
                <Link to={"/blog/" + edge.node.slug}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
              </div>
          </div>
          <div class="box">
            <div class="box-content">Hello, Box2</div>
          </div>
          <div class="box">
            <div class="box-content">Hello, Box3</div>
          </div>
          <div class="box">
            <div class="box-content">Hello, Box4</div>
          </div>
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
