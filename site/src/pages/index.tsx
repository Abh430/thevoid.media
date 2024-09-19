import React, { useEffect, useState } from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import Body from "../components/Home/body"
import Seo from "../components/seo"
import { createPortal } from 'react-dom';

import ScrollSpy from "react-ui-scrollspy";

import WorkSingleton from "../components/work/workSingleton"

const IndexPage = (props) => {
console.log(props);
const [modalIsVisible, setModalIsVisible] = useState(false);
const [activeModalItem, setActiveModalItem] = useState(null);
console.log(activeModalItem);

function openModal(workItem) {
  setActiveModalItem(workItem);
  setModalIsVisible(true);
}

function closeModal() {
  setModalIsVisible(false);
}

useEffect(() => {
  document.body.style.overflowY = modalIsVisible ? "hidden" : "auto";
  document.body.style.position = modalIsVisible ? "fixed" : "relative";
}, [modalIsVisible]);


const Modal = ({ onClose, isVisible, workItem }) => {
  return (
    <>
      <div className={"modal bg-black/75 " + (isVisible ? "visible active" : "invisible")}>
      <div className="max-w-7xl mx-auto modal-inner relative py-12 px-12">
          <span className="modal-close text-zinc-50 fixed top-12 right-20 cursor-pointer p-4 border-solid border" onClick={() => onClose()}>X</span>
          <WorkSingleton workItem={workItem} />
        </div>
      </div>
    </>
  );
}


  return (
    <>
      <div className="min-h-screen w-screen">
        <Layout hasFooter={false} hasNav={false}>
            <div className="max-w-7xl mx-auto lg:px-6 md:px-3 relative box-border flex flex-row gap-7 justify-between">
              <Header />
              <Body {...props} openModal={openModal} />
            </div>
        </Layout>
      </div>
      {createPortal(
        <Modal onClose={() => closeModal()} isVisible={modalIsVisible} workItem={activeModalItem} />,
        document.getElementById("modal-root")
      )}
    </>
  );
}



export const Head = (props) => {

  return (
    <Seo
      title="The Void - Visual Media and Experience Designer"
      description="I am da voyyyd."
    >
      <body className="" />
  
    </Seo>
  );
}

export default IndexPage
