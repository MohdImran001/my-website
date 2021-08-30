import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Heading } from "components/typography"
import { Section } from "layouts"
import { SparklesIcon } from "@heroicons/react/solid"

import Card from "./card"

const Features = () => {
  return (
    <Section>
      <Heading>
        <SparklesIcon
          className="block w-8 h-8 md:w-12 md:h-10 mx-auto mb-4"
          aria-hidden="true"
        />
        I Offer
      </Heading>
      <div className="px-0  mx-auto  mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card>layouts that work on all devices. big/small</Card>
        <Card>layouts </Card>
        <Card>layouts that work on all devices. big/small</Card>
        <Card>layouts that work on all devices. big/small</Card>
      </div>
    </Section>
  )
}

export default Features
// 1. Layouts
// 2. Pixel Perfect Code.
// 3. World Class Web and Mobile Apps
// 4. Rich User Experiences

// Fill each section with your experience
