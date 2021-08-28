import * as React from "react"

const Card = ({ children }) => {
  return (
    <div className="min-w-full lg:min-w-0 lg:w-1/4 bg-white shadow  max-w-xs text-sm rounded-xl p-4">
      {children}
    </div>
  )
}

export default Card
