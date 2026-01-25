import * as React from "react"
import { Fade } from "react-awesome-reveal"

// Components
import AboutPage from "../about/aboutPage"
import WorkPage from "../work/workPage"
import ContactPage from "../contact/contactPage"

import ScrollSpy from "react-ui-scrollspy";

const MerchCTA = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 mb-0 px-0 md:px-0">
      <Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://merch.thevoid.media" 
            target="_blank" 
            rel="noopener"
            className="group block overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <img 
              src="/images/merch-banner.jpg" 
              alt="Shop The Void Merch" 
              className="w-full h-auto object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          </a>
          <a 
            href="https://shop.thevoid.media" 
            target="_blank" 
            rel="noopener"
            className="group block overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <img 
              src="/images/shop-banner.jpg" 
              alt="Shop The Void" 
              className="w-full h-auto object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          </a>
        </div>
      </Fade>
    </div>
  );
};

interface BodyBlockProps {
  openModal?: (workItem: any) => void;
  headerRef?: React.RefObject<HTMLDivElement | null>;
  bodyRef?: React.RefObject<HTMLDivElement | null>;
  workItems?: any[];
}

const BodyBlock = (props: BodyBlockProps) => {
  const { openModal, headerRef, bodyRef } = props;

  return (
    <main className="max-w-10/12 2-10/12 gap-10">
      {/* <ScrollSpy offsetTop={10} offsetBottom={0} updateHistoryStack={false} onUpdateCallback={onUpdate}> */}
        <AboutPage />
        <WorkPage  workItems={props.workItems} hasModal={true} openModal={openModal} />
        <ContactPage />
        <MerchCTA />
      {/* </ScrollSpy> */}
    </main>
  )
}

export default BodyBlock;