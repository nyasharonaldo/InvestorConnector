import React from "react"
import { handleAuthentication } from "../utils/auth"
import { navigate } from "@reach/router"
const Callback = () => {
  handleAuthentication()
  navigate('/blog')
  return <p>Loading...</p>
}

export default Callback
