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
      <div className="px-3 md:px-16 lg:px-0  mx-auto max-w-full space-y-6 mt-10 lg:space-y-0 lg:space-x-8 md:mt-16 lg:flex justify-center">
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
