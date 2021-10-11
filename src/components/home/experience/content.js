import * as React from "react"

import { ArrowNarrowRightIcon } from "@heroicons/react/outline"

const Content = ({ content }) => {
  return (
    <div className="">
      <ul style={{ listStyle: "none" }} className="-space-y-2 my-4">
        {content.map((item, index) => {
          return (
            <li className="text-left" key={index}>
              <div className="flex flex-row space-x-2">
                <p className="mt-4">
                  <ArrowNarrowRightIcon
                    className="inline-block w-4 h-4"
                    aria-hidden="true"
                  />
                </p>
                <p className="text-sm font-normal mt-5">{item}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Content
