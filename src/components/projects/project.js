import React from "react"
import { Link } from "gatsby"

import { Heading } from "components/typography"

const Project = ({ data: { title, summary } }) => {
  return (
    <div className="bg-white rounded-md shadow-md  p-4 md:p-8 border-t-8 border-yellow-300">
      <Link to="/project/meditrust-lab">
        <Heading> {title} </Heading>
        <p className="text-sm md:text-lg">{summary}</p>
      </Link>
    </div>
  )
}

export default Project
