import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "layouts/layout"
import Seo from "components/seo"
import About from "components/home/about"
import Experience from "components/home/experience"
import Testimonial from "components/home/testimonials"
import Features from "components/features/features"
import Footer from "components/footer"

const IndexPage = () => (
  <Layout>
    <main className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto  pb-20 px-4 lg:px-8 text-center">
        <About />
        <Experience />
        <Testimonial />
        <Features />
        <Footer />
      </div>
    </main>
  </Layout>
)

export default IndexPage
