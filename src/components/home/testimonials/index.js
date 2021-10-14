import React from "react"
import { NewspaperIcon } from "@heroicons/react/outline"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import styled, { css } from "styled-components"

import { Heading } from "components/typography"
import { Section } from "layouts"

import Recommendation from "./recommendation"
import Data from "content/testimonials"

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: auto;
  max-width: 42rem;
  min-height: 50rem;
  margin: 0 auto;
`
const Children = styled.div`
  max-width: 42rem;
  position: relative;
  height: 45rem;
`

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`
const Dots = styled.span`
  text-align: center;
  width: 42rem;
  z-index: 100;
  position: absolute;
  left: 0;
`

const CarouselUI = ({ position, total, handleClick, children }) => {
  return (
    <Container>
      <Children>{children}</Children>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? "● " : "○ "}
          </Dot>
        ))}
      </Dots>
    </Container>
  )
}
const Carousel = makeCarousel(CarouselUI)

const Testimonial = () => {
  return (
    <Section>
      <Heading>
        <NewspaperIcon
          className="block w-8 h-8 md:w-16 md:h-16 mx-auto"
          aria-hidden="true"
        />
        Qoutes
      </Heading>
      {Data.map((data, index) => {
        return <Recommendation data={data} />
      })}
    </Section>
  )
}

export default Testimonial
