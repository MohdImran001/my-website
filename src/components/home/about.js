import React from "react"

import { Section } from "layouts"
import { Heading } from "components/typography/"

export default function About() {
  return (
    <div className="pt-10 md:pt-12 mx-auto text-center text-white">
      <div className="max-w-7xl  rounded-lg text-white transform rotate-3">
        <div className=" max-w-7xl text-gray-900 transform -rotate-3 rounded-lg p-6 px-4 lg:p-12">
          <div className="">
            <div className="p-4 text-2xl font-bold md:p-8 md:text-5xl lg:text-5xl lg:pt-10">
              <span className="wavy-underline-green">Hi, I am Imran.</span>
            </div>
            <p className="p-2 lg:p-6 lg:px-24 text-sm md:text-lg  font-medium leading-loose lg:leading-9 md:tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
