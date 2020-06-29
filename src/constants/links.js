import React from "react"
import { Link } from "gatsby"
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
        หน้าหลัก
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
        บทความ
        </Link>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
        ติดต่อ
        </Link>
      </li>
      <li>
        <Link to="/post" className="page-link">
        สาระ
        </Link>
      </li>
    </ul>
  )
}

export default Links
