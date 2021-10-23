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
    <div className="bg-white shadow mx-auto w-full  rounded-xl   divide-y divide-gray-200">
      {/* Company Name and Summary */}
      <div className="space-y-4 p-6 md:px-8">
        <h1 className="text-2xl font-semibold md:text-4xl space-x-4 flex justify-center">
          {logo.length > 0 && (
            <img src={logo} alt={organization} className="w-10 h-10" />
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
      <div className="w-full py-6 space-y-12">
        <div>
          <h1 className="text-md md:text-lg font-medium">{role}</h1>
          <p className="text-xs md:text-sm">{duration}</p>
        </div>
        <TechIcons icons={tech} org={organization} />
        <Content content={content} />
      </div>
    </div>
  )
}

export default Card
