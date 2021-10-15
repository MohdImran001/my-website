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
import Project from "components/projects/project"

const ProjectsPage = () => (
  <Layout>
    <main className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto  pb-20 px-4 lg:px-8">
        <div className="pt-10 md:pt-12 mx-auto">
          <Project
            data={{
              title: "Meditrust Labs",
              summary: "a little line about project",
              image: "",
            }}
          />
        </div>
      </div>
    </main>
  </Layout>
)

export default ProjectsPage
