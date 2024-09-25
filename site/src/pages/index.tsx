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
const [modalIsVisible, setModalIsVisible] = useState(false);
const [activeModalItem, setActiveModalItem] = useState(null);

function openModal(workItem) {
  setActiveModalItem(workItem);
  setModalIsVisible(true);
}

function closeModal() {
  setModalIsVisible(false);
}

useEffect(() => {
  if(!document) return;
  document.body.style.overflowY = modalIsVisible ? "hidden" : "auto";

  document.getElementById("modal-root").style.pointerEvents = modalIsVisible ? "auto" : "none";
  document.getElementById("modal-root").style.overflowY = modalIsVisible ? "scroll" : "hidden";
  document.getElementById("modal-root").scrollTop = 0;

  //update the browser history to include the path of the active modal item
  if(modalIsVisible) {
    window.history.pushState(null, "", activeModalItem.path);
  }

}, [modalIsVisible]);

//create a click handler for the modal element that fires the modal close if clicked outside of "modal-inner" class
useEffect(() => {
  if(!document) return;
  const modal = document.querySelector(".modal");
  if(modal) {
    modal.addEventListener("click", (e) => {
      //check if the element or its parents have the modal-inner class
      if(!e.target.classList.contains("modal-inner") && !e.target.closest(".modal-inner")) {
        setModalIsVisible(false); 
      }
    });
  }

  return () => {
    if(modal) {
      modal.removeEventListener("click", (e) => {
        if(!e.target.classList.contains("modal-inner") && !e.target.closest(".modal-inner")) {
          setModalIsVisible(false); 
        }
      });
    }
  }

}, [modalIsVisible]);


const Modal = ({ onClose, isVisible, workItem }) => {
  return (
    <>
      <div className={"modal bg-zinc-800/80 p-12 " + (isVisible ? "visible active" : "invisible")}>
      <div className="max-w-6xl mx-auto modal-inner relative bg-zinc-950/90">
      <span className="modal-close float-right text-zinc-50 sticky ml-auto cursor-pointer px-3 py-1 rounded-full border-solid border top-6 right-8 mr-4 mt-4" onClick={() => onClose()}>X</span>
        <div className="py-16 px-20">
          <WorkSingleton workItem={workItem} onClose={onClose} />
        </div>
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
