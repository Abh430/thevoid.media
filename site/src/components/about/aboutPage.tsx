import React from "react"
import { Fade } from "react-awesome-reveal"

const AboutPage = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto mt-10">
      
        {/* <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          
        </div> */}

      <div className="px-2 mb-20 md:px-8">  
        <Fade cascade>
          <h2 className="text-zinc-50 pt-2 pb-8 text-2xl font-semibold">ABOUT</h2>
        </Fade>
        <Fade cascade>
          <h3 className="text-indigo-100 text-2xl font-light">
            Andrew Hunter aka The Void
          </h3>
        </Fade>
        <Fade cascade>
          <p className="text-zinc-200 opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">Andrew Hunter is a multidisciplinary digital artist and experience engineer, dedicated to exploring the essence of the human condition. His work spans multiple mediums, including event production, software and web development, projection mapping, and fine art. With a focus on creating meaningful connections, Andrew's work delves into themes such as emotion, nature, technology, and human relationships. By crafting internationally recognized art and engineering applications used worldwide, Andrew has established himself as a standout creator at the forefront of a new digital frontier.
          </p>
          <p className="text-zinc-200 opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Using art and technology as powerful tools to connect people and foster empathy, Andrew is committed to leveraging his creativity and expertise to inspire and improve the lives of others. When he isn’t performing for sold-out crowds at prestigious venues or building rich interactive experiences, he enjoys nurturing his plants, cycling, hiking, and spending time with his pets.
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default AboutPage
