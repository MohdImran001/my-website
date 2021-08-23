import * as React from "react"

const Heading = ({ children }) => {
  return (
    <h1 className="p-4 text-2xl text-gray-900 font-bold md:p-0 md:text-5xl lg:text-5xl lg:pt-10">
      {children}
    </h1>
  )
}

export default Heading
