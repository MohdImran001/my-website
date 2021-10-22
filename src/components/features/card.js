import * as React from "react"

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow text-md font-normal lg:text-lg rounded-xl p-12 md:p-20 text-center space-y-16">
      {children}
    </div>
  )
}

export default Card
