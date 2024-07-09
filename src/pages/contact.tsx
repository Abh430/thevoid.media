import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import {Fade} from "react-awesome-reveal"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact - Holo"
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>

      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <Fade duration={1200}>
          <div className="bg-dp opacity-70 p-10 rounded-xl w-3/4 m-5 w-auto">
            <h1 className="text-3xl text-white">CONTACT HOLO</h1>
            <h2 className=" text-black text-gradient bg-gradient-to-r from-pink to-purple text-4xl font-bold mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              Gatsby Theme
            </h2>
            <p className="text-lg mt-2 opacity-70 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              A stunning and minimal personalized website starter theme.
            </p>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-ful mt-10">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-zinc-300">
                      <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Email
                      </p>
                      <p className="text-neutral-500 mb-2">
                        <a href="mailto:hello@holo.com?subject=Contact Holo for help.">
                          hello@holo.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-zinc-300">
                      <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                      </div>
                    </div>
                    <div className="ml-2 grow">
                      <p className="mb-2 font-bold underline decoration-pink">
                        Social Media
                      </p>
                      <ul className="text-neutral-500 mb-2">
                        <li>
                          <a href="">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Linked-in
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="mt-5" name="contact" onSubmit={() => {}}>
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <label>
                    <Input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                    ></Input>
                  </label>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <label>
                    <Input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                    ></Input>
                  </label>
                </div>
              </div>
              <label>
                <textarea
                  className="mt-5 w-full bg-bg bg-opacity-20 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  rows="5"
                  placeholder="How can we help you?"
                  type="text"
                  name="Message"
                ></textarea>
              </label>
              <div>
                <label>
                  <Button
                    type="submit"
                    title="Send Message"
                    colorClass="bg-gradient-to-r from-pink to-purple font-montserrat"
                    marginClass="mt-5"
                  ></Button>
                </label>
              </div>
            </form>
          </div>
        </Fade>
        <Fade cascade>
          <div className="overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            {/* <img
              className="object-cover h-full w-full"
              src={image}
              alt="HeroImage"
            ></img> */}
            <StaticImage style={{
                  // gridArea: "1/1",
                  // maxHeight: 600,
                  width: '300px'
                }}
                className="background-image"
                src="../images/holographic-background.webp"
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                alt="Forward Escape" />
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default Contact
