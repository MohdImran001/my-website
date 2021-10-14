import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "layouts/layout"
import Seo from "components/seo"
import About from "components/home/about"

const AboutPage = () => (
  <Layout>
    <main className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto  pb-20 px-4 lg:px-8 text-center">
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
                  I am a student, software engineer, and an aspiring product
                  manager. I love building softwares that helps people around
                  me. I have experience in developing web apps that are fast,
                  reliable and can be scaled to hundreds of users. I mostly use
                  React.js and Node.js but in the past few months I have worked
                  on projects with AWS, AWS Lambda, Python, Firebase, Next.js,
                  C++ and many more. If you want to learn more about my
                  experience, visit my blog. Here, I regularly share my
                  knowledge in the form of articles.
                  {/* I am currently preparing for GMAT */}
                </p>
              </div>
              {/* Connect */}
              <div className="mt-32">
                <div className="p-4 text-2xl font-bold md:p-8 md:text-5xl lg:text-5xl lg:pt-10">
                  <span
                    style={{
                      textDecorationLine: "underline",
                      textDecorationStyle: "wavy",
                      textDecorationColor: "#34D399",
                    }}
                  >
                    Connect
                  </span>
                </div>
                <p className=" lg:p-6 lg:px-20 text-sm md:text-lg  font-medium leading-loose lg:leading-9 md:tracking-wider">
                  If you would like to hire me or give me feedback of any kind,
                  I'll be delighted to hear from you.
                  <br />
                  <b>Email - </b> mohdimran.work@gmail.com
                  <br />
                  <p className="mt-5 space-x-4">
                    <a href="https://www.linkedin.com/in/mohdimran001/">
                      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    <a href="https://wa.me/919818582518/?text=Hi%20Imran,%20Lets%20do%20a%20project%20together!">
                      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    <a href="https://github.com/MohdImran001/">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </p>
                </p>
              </div>
              {/* Tools */}
              <div className="mt-32">
                <div className="p-4 text-2xl font-bold md:p-8 md:text-5xl lg:text-5xl lg:pt-10">
                  <span
                    style={{
                      textDecorationLine: "underline",
                      textDecorationStyle: "wavy",
                      textDecorationColor: "#34D399",
                    }}
                  >
                    Coding
                  </span>
                </div>
                <p className=" lg:p-6 lg:px-24 text-sm md:text-lg  font-medium leading-loose lg:leading-9 md:tracking-wider">
                  I loves to write easy to read and maintainable code. I prefer
                  the following tools to improve productivity.
                  {/* GitLens, TabNine, Moon theme, vs code, fish, ubuntu,  */}
                  <div className="mt-5 space-x-4 text-left">
                    <div>
                      <a href="https://www.linkedin.com/in/mohdimran001/">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                      </a>
                    </div>
                    <div>
                      <a href="https://wa.me/919818582518/?text=Hi%20Imran,%20Lets%20do%20a%20project%20together!">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/MohdImran001/">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default AboutPage
