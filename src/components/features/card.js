import * as React from "react"

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow text-sm font-normal lg:text-md rounded-xl px-6  py-10 text-center space-y-4">
      {children}
    </div>
  )
}

export default Card
