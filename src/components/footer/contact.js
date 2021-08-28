import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import { Section } from "layouts"

const Contact = () => {
  return (
    <Section>
      <div className="max-w-full bg-gray-200 shadow-lg rounded-lg text-white transform rotate-3">
        <div className=" bg-gradient-to-r from-blue-400  to-indigo-500 max-w-full  transform -rotate-3   shadow-lg rounded-lg p-12 py-32">
          <div className="">
            <h1 className=" text-xl text-white font-semibold md:font-bold md:text-5xl">
              Interested in doing a project together?
            </h1>
            <p className="p-4 text-md md:text-lg text-indigo-50 font-medium ">
              Connect with me!
            </p>
            <p className="mt-5 space-x-4">
              <a href="https://www.linkedin.com/in/mohdimran001/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/mohdimran001/">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
