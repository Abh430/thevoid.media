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

interface IndexPageProps {
  workItems: WorkItem[]
}

const IndexPage = ({ workItems: initialWorkItems }: IndexPageProps) => {
const router = useRouter()
const workItems = initialWorkItems;
const [modalIsVisible, setModalIsVisible] = useState(false);
const [activeModalItem, setActiveModalItem] = useState<WorkItem | null>(null);
const bodyRef = useRef<HTMLDivElement>(null);
const headerRef = useRef<HTMLDivElement>(null);

// Open modal and update route
function openModal(workItem: WorkItem) {
  setActiveModalItem(workItem);
  setModalIsVisible(true);
  // Update URL without triggering navigation
  window.history.pushState({}, '', workItem.path);
}

// Close modal and navigate back to home
function closeModal() {
  setModalIsVisible(false);
  // Update URL without triggering navigation
  window.history.pushState({}, '', '/');
}

// Handle modal visibility effects
useEffect(() => {
  if(!document) return;
  document.body.style.overflowY = modalIsVisible ? "hidden" : "auto";

  const modalRoot = document.getElementById("modal-root");
  if(modalRoot) {
    modalRoot.style.pointerEvents = modalIsVisible ? "auto" : "none";
    modalRoot.style.overflowY = modalIsVisible ? "scroll" : "hidden";
    modalRoot.scrollTop = 0;
  }
}, [modalIsVisible]);

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

// Sync modal state with route - handle browser back/forward buttons
useEffect(() => {
  if(typeof window === 'undefined') return;
  
  const syncModalWithRoute = () => {
    const currentPath = window.location.pathname;
    
    // Check if current route matches a work item path (and we're on the home page component)
    if (router.pathname === '/' && currentPath.startsWith('/work/')) {
      const slug = currentPath.split('/work/')[1].split('?')[0].split('#')[0];
      const foundItem = workItems.find(item => item.slug === slug || item.path === currentPath);
      
      if(foundItem && (!modalIsVisible || activeModalItem?.slug !== foundItem.slug)) {
        setActiveModalItem(foundItem);
        setModalIsVisible(true);
      }
    } else if (currentPath === '/' || currentPath.startsWith('/#')) {
      // If we're on the home page, close modal if it's open
      if(modalIsVisible) {
        setModalIsVisible(false);
      }
      
      // Handle anchor scrolling
      const hash = window.location.hash;
      if(hash) {
        const element = document.getElementById(hash.substring(1));
        if(element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  };
  
  // Initial sync on mount
  syncModalWithRoute();
  
  // Handle browser back/forward buttons
  const handlePopState = () => {
    syncModalWithRoute();
  };
  
  window.addEventListener('popstate', handlePopState);
  
  const modalRoot = document.getElementById("modal-root");
  if(modalRoot) {
    modalRoot.addEventListener("click", clickOutsideModal);
    document.addEventListener("keydown", handleEscape);
  }

  return () => {
    window.removeEventListener('popstate', handlePopState);
    if(modalRoot) {
      modalRoot.removeEventListener("click", clickOutsideModal);
      document.removeEventListener("keydown", handleEscape);
    }
  };
}, [router.pathname, workItems, modalIsVisible, activeModalItem]);

const Modal = ({ onClose, isVisible, workItem }: { onClose: () => void, isVisible: boolean, workItem: WorkItem | null }) => {
  if (!workItem) return null;
  
  return (
    <>
      <div className={"modal bg-zinc-800/80 p-2 md:p-12 " + (isVisible ? "visible active" : "invisible")}>
      <div className="max-w-6xl mx-auto modal-inner relative bg-zinc-950/90">
      <span className="modal-close float-right text-zinc-50 sticky ml-auto cursor-pointer px-3 py-1 rounded-full border-solid border top-6 right-8 mr-4 mt-4" onClick={() => onClose()}>X</span>
        <div className="p-4 md:py-16 md:px-20">
          <WorkSingleton workItem={workItem} onClose={onClose} isModal={true} />
        </div>
        </div>
      </div>
    </>
  );
}

  if (workItems.length === 0) {
    return (
      <>
        <Seo title="The Void - Visual Media and Experience Designer" />
        <div>Loading...</div>
      </>
    );
  }

  if (!activeModalItem && router.asPath.startsWith('/work/')) {
    // Still loading work item
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
        <Layout hasFooter={true} hasNav={false}>
            <div className="relative box-border flex flex-col lg:flex-row gap-7 justify-between" ref={bodyRef}>
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
