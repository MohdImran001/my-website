import React from "react"
import { Link } from "gatsby"

import { Heading } from "components/typography"

const Project = ({ data: { title, summary, link }, children }) => {
  return (
    <div className="bg-white rounded-md shadow-md  border-t-8 border-yellow-300">
      <a href={link} className="flex flex-row justify-between">
        <div>
          <div className="bg-yellow-400 text-white p-4 md:p-8">
            <div className="">{children}</div>
            <h1 className="pl-0 p-4 text-2xl text-white font-bold md:p-0 md:text-5xl lg:text-5xl lg:pt-10">
              {" "}
              {title}{" "}
            </h1>
          </div>
          <p className="text-sm md:text-lg p-4 md:p-8">{summary}</p>
        </div>
      </a>
    </div>
  )
}

export default Project
