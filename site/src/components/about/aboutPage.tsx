import React from "react"
import { Fade } from "react-awesome-reveal"

const AboutPage = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto mt-10">
      
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          
        </div>

      <div className="mt-10 px-8">
        <Fade cascade>
          <h2 className="text-zinc-50 py-2 text-2xl font-semibold">ABOUT</h2>
        </Fade>
        <Fade cascade>
          <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl text-gradient bg-gradient-to-r from-pink-800 to-purple-700">
            Andrew Hunter aka The Void
          </h3>
        </Fade>
        <Fade cascade>
          <p className="text-zinc-200 opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default AboutPage
