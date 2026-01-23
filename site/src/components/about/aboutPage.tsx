import React from "react"
import ExportedImage from "next-image-export-optimizer"
import { Fade } from "react-awesome-reveal"

const AboutPage = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto mt-10">
      <div className="mb-20">  
        <Fade cascade>
          <h2 className="text-zinc-50 pt-2 pb-8 text-2xl font-semibold">ABOUT</h2>
        </Fade>
        
        <Fade cascade>
          <h3 className="text-indigo-100 text-2xl font-light">
            Andrew Hunter aka The Void
          </h3>
        </Fade>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mt-3">
          {/* Text content */}
          <div className="flex-1">
            <Fade cascade>
              <p className="text-zinc-200 opacity-70 font-normal text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">Andrew Hunter is a multidisciplinary digital artist and experience engineer, dedicated to exploring the essence of the human condition. His work spans multiple mediums, including event production, software and web development, projection mapping, and fine art. With a focus on creating meaningful connections, Andrew's work delves into themes such as emotion, nature, technology, and human relationships. By crafting internationally recognized art and engineering applications used worldwide, Andrew has established himself as a standout creator at the forefront of a new digital frontier.
              </p>
              <p className="text-zinc-200 opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
              Using art and technology as powerful tools to connect people and foster empathy, Andrew is committed to leveraging his creativity and expertise to inspire and improve the lives of others. When he isn't performing for sold-out crowds at prestigious venues or building rich interactive experiences, he enjoys nurturing his plants, cycling, hiking, and spending time with his pets.
              </p>
            </Fade>
          </div>
          
          {/* Selfie aside */}
          <aside className="w-full md:w-64 lg:w-80 flex-shrink-0">
            <Fade>
              <div className="relative overflow-hidden rounded-lg">
                <ExportedImage
                  src="/images/selfie.jpg"
                  alt="Andrew Hunter"
                  width={320}
                  height={400}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            </Fade>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
