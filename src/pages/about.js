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
import Copyright from "components/footer/copyright"

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
                <p className=" lg:py-6 text-sm md:text-lg  font-medium leading-loose lg:leading-9 md:tracking-wider">
                  I have carried a passion for technology and software
                  development since a particularly young age. Indeed, I started
                  learning HTML and CSS when I was 13 years old. I am always
                  curious to learn about how complex programs are made and this
                  curiosity has led to my dive into the software world. I am
                  studying Computer Science at Jamia Hamdard University, Delhi,
                  India.
                  <br />
                  <br />
                  Although I am studying Computer Science at university, I have
                  garnered most of my knowledge from the internet. Indeed, free
                  educational material on the internet has helped me
                  significantly in my studies. That is why I have started
                  writing articles to share my experience with others. It also
                  helps me to perfect my knowledge in the ever-growing field of
                  Computer Science.
                  <br />
                  <br />
                  My father is an inspiration to me. He manages our family
                  business and because of him, I've had a lot of exposure to the
                  business environment. That is why I always enjoy exploring the
                  business side of the projects, their goals, and how I can best
                  apply myself to make sure that the project succeeds.
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
                    Get in touch
                  </span>
                </div>
                <p className=" lg:py-6 text-sm md:text-lg  font-medium leading-loose lg:leading-9 md:tracking-wider">
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
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </main>
  </Layout>
)

export default AboutPage
