import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"
import { GetStaticProps } from "next"
import Layout from "../components/layout"
import Header from "../components/Home/header"
import Body from "../components/Home/body"
import Seo from "../components/seo"
import { createPortal } from 'react-dom';
import WorkSingleton from "../components/work/workSingleton"
import { getWorkPageData, WorkItem } from "../components/work/workData";

export const SEARCH_PAGE_PARAM = "page";
export const WORK_PAGE_PARAM = "item";

interface IndexPageProps {
  workItems: WorkItem[]
}

const IndexPage = ({ workItems: initialWorkItems }: IndexPageProps) => {
const router = useRouter()
const workItems = initialWorkItems;
const [modalIsVisible, setModalIsVisible] = useState(false);
const [activeModalItem, setActiveModalItem] = useState(workItems[0] || null);
const bodyRef = useRef(null);
const headerRef = useRef(null);

function openModal(workItem) {
  setActiveModalItem(workItem);
  setModalIsVisible(true);
}

function closeModal() {
  setModalIsVisible(false);
  const searchParams = new URLSearchParams(window.location.search);
  const path = activeModalItem?.path.split("/").filter(Boolean) || [];
  
  searchParams.delete(WORK_PAGE_PARAM);
  if (path[0]) {
    searchParams.set(SEARCH_PAGE_PARAM, path[0]);
  }
  
  router.push(`/?${searchParams.toString()}`, undefined, { shallow: true });
}

useEffect(() => {
  if(!document) return;
  document.body.style.overflowY = modalIsVisible ? "hidden" : "auto";

  const modalRoot = document.getElementById("modal-root");
  if(modalRoot) {
    modalRoot.style.pointerEvents = modalIsVisible ? "auto" : "none";
    modalRoot.style.overflowY = modalIsVisible ? "scroll" : "hidden";
    modalRoot.scrollTop = 0;
  }
  //update the browser history to include the path of the active modal item
  if(modalIsVisible && activeModalItem) {
    const searchParams = new URLSearchParams(window.location.search);
    const path = activeModalItem.path.split("/").filter(Boolean);
    
    searchParams.set(WORK_PAGE_PARAM, path[1]);
    searchParams.set(SEARCH_PAGE_PARAM, path[0]);

    router.push(`/?${searchParams.toString()}`, undefined, { shallow: true });
  }
}, [modalIsVisible, activeModalItem, router]);



function clickOutsideModal(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if(!target.classList.contains("modal-inner") && !target.closest(".modal-inner")) {
    closeModal();
  }
}

const handleEscape = (e: KeyboardEvent) => {
  if(e.key === "Escape") {
    closeModal();
  }
};

//on mount/unmount. 
//Listen for back/forward buttons to manage modal state
//Open the modal on page load if the url contains a work page
//Navigate to elementId if the url contains a page param
useEffect(() => {
  if(typeof window === 'undefined') return;
  
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
    const foundItem = workItems.find(node => {
      return node.path.includes(workPageParam || '');
    });
    if(foundItem) {
      setActiveModalItem(foundItem);
      setModalIsVisible(true);
    }
  }

  //handler for back/forward buttons - use Next.js router events
  const handleRouteChange = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const workPageParam = searchParams.get(WORK_PAGE_PARAM);
    const isWorkPage = !!workPageParam;
    
    const newWorkItem = workItems.find(node => {
      return node.path.includes(workPageParam || '');
    });

    if(isWorkPage && newWorkItem) {
      setActiveModalItem(newWorkItem);
      setModalIsVisible(true);
    } else {
      setModalIsVisible(false);
    }
  };
  
  router.events?.on('routeChangeComplete', handleRouteChange);
  
  const modalRoot = document.getElementById("modal-root");
  if(modalRoot) {
    modalRoot.addEventListener("click", clickOutsideModal);
    document.addEventListener("keydown", handleEscape);
  }

  return () => {
    if(modalRoot) {
      modalRoot.removeEventListener("click", clickOutsideModal);
      document.removeEventListener("keydown", handleEscape);
    }
    router.events?.off('routeChangeComplete', handleRouteChange);
  }
}, [router, workItems]);


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


  if (workItems.length === 0 || !activeModalItem) {
    return (
      <>
        <Seo title="The Void - Visual Media and Experience Designer" />
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <Seo title="The Void - Visual Media and Experience Designer" />
      <div className="min-h-screen w-screen">
        <Layout hasFooter={false} hasNav={false}>
            <div className="max-w-7xl mx-auto lg:px-6 md:px-3 relative box-border flex flex-row gap-7 justify-between" ref={bodyRef}>
              <Header headerRef={headerRef} />
              <Body headerRef={headerRef} bodyRef={bodyRef} workItems={workItems} openModal={openModal} />
            </div>
        </Layout>
      </div>
      {typeof document !== 'undefined' && document.getElementById("modal-root") && createPortal(
        <Modal onClose={() => closeModal()} isVisible={modalIsVisible} workItem={activeModalItem} />,
        document.getElementById("modal-root")!
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const workItems = getWorkPageData()
  
  return {
    props: {
      workItems,
    },
  }
}

export default IndexPage
