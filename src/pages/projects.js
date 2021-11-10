import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileMedicalAlt } from "@fortawesome/free-solid-svg-icons"

import Layout from "layouts/layout"
import Seo from "components/seo"
import Project from "components/projects/project"

const ProjectsPage = () => (
  <Layout>
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto  pb-20 px-4 lg:px-8">
        <div className="pt-10 md:pt-12 mx-auto">
          <Project
            data={{
              title: "Meditrust Lab",
              summary:
                "This project is developed for a pathology lab in Delhi, India. Although there are softwares available in the market for this purpose but they are bulky, difficult to use, hard on the eyes and they don't offer customizations. The lab wanted a software which fulfill thier requirements, easy to use, and can be accessed from anywhere without the hassle of any installation process.",
              link: "https://github.com/MohdImran001/lab-report-management-system",
            }}
          >
            <FontAwesomeIcon icon={faFileMedicalAlt} size="3x" />
          </Project>
        </div>
      </div>
    </main>
  </Layout>
)

export default ProjectsPage
