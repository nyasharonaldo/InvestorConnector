import React from "react"
import { Router } from "@reach/router"
import {login, isAuthenticated } from "../utils/auth"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Home = () => {
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
        <ol>
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
        </ol>
      </section>
    </Layout>
  )
}
// const Settings = () => <p>Settings</p>
// const Billing = () => <p>Billing</p>

const Blog = () => {
  const loggedIn = isAuthenticated()
  
  if(loggedIn){
    return (
      <>
        
        <Router>
          <Home path="/blog" />
          {/* <Settings path="/blog/settings" />
          <Billing path="/blog/billing" /> */}
        </Router>
      </>
    )
  }else{
    login()
  }
  
}

export default Blog
