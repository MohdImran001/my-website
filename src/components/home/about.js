import React from "react"

import { Section } from "layouts"
import { Heading } from "components/typography/"

export default function About() {
  return (
    <div className="pt-10 md:pt-20 mx-auto text-center text-white">
      <div className="max-w-7xl bg-blue-200 shadow-lg rounded-lg text-white transform rotate-3">
        <div className=" bg-gradient-to-r from-blue-400  to-indigo-500 max-w-7xl  transform -rotate-3 shadow-lg rounded-lg p-6 px-4 lg:p-12">
          <div className="">
            <div className="p-4 text-2xl text-white font-bold md:p-8 md:text-5xl lg:text-5xl lg:pt-10">
              Hey, I am Imran.
            </div>
            <p className="p-4 lg:p-6 lg:px-32 text-sm md:text-lg text-white font-medium leading-loose lg:leading-9 md:tracking-wider">
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
