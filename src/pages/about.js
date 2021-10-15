import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons"
import { faCode, faTerminal } from "@fortawesome/free-solid-svg-icons"

import Layout from "layouts/layout"
import Seo from "components/seo"
import About from "components/home/about"

const AboutPage = () => (
  <Layout>
    <main className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto  pb-20 px-4 lg:px-8 text-center">
        <div className="pt-10 md:pt-12 mx-auto text-left text-white">
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
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="2x"
                        color="#3B82F6"
                      />
                    </a>
                    <a href="https://github.com/MohdImran001/">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://wa.me/919818582518/?text=Hi%20Imran,%20Lets%20do%20a%20project%20together!">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="2x"
                        color="#34D399"
                      />
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
                <p className=" lg:p-6 lg:px-24 text-sm md:text-lg font-medium leading-loose lg:leading-9 md:tracking-wider">
                  I use the following softwares to improve productivity.
                  {/* GitLens, TabNine, Moon theme, vs code, fish, ubuntu,  */}
                  <div className="mt-5 space-x-4">
                    <FontAwesomeIcon icon={faCode} size="1x" /> <b>Editor - </b>
                    VS Code with
                    <a
                      href="https://taniarascia.github.io/new-moon/"
                      style={{
                        textDecorationLine: "underline",
                        textDecorationStyle: "wavy",
                        textDecorationColor: "#EC4899",
                      }}
                    >
                      New Moon Theme
                    </a>
                  </div>
                  <div className="mt-5 space-x-4">
                    <FontAwesomeIcon icon={faTerminal} size="1x" />
                    <b>Terminal - </b>
                    <a
                      href="https://fishshell.com/"
                      style={{
                        textDecorationLine: "underline",
                        textDecorationStyle: "wavy",
                        textDecorationColor: "#EC4899",
                      }}
                    >
                      Fish
                    </a>
                  </div>
                  <div className="mt-5 space-x-4">
                    <FontAwesomeIcon icon={faTerminal} size="1x" />
                    <b>Operating System - </b>
                    <FontAwesomeIcon icon={faUbuntu} size="1x" /> Ubuntu
                  </div>
                </p>
              </div>
              <div className="mt-32">
                <div className="pl-0 p-4 text-2xl font-bold md:p-8 md:text-5xl lg:text-5xl lg:pt-10 lg:pl-4">
                  <span
                    style={{
                      textDecorationLine: "underline",
                      textDecorationStyle: "wavy",
                      textDecorationColor: "#34D399",
                    }}
                  >
                    Reading List
                  </span>
                </div>
                <p className="p-4 text-sm md:text-lg font-medium leading-loose lg:leading-9 md:tracking-wider">
                  <a href="https://sre.google/sre-book/table-of-contents/">
                    <img
                      className="shadow-xl rounded-md"
                      src="https://lh3.googleusercontent.com/JvM0JKKuZNJMWAC5iZPm4j-mdS9ORpZbpEWzg0zmJ0i2_xgIcju0OLXJ-zmnvz_GtFFGHe9qZ9Dz-6W0u5fRLFQaRlOI_hGzbetw"
                    />
                  </a>
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
