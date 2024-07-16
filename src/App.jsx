import { useEffect, useState } from 'react'
import useVideos from './hooks/useVideos'

import BounceLoader from "react-spinners/BounceLoader";
import Header from './components/Header'
import Banner from './components/Banner'
import Category from './components/Category'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const { loadingVideos, getByCategory, videos, getVideos } = useVideos()
  const [ videosHome, setVideosHome ] = useState([])
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ videoSelected, setVideoSelected ] = useState(null)

  const VIDEOS_CATEGORIES = [
    "Front end",
    "Back end",
    "Mobile"
  ]

  const CATEGORIES_COLORS = {
    "Front end": "#6BD1FF",
    "Back end": "#00C86F",
    "Mobile": "#FFBA05"
  }

  const getVideosByCategory = () => {
    VIDEOS_CATEGORIES.map(category => {
      const categoryVideos = getByCategory(category);
      setVideosHome(values => {
        return {
         ...values,
          [category]: categoryVideos
        };
      });
    })
  }

  const closeModal = () => {
    setModalOpen(false);
    setVideoSelected(false);
    getVideos()
  }

  const openModal = (videoId = 0) => {
    setModalOpen(true);
    setVideoSelected(videoId);
  }

  useEffect(() => {
    if (!loadingVideos) {
      getVideosByCategory();
    }
  }, [loadingVideos, videos])

  if(loadingVideos) {
    return ( 
      <div className="d-flex justify-content-center align-items-center h-100">
        <BounceLoader
          color="#fff"
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div> 
    )
  } 

  return (
    <>
      <Header openModal={openModal} />
      <Banner />
      <div className="categories">
        {
          VIDEOS_CATEGORIES.map(category => (
            <Category openModal={openModal} title={category} color={CATEGORIES_COLORS[category]} key={category} videos={videosHome[category]} />
          ))
        }
      </div>
      <Footer openModal={openModal} />
      <Modal closeModal={closeModal} isOpen={modalOpen} videoId={videoSelected} categories={VIDEOS_CATEGORIES} />
    </>
  )
}

export default App
