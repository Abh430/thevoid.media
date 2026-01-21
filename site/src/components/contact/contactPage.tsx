import React from "react"
import { Fade } from "react-awesome-reveal"
import Input from "../Atoms/input"
import Button from "../Atoms/button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const emailAddress = "andrew@thevoid.media";

// Components
const ContactPage = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto mt-10">
      <div className="mb-20 sm:mb-10 px-2 md:px-8">
        <Fade cascade>
          <h2 className="text-zinc-50 py-2 text-2xl font-semibold">CONTACT</h2>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-ful">
              <div className="flex flex-wrap">
                <div className="mb-12 shrink-0 basis-auto">
                  <EmailContact />
                </div>
                <div className="my-3 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-3">
                  <SocialMediaLinks />
                </div>
              </div>
            </div>
        </Fade>
      </div>
    </div>
  )
}

export const EmailContact = () => {
  return (
    <div className="flex items-center ">
      <div className="inline-block mr-2 rounded-md bg-teal-400-100 py-4 text-zinc-300">
        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
      </div>
      <p className="mb-2">
        <a className="text-indigo-300 duration-200 transition hover:text-indigo-200" href={`mailto:${emailAddress}`}>
          {emailAddress}
        </a>
      </p>
    </div>
  );
}

export const SocialMediaLinks = () => {
  return (
      <ul className="text-neutral-500 items-center flex">
        <li className="ml-4">
          <a target="_blank" href="https://www.instagram.com/thevoid.media/">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
        </li>
        <li className="ml-4">
          <a target="_blank" href="https://www.facebook.com/TheVoidVisual">
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </a>
        </li>
        <li className="ml-4">
          <a target="_blank" href="https://github.com/Abh430">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </li>
      </ul>
  );
}

export default ContactPage
