import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { NewspaperIcon } from "@heroicons/react/outline"
import { ExternalLinkIcon } from "@heroicons/react/outline"

import { Heading } from "components/typography"
import { Section } from "layouts"

const Testimonial = () => {
  return (
    <Section>
      <Heading>
        <NewspaperIcon
          className="block w-8 h-8 md:w-16 md:h-16 mx-auto"
          aria-hidden="true"
        />
        What people say about me
      </Heading>
      <div className="bg-white shadow max-w-2xl  mt-10 md:mt-16 mx-auto rounded-xl">
        <div className="p-6 md:p-10 rounded-t-xl bg-white text-md md:text-lg leading-8 md:leading-8 font-normal text-gray-900">
          <svg
            width="45"
            height="36"
            className="mb-5 fill-indigo text-orange-100"
          >
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
          </svg>
          <p>
            Mohammad has been a really helpful contributor over the past few
            weeks, submitting fixes for several open issues and not being afraid
            to dive into complexity. Even over the short period I've been
            watching him submit pull requests and ask questions on Discord, I've
            noticed that he is always pushing himself to learn more and take on
            more challenging issues. I've been really impressed with his work so
            far and am excited to see his future contributions to open source
            projects!
          </p>
        </div>
        <div className="flex space-x-4 text-left text-white font-medium p-6 pl-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-b-xl">
          <StaticImage
            src="./../../images/daniel_james.jpeg"
            alt="daniel"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="">
              <a href="https://www.linkedin.com/in/danielcolinjames/">
                Daniel James{" "}
                <ExternalLinkIcon
                  className="inline-block w-4 h-4 -mt-1"
                  aria-hidden="true"
                />
              </a>
            </p>
            <p className="text-sm text-blue-100">
              {" "}
              Software Engineer at Helium Inc.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonial
