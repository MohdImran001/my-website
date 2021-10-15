import React from "react"
import { NewspaperIcon } from "@heroicons/react/outline"

import { Heading } from "components/typography"
import { Section } from "layouts"

import Recommendation from "./recommendation"
import Data from "content/testimonials"

const Testimonial = () => {
  return (
    <Section>
      <Heading>
        <NewspaperIcon
          className="block w-8 h-8 md:w-16 md:h-16 mx-auto"
          aria-hidden="true"
        />
        Qoutes
      </Heading>
      {Data.map((data, index) => {
        return <Recommendation data={data} />
      })}
    </Section>
  )
}

export default Testimonial
