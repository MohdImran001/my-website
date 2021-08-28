import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  AcademicCapIcon,
  ArrowNarrowRightIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline"

import ReactLogo from "../../../assets/ReactLogo.svg"
import TypeScriptLogo from "../../../assets/typescript.svg"
import ReduxLogo from "../../../assets/redux.svg"
import JSLogo from "../../../assets/javascript.svg"
import NextjsLogo from "../../../assets/nextjs.svg"

import { Heading } from "components/typography"
import { Section } from "layouts/"

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
      <div className=" mt-2 space-y-4 p-1 md:mt-16 md:p-0 md:space-y-0 md:space-x-8 md:flex md:flex-row w-full md:justify-center">
        {/* CARD */}
        <div className="mx-auto md:mx-0 md:flex-1 shadow-md rounded-xl bg-white max-w-md divide-y divide-gray-200 h-auto">
          {/* Company Name and Summary */}
          <div className="space-y-4 p-6 md:px-8">
            <h1 className="text-2xl md:text-4xl font-semibold">
              <span className="border-b-4 border-green-500">
                <a
                  href="https://rethinkux.com/"
                  className="text-decoration-none"
                >
                  RethinkUX{" "}
                  <ExternalLinkIcon
                    className="inline-block w-4 h-4"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </h1>
          </div>
          {/* Role */}
          <div className="text-sm font-medium p-6 md:px-8 w-full md:text-lg ">
            <h1>React Native Developer Intern</h1>
            <p className="text-xs">(JULY, 2021 - PRESENT)</p>
            {/* Tech Stack Icons */}
            <div className="flex flex-row mt-8 space-x-4  justify-center -ml-12">
              <div className="w-10 h-10">
                <ReactLogo />
              </div>
              <div className="w-10 h-10">
                <ReduxLogo />
              </div>
              <div className="w-10 h-10 -mt-1">
                <JSLogo />
              </div>
              <div className="w-2 h-2 -mt-1">
                <TypeScriptLogo />
              </div>
            </div>
          </div>
        </div>

        {/* Helium Card */}
        <div className="mx-auto md:mx-0 md:flex-1 shadow-md rounded-xl bg-white max-w-md divide-y divide-gray-200">
          {/* Company Name and Summary */}
          <div className="space-y-4 p-6 md:px-8">
            <h1 className="text-2xl font-semibold md:text-4xl space-x-4">
              <StaticImage
                src="../../images/helium-logo.png"
                alt="helium"
                className="w-10 h-10"
              />
              <span className="border-b-4 border-blue-600">
                <a
                  href="https://github.com/helium"
                  className="text-decoration-none"
                >
                  Helium{" "}
                  <ExternalLinkIcon
                    className="inline-block w-4 h-4"
                    aria-hidden="true"
                  />
                </a>
              </span>
            </h1>
          </div>
          {/* Role */}
          <div className="text-sm font-medium p-6 md:px-8 w-full md:text-lg">
            <h1>Open Source Contributor</h1>
            <p className="text-xs">(OCTOBER, 2020 - PRESENT)</p>
            <div className="text-left">
              <p className="text-sm font-medium mt-5">
                <ArrowNarrowRightIcon
                  className="inline-block w-4 h-4"
                  aria-hidden="true"
                />{" "}
                Ranked #1 during HELIUM's Open Source Hackathon
              </p>
              <p className="text-sm font-medium mt-1">
                <ArrowNarrowRightIcon
                  className="inline-block w-4 h-4"
                  aria-hidden="true"
                />{" "}
                Contributed 327 lines of code
              </p>
            </div>
            {/* Tech Stack Icons */}
            <div className="flex flex-row mt-8 space-x-4 justify-center -ml-20">
              <div className="w-10 h-10">
                <ReactLogo />
              </div>
              <div className="w-10 h-10 -mt-1">
                <JSLogo />
              </div>
              <div className="w-2 h-2 -mt-1">
                <TypeScriptLogo />
              </div>
              <div className="w-10 h-10">
                <NextjsLogo className="ml-8 -mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default RecentExperience
