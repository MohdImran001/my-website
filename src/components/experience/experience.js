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
import FirebaseLogo from "../../../assets/firebase.svg"
import VercelLogo from "../../../assets/vercel.svg"

import { Heading } from "components/typography"
import { Section } from "layouts/"
import ExternalLink from "components/ExternalLink"

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
      <div className="mx-auto mt-2 p-1  md:mt-16 md:p-0  max-w-5xl grid grid-cols-1  md:grid-cols-2 gap-6">
        {/* CARD */}
        <div className="mx-auto w-full shadow rounded-xl bg-white  divide-y divide-gray-200 h-auto">
          {/* Company Name and Summary */}
          <div className="space-y-4 p-6 md:px-8">
            <h1 className="text-2xl md:text-4xl font-semibold">
              <ExternalLink to="https://rethinkux.com/">
                <span className="wavy-underline-green"> RethinkUX </span>
              </ExternalLink>
            </h1>
          </div>
          {/* Role */}
          <div className="text-sm font-medium p-6 md:px-8 w-full md:text-lg ">
            <h1>React Native Developer Intern</h1>
            <p className="text-xs">(JULY, 2021 - PRESENT)</p>

            <div className="justify-center">
              <ul
                style={{ listStyle: "none" }}
                className="-space-y-2 my-4 align-center text-left"
              >
                <li>
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Implemented Authentication, Redux State Management and
                      React-Navigation in one of the Client's React-Native App.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Migrated template generation feature to pikepdf from
                      pyPDf2 to support files with blank pasword in crove.app
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Tech Stack Icons */}
            <div className="flex flex-row mt-12 space-x-4  justify-center -ml-12">
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
        <div className="mx-auto w-full shadow rounded-xl bg-white  divide-y divide-gray-200">
          {/* Company Name and Summary */}
          <div className="space-y-4 p-6 md:px-8">
            <h1 className="text-2xl font-semibold md:text-4xl space-x-4">
              <StaticImage
                src="../../images/helium-logo.png"
                alt="helium"
                className="w-10 h-10"
              />
              <ExternalLink to="https://github.com/helium">
                <span className="wavy-underline-purple">Helium </span>
              </ExternalLink>
            </h1>
          </div>
          {/* Role */}
          <div className="text-sm font-medium p-6 md:px-8 w-full md:text-lg">
            <h1>Open Source Contributor</h1>
            <p className="text-xs">(OCTOBER, 2020 - PRESENT)</p>
            <div className="">
              <ul style={{ listStyle: "none" }} className="-space-y-2 my-4">
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Contributed to{" "}
                      <ExternalLink to="https://explorer.helium.com">
                        <span className="underline-purple">
                          explorer.helium.com
                        </span>
                      </ExternalLink>{" "}
                      during Hacktoberfest and Helium's Open Source Hackathon
                    </p>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Fixed 11 issues related to design and refactoring of
                      codebase
                    </p>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Contributed more than 300 changes in the codebase
                    </p>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Ranked #1 in Helium's Open Source Hackathon.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Tech Stack Icons */}
            <div className="flex flex-row mt-12 space-x-4 justify-center -ml-20">
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

        {/* Meditrust Card */}
        <div className="mx-auto  w-full shadow rounded-xl bg-white  divide-y divide-gray-200">
          {/* Company Name and Summary */}
          <div className="space-y-4 p-6 md:px-8">
            <h1 className="text-2xl font-semibold md:text-4xl space-x-4">
              <ExternalLink href="https://github.com/mohdimran001/lab-report-management-system">
                <span className="wavy-underline-yellow">Meditrust Labs </span>
              </ExternalLink>
            </h1>
          </div>
          {/* Role */}
          <div className="text-sm font-medium p-6 md:px-8 w-full md:text-lg">
            <h1>Freelancer</h1>
            <p className="text-xs">(JANUARY, 2021 - PRESENT)</p>
            <div className="">
              <ul style={{ listStyle: "none" }} className="-space-y-2 my-4">
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Developed a Web App with React.js and Firebase that made
                      management of lab reports simple.
                    </p>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Implemented Client Side PDF Generation using pdflib.js
                    </p>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Implemented a Cron Job on firebase functions to auto
                      backup Cloud Firestore data every day.
                    </p>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex flex-row space-x-2">
                    <p className="mt-4">
                      <ArrowNarrowRightIcon
                        className="inline-block w-4 h-4"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="text-sm font-normal mt-5">
                      Reduced assets load time for pdf generation upto 40% by
                      utilizing browser's Cache Storage
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Tech Stack Icons */}
            <div className="flex flex-row mt-12 space-x-4 justify-center -ml-10">
              <div className="w-10 h-10">
                <ReactLogo />
              </div>
              <div className="w-10 h-10 -mt-1">
                <JSLogo />
              </div>

              <div className="w-2 h-2 -mt-8" marginLeft="1rem">
                <VercelLogo width="100" height="100" />
              </div>
              <div className="w-2 h-2 -mt-2 " style={{ marginLeft: "7rem" }}>
                <FirebaseLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default RecentExperience
