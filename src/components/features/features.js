import * as React from "react"

import { Heading } from "components/typography"
import { Section } from "layouts"
import { SparklesIcon } from "@heroicons/react/solid"
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
          <RocketLogo width="300" height="200" className="mx-0 md:mx-auto" />
          <p>
            I write easy to read and maintainable code. Your project will be
            crafted using best practices of the industry
          </p>
        </Card>
        <Card>
          <DesignLogo width="300" height="200" className="mx-0 md:mx-auto" />
          <p>
            Pixel perfect design that works on every device. (from smartphones
            to desktops and everything in between)
          </p>
        </Card>
        <Card>
          <MilestonesLogo
            width="300"
            height="200"
            className="mx-0 md:mx-auto"
          />
          <p>
            Don't pay in advance! Pay in small amounts after completion of each
            milestone.
          </p>
        </Card>
        <Card>
          <SupportLogo width="300" height="200" className="mx-0 md:mx-auto" />
          <p>
            {" "}
            Facing an issue? Don't worry, I've got your back. I offer free
            support for all your technical issues.{" "}
          </p>
        </Card>
      </div>
    </Section>
  )
}

export default Features
