import { useEffect, useState, useCallback } from "react";

const useVideos = () => {
    const [ videos, setVideos ] = useState([])
    const [ loadingVideos, setLoadingVideos ] = useState(false)

    const getVideos = async () => {
        setLoadingVideos(true)
        const response = await fetch("http://localhost:3000/videos");
        const data = await response.json();
        setVideos(data);
        setLoadingVideos(false)
    }

    const editVideo = async (id, video) => {
        video.id = id;
        await fetch(`http://localhost:3000/videos/${id}`, {
            method: "PUT",
            body: JSON.stringify(video)
        });
        getVideos();
    }

    const createVideo = async (video) => {
        await fetch(`http://localhost:3000/videos`, {
            method: "POST",
            body: JSON.stringify(video)
        });
        getVideos();
    }

    const deleteVideo = async (id) => {
        await fetch(`http://localhost:3000/videos/${id}`, {
            method: "DELETE"
        });
        getVideos();
    }

    
    const getByCategory = (category = "Front end") => {
        const filteredVideos = videos.filter(video => video.category === category);
        return filteredVideos;
    }

    const getVideoById  = (id) => {
        const video = videos.find(video => video.id === id);
        return video;
    }

    const getVideoBanner = () => {
        return videos[0];
    }

    useEffect(() => {
        getVideos()
    }, [])

    return { getVideos, loadingVideos, videos, getByCategory, getVideoBanner, editVideo, deleteVideo, createVideo, getVideoById };
}

export default useVideos;