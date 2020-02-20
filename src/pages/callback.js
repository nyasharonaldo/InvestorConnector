import React from "react"
import { handleAuthentication } from "../utils/auth"
import { navigate } from "gatsby"
const Callback = () => {
  handleAuthentication()
  navigate('/blog')
  return <p>Loading...</p>
}

export default Callback
