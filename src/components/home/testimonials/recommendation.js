import * as React from "react"

import { ExternalLinkIcon } from "@heroicons/react/outline"

const Recommendation = ({
  data: {
    text,
    author: { name, role, profileUrl, imageUrl },
    themeColor,
    roleTextColor,
    svgColor,
  },
}) => {
  return (
    <div className="bg-white shadow max-w-2xl  mt-10 md:mt-16 mx-auto rounded-xl">
      <div className="p-6 md:p-10 rounded-t-xl bg-white text-md md:text-lg leading-8 md:leading-8 font-normal text-gray-900">
        <svg width="45" height="36" className="mb-5" style={{ fill: svgColor }}>
          <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
        </svg>
        <p>{text}</p>
      </div>
      <div
        className={
          themeColor
            ? `flex space-x-4 text-left text-white font-medium p-6 pl-10 rounded-b-xl bg-gradient-to-r ${themeColor}`
            : `flex space-x-4 text-left text-white font-medium p-6 pl-10 rounded-b-xl  bg-gradient-to-r from-green-400 to-green-600 `
        }
      >
        <img src={imageUrl} className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-bold">
            <a href={profileUrl}>
              {name}{" "}
              <ExternalLinkIcon
                className="inline-block w-4 h-4 -mt-1"
                aria-hidden="true"
              />
            </a>
          </p>
          <p
            className={
              roleTextColor
                ? `text-sm ${roleTextColor}`
                : `text-sm text-green-100`
            }
          >
            {" "}
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Recommendation
