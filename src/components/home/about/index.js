import React from "react"

import { Section } from "layouts"
import { Heading } from "components/typography/"

export default function About() {
  return (
    <div className="pt-10 md:pt-12 mx-auto text-center text-white">
      <div className="max-w-7xl  rounded-lg text-white transform rotate-3">
        <div className=" max-w-7xl text-gray-900 transform -rotate-3 rounded-lg p-6 px-2 lg:p-12 lg:pb-4">
          <div className="">
            <div className="p-4 text-2xl font-bold md:p-8 md:text-5xl lg:text-5xl lg:pt-10">
              <span className="wavy-underline-green">Hi, I am Imran.</span>
            </div>
            <p className=" lg:p-6 lg:px-24 text-sm md:text-lg  font-medium leading-loose lg:leading-9 md:tracking-wider">
              I am a Computer Science student and an aspiring software engineer.
              Being a technology enthusiast, I love exploring new technologies
              and leveraging them to solve real-life problems. I live with my
              family in Delhi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
