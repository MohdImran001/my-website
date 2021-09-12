import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Heading } from "components/typography"
import { Section } from "layouts"
import {
  ArrowsExpandIcon,
  CurrencyDollarIcon,
  FireIcon,
  SparklesIcon,
  SupportIcon,
} from "@heroicons/react/solid"
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
        <Card>
          <div className="w-10 h-10 mx-auto text-red-500">
            <FireIcon />
          </div>
          <p>Blazing fast web and mobile apps to meet your business demands</p>
        </Card>
        <Card>
          <div className="w-10 h-10 mx-auto text-blue-500">
            <ArrowsExpandIcon />
          </div>
          <p>Layouts that work on all devices. big or small</p>
        </Card>
        <Card>
          <div className="w-10 h-10 mx-auto text-green-500">
            <CurrencyDollarIcon />
          </div>
          <p>Affordable Prices that keeps your wallets happy.</p>
        </Card>
        <Card>
          <div className="w-10 h-10 mx-auto text-yellow-500">
            <SupportIcon />
          </div>
          <p>Lifetime support that covers all the things related to project.</p>
        </Card>
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
