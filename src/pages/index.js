import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isAuthenticated } from "../utils/auth"

const Home = ({ location }) => {
  const loggedIn = isAuthenticated()
  if (loggedIn) {
    navigate("/blog")
  } 
    return (
      <div>
        <Layout>
          <SEO title="Investor Connector" />
          <section class="landing">
            <div class="dark-overlay">
              <div class="landing-inner">
                <h1 class="x-large">Investor Connector</h1>
                <p class="lead">Share & Learn new Investment Techniques</p>
                <div class="buttons">
                  <Link to="/blog" class="btn btn-primary">
                    Login / Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    )
  
}
export default Home
