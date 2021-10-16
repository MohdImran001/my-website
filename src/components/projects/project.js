import React from "react"
import { Link } from "gatsby"

import { Heading } from "components/typography"

const Project = ({ data: { title, summary }, children }) => {
  return (
    <div className="bg-white rounded-md shadow-md  p-4 md:p-8 border-t-8 border-yellow-300">
      <Link
        to="/project/meditrust-lab"
        className="flex flex-row justify-between"
      >
        <div>
          <Heading> {title} </Heading>
          <p className="text-sm md:text-lg">{summary}</p>
        </div>
        <div className="mt-12 mr-4">{children}</div>
      </Link>
    </div>
  )
}

export default Project
