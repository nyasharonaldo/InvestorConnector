import React from "react"
import { Link } from "gatsby"
const miniPost = ({ slug, title, publishedDate, img }) => {
  console.log(title, slug, publishedDate)

  if (img) {
    return (
      <Link to={"/blog/" + slug}>
        <img src={img} alt="" />
        <div className="box-content">
          <h2>{title}</h2>
          <p>{publishedDate}</p>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={"/blog/" + slug}>
        <div className="box-content">
          <h2>{title}</h2>
          <p>{publishedDate}</p>
        </div>
      </Link>
    )
  }
}
export default miniPost
