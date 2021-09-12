import React from "react"
import { ExternalLinkIcon } from "@heroicons/react/outline"

const ExternalLink = ({ to, children }) => {
  return (
    <a href={to} className="text-decoration-none">
      {children}
      <ExternalLinkIcon className="inline-block w-4 h-4" aria-hidden="true" />
    </a>
  )
}

export default ExternalLink
