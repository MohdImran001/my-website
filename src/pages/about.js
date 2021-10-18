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
                <div className="pl-0 p-4 text-2xl font-bold md:p-8 md:pl-0 md:text-5xl lg:text-5xl lg:pt-10">
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
                  I have carried a passion for technology and software
                  development since a particularly young age. I was always
                  curious to learn about how computers work and this curiosity
                  has led to my dive into the software world.
                  {/* I tend to be */}
                  {/* team-oriented and reliable. <br />
                  <br />I am also proud of my ability to persevere and overcome
                  any challenges as they come up. For example, recently in my
                  internship, I was assigned the task to develop an AWS Lambda
                  function that will upload 100 images to AWS S3 using
                  multithreading. I was completely new to AWS Lambda and Python,
                  and I could not find a well-explained solution for this. Thus,
                  I divided the problem into smaller tasks and started
                  implementing it step by step. My C++ knowledge helped me
                  because on AWS Lambda one has to precompile the libraries that
                  we need. After five days of dedication and hard work, I
                  successfully deployed the lambda function. */}
                  <br /> <br />
                  Although I am studying Computer Science at university, I have
                  garnered most of my knowledge from the internet. Indeed, free
                  educational material on the internet has helped me
                  significantly during my learning experience. That is why I
                  have started writing articles to share my experience and
                  knowledge with others with a motive to make someone's day. It
                  also helps me to perfect my knowledge in the ever-growing
                  field of Computer Science.
                  <br />
                  <br />I am highly inspired by my father. He manages our family
                  business, and because of him I have had a lot of exposure to
                  the business environment. I am highly interested in learning
                  more about the business side of tech, that is why I am
                  planning to do my master’s in Business Administration
                  {/* I am currently preparing for GMAT */}
                </p>
              </div>
              {/* Connect */}
              <div className="mt-32">
                <div className="pl-0 p-4 text-2xl font-bold md:p-8 md:pl-0 md:text-5xl lg:text-5xl lg:pt-10">
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
                <div className="pl-0 p-4 text-2xl font-bold md:p-8 md:pl-0 md:text-5xl lg:text-5xl lg:pt-10">
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
                <div className="pl-0 p-4 text-2xl font-bold md:p-8 md:pl-0 md:text-5xl lg:text-5xl lg:pt-10 lg:pl-4">
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
                <p className="pl-0 md:pl-4 p-4 text-sm md:text-lg font-medium leading-loose lg:leading-9 md:tracking-wider">
                  <a href="https://sre.google/sre-book/table-of-contents/">
                    <img
                      className="shadow-xl rounded-md w-64 md:w-1/2"
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
