import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "layouts/layout"
import Seo from "components/seo"
import About from "components/home/about"
import Experience from "components/experience/experience"
import Testimonial from "components/testimonials/testimonial"

const IndexPage = () => (
  <Layout>
    <main className="bg-gray-50 text-gray-900">
      <About />
      <div className="max-w-7xl mx-auto px-2 mt-10 sm:px-6 lg:px-8 md:mt-20 text-center">
        <Experience />
        <Testimonial />
        <div className="mt-20"></div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
