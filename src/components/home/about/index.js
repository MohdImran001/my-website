import React from "react"
import { Link } from "gatsby"
import { Section } from "layouts"
import { Heading } from "components/typography/"

export default function About() {
  return (
    <div className="pt-10 md:pt-12 mx-auto text-center text-white">
      <div className="max-w-7xl  rounded-lg text-white transform rotate-3">
        <div className=" max-w-7xl text-gray-900 transform -rotate-3 rounded-lg p-6 px-2 lg:p-12 lg:pb-4">
          <div className="">
            <div className="p-4 text-2xl font-bold md:p-8 md:text-5xl lg:text-5xl lg:pt-10">
              <span
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "#34D399",
                }}
              >
                Hi, I am Imran.
              </span>
            </div>
            <p className=" lg:p-6 lg:px-24 text-sm md:text-lg  font-medium leading-loose lg:leading-9 md:tracking-wider">
              I am a Computer Science student and an aspiring software engineer.
              I am extremely good at one thing, and thats leveraging technology
              to solve real-life problems. I build apps that are fast and
              reliable. I mostly use javascript but in the past few months I
              have worked on projects using Amazon Web Services (AWS), AWS
              Lambda, Python, Firebase and many more. <br />
              <Link to="/about" className="text-green-500 underline">
                read more...
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
