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

import RocketLogo from "../../../assets/rocket.svg"
import DesignLogo from "../../../assets/design.svg"
import MilestonesLogo from "../../../assets/milestones.svg"
import SupportLogo from "../../../assets/support.svg"

const Features = () => {
  return (
    <Section>
      <Heading>
        <SparklesIcon
          className="block w-8 h-8 md:w-12 md:h-10 mx-auto mb-4"
          aria-hidden="true"
        />
        Benefits of working with me
      </Heading>
      <div className="px-0  mx-auto  mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2  gap-8 text-md">
        <Card>
          <RocketLogo width="300" height="200" style={{ margin: "0 auto" }} />
          <p>Blazing fast web and mobile apps to meet your business demands</p>
        </Card>
        <Card>
          <DesignLogo width="300" height="200" style={{ margin: "0 auto" }} />
          <p>Layouts that work on all devices. big or small</p>
        </Card>
        <Card>
          <MilestonesLogo
            width="300"
            height="200"
            style={{ margin: "0 auto" }}
          />

          <p>Affordable Prices that keeps your wallets happy.</p>
        </Card>
        <Card>
          <SupportLogo width="300" height="200" style={{ margin: "0 auto" }} />
          <p>fetime support that covers all the things related to project.Li</p>
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
