import React, { useEffect, useState, useRef } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import {
  createMemorySource,
  createHistory
} from "@reach/router"

// Components
import Header from "../components/Home/header"
import Body from "../components/Home/body"
import Seo from "../components/seo"
import { createPortal } from 'react-dom';

import ScrollSpy from "react-ui-scrollspy";

import WorkSingleton from "../components/work/workSingleton"

//data
import { getWorkPageData } from "../components/work/workData";

export const SEARCH_PAGE_PARAM = "page";
export const WORK_PAGE_PARAM = "item";

const IndexPage = (props) => {
const workItems = getWorkPageData();
const [modalIsVisible, setModalIsVisible] = useState(false);
const [activeModalItem, setActiveModalItem] = useState(workItems[0]);
const bodyRef = useRef(null);
const headerRef = useRef(null);

function openModal(workItem) {
  setActiveModalItem(workItem);
  setModalIsVisible(true);
}

function closeModal() {
  setModalIsVisible(false);
  navigate("/");
}

useEffect(() => {
  if(!document) return;
  document.body.style.overflowY = modalIsVisible ? "hidden" : "auto";

  document.getElementById("modal-root").style.pointerEvents = modalIsVisible ? "auto" : "none";
  document.getElementById("modal-root").style.overflowY = modalIsVisible ? "scroll" : "hidden";
  document.getElementById("modal-root").scrollTop = 0;
  //update the browser history to include the path of the active modal item
  if(modalIsVisible && activeModalItem) {
    const searchParams = new URLSearchParams(window.location.search);
    const path = activeModalItem.path.split("/").filter(Boolean);
    
    searchParams.set(WORK_PAGE_PARAM, path[1]);
    searchParams.set(SEARCH_PAGE_PARAM, path[0]);

    navigate(`/?${searchParams.toString()}`);
  }
}, [modalIsVisible, activeModalItem]);



function clickOutsideModal(e) {
  if(!e.target.classList.contains("modal-inner") && !e.target.closest(".modal-inner")) {
    closeModal();
  }
}

//create a click handler for the modal element that fires the modal close if clicked outside of "modal-inner" class


//on mount/unmount. 
//Listen for back/forward buttons to manage modal state
//Open the modal on page load if the url contains a work page
//Navigate to elementId if the url contains a page param
useEffect(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get(SEARCH_PAGE_PARAM);
  const workPageParam = searchParams.get(WORK_PAGE_PARAM);
  const isWorkPage = !!workPageParam;

  if(pageParam) {
    const element = document.getElementById(pageParam);
    if(element) {
      element.scrollIntoView();
    }
  }
  
  if(isWorkPage && workItems.length) {
    setActiveModalItem(workItems.find(node => {
      return node.path.includes(workPageParam);
    }));
    setModalIsVisible(isWorkPage);
  }

  //handler for back/forward buttons
  const browserHistory = createHistory(window);
  const backListener = browserHistory.listen((history) => {
    if (history.action === "POP") {
      
      const newWorkItem = workItems.find(node => {
        return node.path.includes(workPageParam);
      });

      if(isWorkPage && newWorkItem) {
        openModal(newWorkItem);
      } else {
        closeModal();
      }
  
    }
  });

  const modal = document.querySelector(".modal");
  if(modal) {
    document.getElementById("modal-root").addEventListener("click", clickOutsideModal);
  }

  return () => {
    if(modal) {
      document.getElementById("modal-root").removeEventListener("click", clickOutsideModal);
    }
  }

  
}, []);


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
            <div className="max-w-7xl mx-auto lg:px-6 md:px-3 relative box-border flex flex-row gap-7 justify-between" ref={bodyRef}>
              <Header />
              <Body {...props} headerRef={headerRef} bodyRef={bodyRef} workItems={workItems} openModal={openModal} />
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
