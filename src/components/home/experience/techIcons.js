import * as React from "react"

import ReactLogo from "../../../../assets/ReactLogo.svg"
import TypeScriptLogo from "../../../../assets/typescript.svg"
import ReduxLogo from "../../../../assets/redux.svg"
import JSLogo from "../../../../assets/javascript.svg"
import NextjsLogo from "../../../../assets/nextjs.svg"
import FirebaseLogo from "../../../../assets/firebase.svg"
import VercelLogo from "../../../../assets/vercel.svg"
import AWSLogo from "../../../../assets/aws.svg"
import LambdaLogo from "../../../../assets/awslambda.svg"
import S3Logo from "../../../../assets/awss3.svg"
import PythonLogo from "../../../../assets/python.svg"

const icon = name => {
  if (name === "reactjs") {
    return (
      <div className="w-10 h-10 mt-1">
        <ReactLogo />
      </div>
    )
  }
  if (name === "ts") {
    return (
      <div className="w-10 h-10">
        <TypeScriptLogo />
      </div>
    )
  }
  if (name === "redux") {
    return (
      <div className="w-10 h-10">
        <ReduxLogo />
      </div>
    )
  }
  if (name === "js") {
    return (
      <div className="w-10 h-10">
        <JSLogo />
      </div>
    )
  }
  if (name === "nextjs") {
    return (
      <div className="w-10 h-10">
        <NextjsLogo />
      </div>
    )
  }
  if (name === "firebase") {
    return (
      <div className="w-10 h-10">
        <FirebaseLogo />
      </div>
    )
  }
  if (name === "vercel") {
    return (
      <div className="w-10 h-10 -mt-6">
        <VercelLogo width="100" height="100" />
      </div>
    )
  }
  if (name === "aws") {
    return (
      <div className="w-10 h-10">
        <AWSLogo />
      </div>
    )
  }
  if (name === "awslambda") {
    return (
      <div className="w-10 h-10 ml-2">
        <LambdaLogo width="35" height="35" />
      </div>
    )
  }
  if (name === "awss3") {
    return (
      <div className="w-10 h-10">
        <S3Logo />
      </div>
    )
  }
  if (name === "python") {
    return (
      <div className="w-10 h-10">
        <PythonLogo />
      </div>
    )
  }
}

const TechIcons = ({ icons }) => {
  return (
    <div className="flex flex-row mt-6 space-x-8  justify-center -ml-10">
      {icons.map((name, index) => icon(name))}
    </div>
  )
}

export default TechIcons
