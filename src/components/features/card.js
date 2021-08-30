import * as React from "react"

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow text-sm lg:text-xs rounded-xl p-4">
      {children}
    </div>
  )
}

export default Card
