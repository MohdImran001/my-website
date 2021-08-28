import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import { Section } from "layouts"
import GatsbyLogo from "../../../assets/gatsby.svg"
import TailwindLogo from "../../../assets/tailwind.svg"

function Copyright(props) {
  return (
    <Section>
      <div className="flex justify-center space-x-2 ">
        <p>This website is built with</p>
        <div>
          <FontAwesomeIcon icon={faHeart} size="1x" color="red" />,
        </div>
        <div className="w-5 h-5">
          <GatsbyLogo />
        </div>
        <p> and </p>
        <div className="w-5 h-5 mt-1">
          <TailwindLogo />
        </div>
      </div>
    </Section>
  )
}

export default Copyright
