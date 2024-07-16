import { useEffect, useState } from "react";
import useVideos from "../../hooks/useVideos";

import './styles.css'

const Banner = () => {
    const { loadingVideos, getVideoBanner } = useVideos();
    const [ banner, setBanner ] = useState(null)

    useEffect(() => {
        if(!loadingVideos) {
            setBanner(getVideoBanner())
        }
    }, [loadingVideos])

    if(!banner) return
    return (
        <section className="banner">
            <div className="container content d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${banner.image})` }}>
                <div className="backshadow"></div>

                <div className="d-flex justify-content-between">
                    <div className="left">
                        <h2 className="category-chip">{banner.category}</h2>
                        <h1>{banner.title}</h1>
                        <p>{banner.description}</p>
                    </div>

                    <div className="right d-flex justify-content-end align-items-center">
                        <a className="video" href={banner.url} target="_blank" rel="noopener noreferrer">
                            <img src={banner.image} alt={banner.title} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner;