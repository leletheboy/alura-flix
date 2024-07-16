import useVideos from "../../hooks/useVideos";
import { TbTrashX } from "react-icons/tb";
import { RiEdit2Fill } from "react-icons/ri";

import './styles.css'

const Category = ({ title, color, videos = [], openModal }) => {
    const { deleteVideo } = useVideos()
    
    if(videos.length === 0) return
    return (
        <div className="category container">
            <h3 style={{ backgroundColor: color }}>{title}</h3>
            <div className="videos d-flex justify-content-start align-items-center">
                {videos.map(video => {
                    const style = {
                        border: `4px solid ${color}`,
                    }
                    return (
                        <div style={style} target='_blank' key={video.id} className="video">
                            <img src={video.image} alt={video.title} />
                            <div className="actions d-flex justify-content-around align-items-center">
                                <div className="d-flex align-items-center" onClick={() => deleteVideo(video.id)}>
                                    <TbTrashX />
                                    <span>DELETAR</span>
                                </div>
                                <div className="d-flex align-items-center" onClick={() => openModal(video.id)}>
                                    <RiEdit2Fill />
                                    <span>EDITAR</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category