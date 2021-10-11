import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import ExternalLink from "components/ExternalLink"
import Content from "./content"
import TechIcons from "./techIcons"

const Card = ({
  experience: {
    organization,
    link,
    logo,
    role,
    duration,
    content,
    tech,
    themeColor,
  },
}) => {
  return (
    <div className="mx-auto w-full shadow rounded-xl bg-white  divide-y divide-gray-200">
      {/* Company Name and Summary */}
      <div className="space-y-4 p-6 md:px-8">
        <h1 className="text-2xl font-semibold md:text-4xl space-x-4">
          {logo.length > 0 && (
            <StaticImage src={logo} alt={organization} className="w-10 h-10" />
          )}
          <ExternalLink to={link}>
            <span
              className="wavy-underline-purple"
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: themeColor,
              }}
            >
              {organization}{" "}
            </span>
          </ExternalLink>
        </h1>
      </div>
      {/* Role */}
      <div className="text-sm font-medium p-6 md:px-8 w-full md:text-lg">
        <h1>{role}</h1>
        <p className="text-xs">{duration}</p>
        <TechIcons icons={tech} />
        <Content content={content} />
      </div>
    </div>
  )
}

export default Card
