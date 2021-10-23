import * as React from "react"
import ExperienceData from "content/experience"

import { AcademicCapIcon } from "@heroicons/react/outline"

import { Heading } from "components/typography"
import { Section } from "layouts/"
import Card from "./card"

const RecentExperience = () => {
  return (
    <Section>
      <Heading>
        <AcademicCapIcon
          className="block w-8 h-8 md:w-16 md:h-16 mx-auto"
          aria-hidden="true"
        />
        Recent Experience
      </Heading>
      <div className="mx-auto mt-2 p-1  md:mt-16 md:p-0  grid grid-cols-1  md:grid-cols-2 gap-8">
        {ExperienceData.map((experience, index) => {
          return <Card experience={experience} key={index} />
        })}
      </div>
    </Section>
  )
}

export default RecentExperience
