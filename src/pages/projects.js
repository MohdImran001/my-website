import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileMedicalAlt } from "@fortawesome/free-solid-svg-icons"

import Layout from "layouts/layout"
import Seo from "components/seo"
import Project from "components/projects/project"

const ProjectsPage = () => (
  <Layout>
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto  pb-20 px-4 lg:px-8">
        <div className="pt-10 md:pt-12 mx-auto">
          <Project
            data={{
              title: "Meditrust Labs",
              summary: "a little line about project",
            }}
          >
            <FontAwesomeIcon icon={faFileMedicalAlt} size="2x" />
          </Project>
        </div>
      </div>
    </main>
  </Layout>
)

export default ProjectsPage
